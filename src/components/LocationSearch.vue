<template>
  <div>
    <input
      type="text"
      v-model="location"
      @keyup.enter="searchLocation"
      placeholder="Enter a location"
    />
    <n-button @click="searchLocation">Search</n-button>
    <n-button @click="getCurrentLocation">Get Current Location</n-button>
  </div>
</template>

<script>
import { ref } from "vue"
import { NButton } from "naive-ui"
export default {
  components: {
    NButton,
  },
  setup(_, context) {
    const location = ref("")

    const searchLocation = () => {
      // Emit the location to the parent component
      context.emit("search", location?.value ?? "")
    }

    const getCurrentLocation = () => {
      if (!navigator.geolocation) {
        alert("Geolocation is not supported by your browser")
      } else {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            // Emit the coordinates to the parent component
            context.emit("current-location", {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            })
          },
          () => {
            alert("Unable to retrieve your location")
          }
        )
      }
    }

    return { location, searchLocation, getCurrentLocation }
  },
}
</script>
