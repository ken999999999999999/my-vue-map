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
import axios from "axios"
export default {
  components: {
    NButton,
    NInput,
    NInputGroup,
  },

  setup(_, context) {
    const location = ref("")
    const loadingRef = ref(false)

    const searchLocation = async () => {
      // Emit the location to the parent component
      try {
        loadingRef.value = true
        const searchKey = location.value.replace(" ", "+")
        const response = await axios.get(
          `https://api.opencagedata.com/geocode/v1/json?q=${searchKey}&key=${process.env.VUE_APP_API_KEY}&language=en&pretty=1`
        )

        const results = response.data?.results
        if (!results.length) return
        const data = results[0]
        context.emit("search", {
          name: location?.value ?? "",
          position: [data.geometry.lat, data.geometry.lng],
        })
      } finally {
        location.value = ""

        setTimeout(() => {
          loadingRef.value = false
        }, 2000)
      }
    }

    const getCurrentLocation = () => {
      loadingRef.value = true
      if (!navigator.geolocation) {
        alert("Geolocation is not supported by your browser")
      } else {
        navigator.geolocation.getCurrentPosition(
          (position) => {
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
