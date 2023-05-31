<template>
  <div id="app" style="padding: 20px">
    <LocationSearch
      @search="searchLocation"
      @current-location="getCurrentLocation"
    />
    <TimeZoneDisplay :location="currentLocation" />
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

export default {
  components: {
    LocationSearch,
    LocationMap,
    LocationTable,
    TimeZoneDisplay,
  },
  setup() {
    const locations = ref([])
    const currentLocation = ref([40, 40])

    const searchLocation = (location) => {
      // TODO: Implement search functionality
      // Add the searched location to the locations array
      currentLocation.value = location.position
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
    }

    const deleteLocations = (selectedLocations) => {
      // Remove the selected locations from the locations array
      locations.value = locations.value.filter(
        (location) => !selectedLocations.includes(location.name)
      )
    }

    const goto = (position) => {
      currentLocation.value = position
    }

    return {
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
