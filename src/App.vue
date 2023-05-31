<template>
  <div id="app" style="padding: 20px">
    <LocationSearch
      @search="searchLocation"
      @current-location="getCurrentLocation"
    />
    <n-spin :show="isLoading">
      <TimeZoneDisplay :timeZone="timeZone" :localTime="localTime" />
    </n-spin>
    <LocationMap :location="currentLocation" />
    <LocationTable
      :locations="locations"
      @delete="deleteLocations"
      @goto="goto"
    />
  </div>
</template>

<script>
import { ref } from "vue"
import LocationSearch from "./components/LocationSearch.vue"
import LocationMap from "./components/LocationMap.vue"
import LocationTable from "./components/LocationTable.vue"
import TimeZoneDisplay from "./components/TimeZoneDisplay.vue"
import { NSpin } from "naive-ui"
import axios from "axios"

export default {
  components: {
    NSpin,
    LocationSearch,
    LocationMap,
    LocationTable,
    TimeZoneDisplay,
  },
  setup() {
    const locations = ref([])
    const currentLocation = ref([40, 40])
    const timeZone = ref(null)
    const localTime = ref(null)
    const isLoading = ref(false)

    const searchLocation = (location) => {
      currentLocation.value = location.position
      getTimeZone(location.position)
      locations.value.unshift({
        name: location.name,
        position: location.position,
        isChecked: false,
      })
    }

    const getCurrentLocation = (coords) => {
      searchLocation({
        name: "Your Current Position",
        position: [coords.lat, coords.lng],
      })
      getTimeZone([coords.lat, coords.lng])
    }

    const getTimeZone = async (location) => {
      try {
        isLoading.value = true
        const response = await axios.get(
          `https://api.timezonedb.com/v2.1/get-time-zone?key=${process.env.VUE_APP_TIME_ZONE_API_KEY}&format=json&by=position&lat=${location[0]}&lng=${location[1]}`
        )
        timeZone.value = response.data.zoneName
        localTime.value = response.data.formatted
      } catch (error) {
        console.error(error)
      } finally {
        isLoading.value = false
      }
    }
    const deleteLocations = (selectedLocations) => {
      locations.value = locations.value.filter(
        (location) => !selectedLocations.includes(location.name)
      )
    }

    const goto = (position) => {
      currentLocation.value = position
      getTimeZone(position)
    }

    return {
      timeZone,
      isLoading,
      localTime,
      locations,
      currentLocation,
      searchLocation,
      getCurrentLocation,
      deleteLocations,
      goto,
    }
  },
}
</script>
