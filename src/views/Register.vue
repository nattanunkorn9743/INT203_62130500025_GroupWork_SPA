<template>
    
    <div class="flex flex-wrap w-full">

        <!-- Register Section -->
        <div class="flex flex-col w-full md:w-1/2">

            <div class="flex justify-center pt-12 md:justify-start md:pl-12 md:-mb-12">
                <a href="#" class="p-4 text-xl font-bold text-white bg-blue-900">Logo</a>
            </div>

            <div class="flex flex-col justify-center px-8 pt-8 my-auto md:justify-start md:pt-0 md:px-24 lg:px-32">
                <p class="text-3xl text-center">Join Us.</p>
                <form class="flex flex-col pt-3 md:pt-8" onsubmit="event.preventDefault();">
                    <div class="flex flex-col pt-4">
                        <label for="name" class="text-lg">Name</label>
                        <input type="text" id="name" placeholder="John Smith" class="w-full px-3 py-2 mt-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline">
                    </div>

                    <div class="flex flex-col pt-4">
                        <label for="email" class="text-lg">Email</label>
                        <input type="email" id="email" placeholder="your@email.com" class="w-full px-3 py-2 mt-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline">
                    </div>
    
                    <div class="flex flex-col pt-4">
                        <label for="password" class="text-lg">Password</label>
                        <input type="password" id="password" placeholder="Password" class="w-full px-3 py-2 mt-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline">
                    </div>

                    <div class="flex flex-col pt-4">
                        <label for="confirm-password" class="text-lg">Confirm Password</label>
                        <input type="password" id="confirm-password" placeholder="Password" class="w-full px-3 py-2 mt-1 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline">
                    </div>
    
                    <input type="submit" value="Register" class="p-2 mt-8 text-lg font-bold text-white bg-blue-900 hover:bg-gray-700">
                </form>
                <div class="pt-12 pb-12 text-center">
                    <p>Already have an account?   <router-link to="/login"  class="font-semibold underline">Log in here.</router-link></p>
                </div>
            </div>

        </div>

        <!-- Image Section -->
        <div class="w-1/2 shadow-2xl">
            <img class="hidden object-cover w-full h-screen md:block" src="https://64.media.tumblr.com/43b8d74bee76cfc6e3ddd0c4fb90a4e1/tumblr_nec95gpXXh1rdmw45o1_r1_1280.png">
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>

</style>