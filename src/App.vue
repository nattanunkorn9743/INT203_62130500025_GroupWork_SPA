<template>
  <Navbar :test='x'>Navbar</Navbar>
  <!-- <Login @clickSign="asd"/> -->
  <router-view @clickSign="asd"  />
</template>

<script>
import Navbar from "./components/Navbar.vue";
// import Login from './components/Login.vue'

export default {
  name: "App",
  components: {
    Navbar,
    // Login
    // Intro,
  },
  data(){
    return {
       x:true,
  }
  },
     
  methods: {
    asd(show) {
      this.$emit("emitApp",show);
      console.log(show)
      // this.x = true;
      // console.log(this.x)

    },
  },
};
</script>

<style></style>
