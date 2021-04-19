<template>
 <Navbar>Navbar</Navbar>
  <router-view/>

</template>

<script>

import Navbar from './components/Navbar.vue'
// import Login from './components/Login.vue'


export default {
  name: 'App',
  components: {
    Navbar,
    // Login
    // Intro,
  }
}
</script>

<style>

</style>
