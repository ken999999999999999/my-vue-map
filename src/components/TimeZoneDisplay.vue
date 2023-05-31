<template>
  <div>
    <p v-if="timeZone">Time Zone: {{ timeZone }}</p>
    <p v-if="localTime">Local Time: {{ localTime }}</p>
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
        const response = await axios.get(
          `http://api.timezonedb.com/v2.1/get-time-zone?key=YOUR_API_KEY&format=json&by=position&lat=${props.location[0]}&lng=${props.location[1]}`
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
