<template>

  <Navbar >Navbar</Navbar>

  
  <router-view/>
  <!-- <HelloWorld msg="introduction"/> -->
  <!-- <Login>test login</Login> -->
  
  <!-- <Intro msg="Intro "/> -->
</template>

<script>

import Navbar from './components/Navbar.vue'


export default {
  name: 'App',
  components: {
    Navbar
    // Intro,
  }
}
</script>

<style>

</style>
