<template>
    <div id="map"></div>
</template>
<script>
import { Loader } from "@googlemaps/js-api-loader";
import { toRaw } from 'vue';
export default {
    mounted(){
        const loader = new Loader({
            apiKey: process.env.GOOGLE_MAPS_API,
            version: "weekly"
        });

        loader.load().then(async () => {
            const { Map } = await google.maps.importLibrary("maps");
            const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

            this.map = new Map(document.getElementById("map"), {
                center: this.center,
                zoom: this.zoom,
                mapId: "mymap"
            });
            this.map.addListener("center_changed", () => {
                clearTimeout(this.centerDebounce);
                this.centerDebounce = setTimeout(()=>{
                    this.$emit('centerChanged', this.map.getCenter());
                },100);
                                
            });
            this.map.addListener("zoom_changed", () => {
                this.$emit('zoomChanged', this.map.getZoom());
            });
            for(const coords of this.markers){
                const marker = new AdvancedMarkerElement({
                    map: toRaw(this.map),
                    position: coords,
                    title: "Polutehniki",
                });
                this.mapMarkers.push(marker);
            }
        });
    },
    props: ['center', 'zoom', 'markers'],
    data(){
        return {
            map: null,
            centerDebounce: null,
            mapMarkers: []
        }
    },
    watch: {
        zoom(newValue, oldValue) {
            this.map.setZoom(parseInt(newValue));
        },
        center(newValue, oldValue) {
            console.log(newValue);
            this.map.panTo(newValue);
        },
        markers: {
            async handler(newValue, oldValue) {
                const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
                for(const marker of this.mapMarkers){
                    marker.setMap(null);
                }
                this.mapMarkers = [];
                for(const coords of newValue){
                    const marker = new AdvancedMarkerElement({
                        map: toRaw(this.map),
                        position: coords,
                        title: "Polutehniki",
                    });
                    this.mapMarkers.push(marker);
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