<template>
    <ul class="nav nav-tabs">
        <li class="nav-item" v-for="route in $router.getRoutes()">
            <router-link class="nav-link" :to="route.path" activeClass="active">{{ route.name }}</router-link>
        </li>
    </ul>
</template>

<script>
export default {

}
</script>