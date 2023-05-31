<template>
  <div style="height: 500px; margin: 20px auto">
    <l-map
      style="height: 100%; width: 80%; margin: auto"
      :center="location"
      :zoom="2"
    >
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>
      <l-marker :lat-lng="location"></l-marker>
    </l-map>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css"
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet"

export default {
  components: {
    LMap,
    LTileLayer,
  },
  props: {
    location: {
      type: Array,
      required: true,
    },
  },
}
</script>
