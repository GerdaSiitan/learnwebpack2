<template>
    <div id="map"></div>
</template>
<script>
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/images/marker-icon.png';
import 'leaflet/dist/images/marker-icon-2x.png';
import 'leaflet/dist/images/marker-shadow.png';
import * as L from 'leaflet';
export default {
    mounted(){
        this.map = L.map('map').setView(this.center, this.zoom);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(this.map);
        this.map.on('zoomend', event => {
            this.$emit('zoomChanged', this.map.getZoom());
        });
        this.map.on('moveend', event => {
            this.$emit('centerChanged', this.map.getCenter());
        });

        for(let coords of this.markers){
            this.mapMarkers.push(L.marker(coords).addTo(this.map));
        }
    },
    props: ['center', 'zoom', 'markers'],
    data(){
        return {
            map: null,
            mapMarkers: []
        }
    },  
    watch: {
        center(newCenter){
            this.map.flyTo(newCenter, this.zoom);
        },
        zoom(newZoom){
            this.map.setZoom(newZoom);
        },
        markers:{
            handler(newMarkers){
                for(let marker of this.mapMarkers){
                    marker.remove();
                }
                this.mapMarkers = [];
                for(let coords of newMarkers){
                    this.mapMarkers.push(L.marker(coords).addTo(this.map));
                }
            },
            deep:true
        }
    }
}
</script>
<style>
#map { 
    height: 90vh; 
}
</style>
