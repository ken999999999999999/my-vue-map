<template>
  <div style="height: 500px; margin: 20px auto">
    <l-map
      style="height: 100%; width: 80%; margin: auto"
      :center="location"
      :zoom="zoom"
    >
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker :lat-lng="location"></l-marker>
    </l-map>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css"
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet"

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
  },
  props: {
    location: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 10,
    }
  },
}
</script>
