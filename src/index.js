import './style.scss';

import * as bootstrap from 'bootstrap';
import { createApp } from 'vue';
import * as VueRouter from 'vue-router';

import App from './App.vue';
import ToDo from './pages/ToDo.vue';
import Home from './pages/Home.vue';
import Clicker from './pages/Clicker.vue';
import RickAndMorty from './pages/RickAndMorty.vue';
import GoogleMaps from './pages/GoogleMaps.vue';
import Leaflet from './pages/Leaflet.vue';

const routes = [
 {path: '/', component: Home, name: 'Home'},
 {path: '/todo', component: ToDo, name: 'ToDo'},
 {path: '/clicker', component: Clicker, name: 'Clicker'},
 {path: '/rickandmorty', component: RickAndMorty, name: 'Rick And Morty'},
 {path: '/gmaps', component: GoogleMaps, name: 'Google Maps'},
 {path: '/leaflet', component: Leaflet, name: 'Leaflet'}
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');