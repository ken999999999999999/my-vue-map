<template>
  <div style="margin-top: 10px">
    <div v-if="timeZone" style="margin: auto; width: fit-content">
      Time Zone: {{ timeZone }}
    </div>
    <div v-if="localTime" style="margin: auto; width: fit-content">
      Local Time: {{ localTime }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    timeZone: {
      type: String,
      required: true,
    },
    localTime: {
      type: String,
      required: true,
    },
  },
}
</script>
