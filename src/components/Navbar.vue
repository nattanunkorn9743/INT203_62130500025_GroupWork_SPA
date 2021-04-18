
<template>
  <!-- nav1 -->
  <div>
    <div class="flex items-center justify-start py-4">
      <!-- <first> -->
      <div class="ml-32 cursor-pointer">
        
        <div class="flex flex-row itens-center">
          <!-- <i class="mx-2 text-gray-500 fas fa-sign-in-alt"></i> -->
          <router-link to="/login" class="text-sm font-semibold text-gray-500"
            >Login</router-link
          >

          <span class="mx-4 text-gray-500">|</span>
          <router-link
            to="/register"
            class="text-sm font-semibold text-gray-500"
            >Register</router-link
          >
        </div>
        <!-- login leaw --> 
          <div v-show="isShow" @clickSign="login"
            to="/basket" class="flex items-center justify-end w-full text-gray-600">
            <i class="medium material-icons">exit_to_app</i>
          </div>
          
        <!-- <second> -->
      </div>
      <!-- <div class="flex justify-end w-full mr-1 text-black">
        <i class="medium material-icons">exit_to_app</i>
      </div> -->
      
      <router-link
            to="/basket" class="flex items-center justify-end w-full ml-32 mr-32 text-black">
        <!-- <i class="medium material-icons">exit_to_app</i> -->
        <i class="medium material-icons">local_grocery_store</i>
      </router-link>
    </div>

    <!-- nav2 -->
    <div class="flex flex-col items-center justify-center">
      <div class="">
        <img
          class="h-full mt-1 w-72"
          src="https://i.pinimg.com/564x/a9/79/be/a979be1d536763b16d23954943806223.jpg"
          alt=""
        />
      </div>
      <nav class="flex justify-between">
        <div class="flex items-center w-auto shadow">
          <div
            class="flex-auto p-3 m-2 text-sm font-semibold text-center uppercase min-w-64 hover:bg-blue-900 hover:text-white"
          >
            <router-link to="/">Home</router-link>
          </div>
          <div
            class="flex-auto p-3 m-2 text-sm font-semibold text-center uppercase hover:bg-blue-900 hover:text-white"
          >
            <router-link to="/product">Product</router-link>
          </div>
          <router-link to="/storelocation"
            class="flex-auto p-3 m-2 text-sm font-semibold text-center uppercase min-w-64 hover:bg-blue-900 hover:text-white"
          >
            store location
          </router-link>
          <router-link to="/aboutUs"
            class="flex-auto p-3 m-2 text-sm font-semibold text-center uppercase min-w-64 hover:bg-blue-900 hover:text-white"
          >
            About us
          </router-link>
          <div
            class="flex-auto p-3 m-2 text-sm font-semibold text-center uppercase min-w-64 hover:bg-blue-900 hover:text-white"
          >
            How to orders
          </div>
          <div
            class="flex-auto p-3 m-2 text-sm font-semibold text-center uppercase min-w-64 hover:bg-blue-900 hover:text-white"
          >
            INFORMATON
          </div>
        </div>
      </nav>
      <!-- <div class="flex mx-32 mt-4 mb-6"> -->
      <!-- <img src="https://64.media.tumblr.com/86d2a588fe9da1d8efb24a3036bfbf47/tumblr_nfo9uwYflq1rdmw45o1_1280.jpg"> -->
      <!-- <img src="https://image.makewebeasy.net/makeweb/0/pyuHEt3NP/ALC%2FJULY_2020_%E0%B9%92%E0%B9%90%E0%B9%90%E0%B9%97%E0%B9%90%E0%B9%93.jpg?v=202012190947" alt="" sizes="" srcset=""> -->
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
//   props: {
//     showLogin:Boolean
// },
  data() {
    return {
      
      // isLogin: false,
      
    }
  },
  methods: {
    login(){
      this.isLogin = true;
    },
    // showLogin() {
    // this.$emit('show-logout');
    // this.isLogin = true;
    // }
  }
};
</script>