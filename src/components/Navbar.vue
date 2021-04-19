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
          <div
            @click="deleteData"
            to="/basket"
            class="flex items-center justify-end w-full ml-3 text-gray-600"
          >
            <i class="medium material-icons">exit_to_app</i>
          </div>
        </div>
        <!-- login leaw -->
        <!-- v-show="isShow" @clickSign="login" -->

        <!-- <second> -->
      </div>
      <div 
        @click="showBas"
        class="flex items-center justify-end w-full ml-32 mr-32 text-black"
      >
        <!-- <i class="medium material-icons">exit_to_app</i> -->
        <i class="medium material-icons">local_grocery_store</i>
      </div>
      <bas-ket v-show="isBas" class=""></bas-ket>
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
          <router-link
            to="/storelocation"
            class="flex-auto p-3 m-2 text-sm font-semibold text-center uppercase min-w-64 hover:bg-blue-900 hover:text-white"
          >
            store location
          </router-link>
          <router-link
            to="/aboutUs"
            class="flex-auto p-3 m-2 text-sm font-semibold text-center uppercase min-w-64 hover:bg-blue-900 hover:text-white"
          >
            About us
          </router-link>
          <router-link
            to = "/howto"
            class="flex-auto p-3 m-2 text-sm font-semibold text-center uppercase min-w-64 hover:bg-blue-900 hover:text-white"
          >
            How to orders
          </router-link>
          <router-link 
          to="/inForm"
            class="flex-auto p-3 m-2 text-sm font-semibold text-center uppercase min-w-64 hover:bg-blue-900 hover:text-white"
          >
            Your INFORMATON
          </router-link>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  //   props: {
  //     showLogin:Boolean
  // },
  data() {
    return {
      // isLogin: false,
      isBas:false
    };
  },
  methods: {
    showBas(){
      this.isBas = true;
    },
    // login(){
    //   this.isLogin = true;
    // },
    // showLogin() {
    // this.$emit('show-logout');
    // this.isLogin = true;
    // }
    async deleteData() {
      //  try{
      // const res = 
      await fetch("http://localhost:5000/products", {
        method: "DELETE",
      })
        .then((res) => res.text()) // or res.json()
        .then((res) => console.log(res));
      //  .then(response => console.log(response))
      //  .catch(err => console.log(err))

      // }catch{
      //     alert("Error to sign in")
      // }
    },
  },
};
</script>
