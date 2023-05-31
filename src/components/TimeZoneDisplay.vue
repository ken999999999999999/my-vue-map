<template>
  <div>
    <div v-if="timeZone">Time Zone: {{ timeZone }}</div>
    <div v-if="localTime">Local Time: {{ localTime }}</div>
  </div>
</template>

<script>
import { ref, watch } from "vue"
import axios from "axios"

export default {
  props: {
    location: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const timeZone = ref(null)
    const localTime = ref(null)

    const getTimeZone = async () => {
      try {
        console.log("hit")
        const response = await axios.get(
          `http://api.timezonedb.com/v2.1/get-time-zone?key=${process.env.VUE_APP_TIME_ZONE_API_KEY}&format=json&by=position&lat=${props.location[0]}&lng=${props.location[1]}`
        )
        timeZone.value = response.data.zoneName
        localTime.value = response.data.formatted
      } catch (error) {
        console.error(error)
      }
    }

    watch(props.location, getTimeZone, { immediate: true })

    return { timeZone, localTime }
  },
}
</script>
