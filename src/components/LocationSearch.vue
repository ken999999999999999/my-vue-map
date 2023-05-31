<template>
  <div style="margin: auto; width: 500px">
    <n-input-group>
      <n-input
        type="text"
        v-model:value="location"
        @keyup.enter="searchLocation"
        placeholder="Enter a location"
      />
      <n-button @click="searchLocation">Search</n-button>
      <n-button @click="getCurrentLocation">Get Current Location</n-button>
    </n-input-group>
  </div>
</template>

<script>
import { ref } from "vue"
import { NButton, NInput, NInputGroup } from "naive-ui"
export default {
  components: {
    NButton,
    NInput,
    NInputGroup,
  },
  setup(_, context) {
    const location = ref("")

    const searchLocation = () => {
      // Emit the location to the parent component

      context.emit("search", location?.value ?? "")
      location.value = ""
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
