<template>
  <div style="margin: auto; width: 500px">
    <n-input-group>
      <n-input
        type="text"
        v-model:value="location"
        @keyup.enter="searchLocation"
        placeholder="Enter a location"
        :loading="loading"
      />

      <n-button
        @click="searchLocation"
        icon-placement="left"
        :disabled="loading || !location.length"
        >Search</n-button
      >
      <n-button
        @click="getCurrentLocation"
        icon-placement="left"
        :disabled="loading"
        >Get Current Location</n-button
      >
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
    const loadingRef = ref(false)

    const searchLocation = () => {
      // Emit the location to the parent component
      loadingRef.value = true
      context.emit("search", { name: location?.value ?? "", position: "" })
      location.value = ""
      setTimeout(() => {
        loadingRef.value = false
      }, 2000)
    }

    const getCurrentLocation = () => {
      loadingRef.value = true
      if (!navigator.geolocation) {
        alert("Geolocation is not supported by your browser")
      } else {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            // Emit the coordinates to the parent component
            console.log(position)
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
      setTimeout(() => {
        loadingRef.value = false
      }, 2000)
    }

    return { loading: loadingRef, location, searchLocation, getCurrentLocation }
  },
}
</script>
