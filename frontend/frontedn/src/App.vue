<script>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
import Sidebar from './components/Sidebar.vue';

export default {
  components: {
    Navbar,
    Sidebar,
  },
}
</script>

<template>
    <Navbar />
    <Sidebar />
    <RouterView />
</template>
