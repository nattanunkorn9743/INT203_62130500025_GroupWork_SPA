<template>
  <div class="flex flex-wrap w-full">
    <!-- Register Section -->
    <div class="flex flex-col w-full md:w-1/2">
      <div
        class="flex justify-center pt-12 md:justify-start md:pl-12 md:-mb-12"
      >
        <a href="#" class="p-4 text-xl font-bold text-white bg-blue-900"
          >Logo</a
        >
      </div>

      <div
        class="flex flex-col justify-center px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32"
      >
        <p class="text-3xl text-center">Join Us.</p>
        <form class="flex flex-col pt-3 md:pt-8" @submit.prevent="addUser">
          <div class="flex flex-col pt-4">
            <label for="name" class="text-lg">Name</label>
            <input
              type="text"
              v-model="name"
              placeholder="John Smith"
              class="w-full px-3 py-2 mt-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            />
          </div>

          <div class="flex flex-col pt-4">
            <label for="email" class="text-lg">Email</label>
            <input
              type="email"
              v-model="email"
              placeholder="your@email.com"
              class="w-full px-3 py-2 mt-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            />
          </div>

          <div class="flex flex-col pt-4">
            <label for="password" class="text-lg">Password</label>
            <input
              type="password"
              v-model="password"
              placeholder="Password"
              class="w-full px-3 py-2 mt-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            />
          </div>

          <div class="flex flex-col pt-4">
            <label for="confirm-password" class="text-lg"
              >Confirm Password</label
            >
            <input
              type="password"
              v-model="confirm_password"
              placeholder="Password"
              class="w-full px-3 py-2 mt-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            />
          </div>

          <input
            type="submit"
            value="Register"
            class="p-2 mt-8 text-lg font-bold text-white bg-blue-900 hover:bg-gray-700"
          />
        </form>
        <div class="pt-12 pb-12 text-center">
          <p>
            Already have an account?
            <router-link to="/login" class="font-semibold underline"
              >Log in here.</router-link
            >
          </p>
        </div>
      </div>
    </div>

    <!-- Image Section -->
    <div class="w-1/2 shadow-2xl">
      <img
        class="hidden object-cover w-full h-screen md:block"
        src="https://64.media.tumblr.com/43b8d74bee76cfc6e3ddd0c4fb90a4e1/tumblr_nec95gpXXh1rdmw45o1_r1_1280.png"
      />
    </div>
  </div>
</template>
<script>
// import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'Resgister',
  components: {
    // HelloWorld
  },
  data() {
    return {
      name: '',
      email: '',
      password: '',
      confirm_password: '',
      db:'http://localhost:5000/Users',
      Users: [
      
      ]
    }
  },
  methods: {
    async addUser() {
        if (this.password == this.confirm_password){
           const user = {
            names: this.name,
            emails:this.email,
            passwords:this.password
            
            
        }
        const response = await fetch(this.db,{
          method: 'POST',
          headers:{
            'Content-type': 'application/json'
          },
          body: JSON.stringify({
            name: user.names,
            email: user.emails,
            password : user.passwords,
            
          })
        })
        const data = await response.json()
        console.log(data)
        this.Users = [...this.Users,data]
        this.name = ''
        this.email = ''
        this.password = '',
        this.confirm_password = ''
        
      
        
          
        }else{
            alert("your password are indirect")
          }
        
       

  }
}
}
</script>