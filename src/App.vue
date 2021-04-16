<template>
 <div class="flex items-center justify-start py-4">
    <div class="ml-32 cursor-pointer">
      <div class="flex flex-row itens-center">
        <i class="mx-2 text-gray-500 fas fa-sign-in-alt"></i>
        <span class="text-sm font-semibold text-gray-500">Login</span>
        <span class="mx-4 text-gray-500">|</span>
        <span class="text-sm font-semibold text-gray-500">Register</span>
      </div>
    </div>
 
  </div>
  <Navbar >Navbar</Navbar>
     

   
    <ul>
      <li><router-link to="/">Home</router-link> |</li>
      <li><router-link to="/product">Product</router-link> |</li>
     
     
    </ul>
  
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
