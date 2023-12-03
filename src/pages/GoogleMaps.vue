<template>
    <input type="range" min="0" max="20" step="1" v-model="zoom" />
    {{ center }}
    <button class="btn btn-primary" @click="center={lat:58.25636,lng:22.482323}">Go to Kuresaare</button>
    <button class="btn btn-primary" @click="addMarker">Add marker</button>

  <GMaps :markers="markers" :center="center" :zoom="zoom" @centerChanged="center=$event" @zoomChanged="zoom=$event"></GMaps>
</template>
<script>
import GMaps from '../components/GMaps.vue';
export default {
  components: {
      GMaps
  },
  data(){
      return {
          zoom: 19,
          center: {lat: 59.42686,lng:24.74350},
          markers: [
              {lat: 59.42686,lng:24.74350},
              {lat:58.25636,lng:22.482323}
          ]
      }
  },
  methods:{
      addMarker(){
          this.markers.push({lat: Math.random()*100,lng: Math.random()*100});
      }
  }
}
</script>
