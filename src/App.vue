<template>
  <div id="app">
    <LocationSearch
      @search="searchLocation"
      @current-location="getCurrentLocation"
    />
    <LocationMap :location="currentLocation" />
    <LocationTable :locations="locations" @delete="deleteLocations" />
  </div>
</template>

<script>
import { ref } from "vue"
import LocationSearch from "./components/LocationSearch.vue"
import LocationMap from "./components/LocationMap.vue"
import LocationTable from "./components/LocationTable.vue"
export default {
  components: {
    LocationSearch,
    LocationMap,
    LocationTable,
  },
  setup() {
    const locations = ref([])
    const currentLocation = ref([0, 0])

    const searchLocation = (location) => {
      // TODO: Implement search functionality
      // Add the searched location to the locations array
      locations.value.push({ name: location, isChecked: false })
    }

    const getCurrentLocation = (coords) => {
      currentLocation.value = [coords.lat, coords.lng]
    }

    const deleteLocations = (selectedLocations) => {
      // Remove the selected locations from the locations array
      locations.value = locations.value.filter(
        (location) => !selectedLocations.includes(location)
      )
    }

    return {
      locations,
      currentLocation,
      searchLocation,
      getCurrentLocation,
      deleteLocations,
    }
  },
}
</script>
