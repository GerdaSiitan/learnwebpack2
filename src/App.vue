<template>
    <Tabs></Tabs>
    <router-view></router-view>
  
</template>
<script>
import Tabs from './components/Tabs.vue';
export default {
    components: {
        Tabs
    }
}
</script>