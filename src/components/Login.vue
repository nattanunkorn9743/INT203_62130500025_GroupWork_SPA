<template>
  <div>
    <header class="max-w-lg mx-auto">
        <a href="#">
            <h1 class="text-4xl font-bold text-center text-white">Startup</h1>
        </a>
    </header>

    <main class="max-w-lg p-8 mx-auto my-10 bg-white rounded-lg shadow-2xl md:p-12">
        <section>
            <h3 class="text-2xl font-bold">CareBear Welcome</h3>
            <p class="pt-2 text-gray-600">Sign in to your account.</p>
        </section>

        <section class="mt-10">
            <form class="flex flex-col" method="POST" action="#">
                <div class="pt-3 mb-6 bg-gray-200 rounded">
                    <label class="block mb-2 ml-3 text-sm font-bold text-gray-700" for="email">Email</label>
                    <input type="text" id="email" class="w-full px-3 pb-3 text-gray-700 transition duration-500 bg-gray-200 border-b-4 border-gray-300 rounded focus:outline-none focus:border-purple-600">
                </div>
                <div class="pt-3 mb-6 bg-gray-200 rounded">
                    <label class="block mb-2 ml-3 text-sm font-bold text-gray-700" for="password">Password</label>
                    <input type="password" id="password" class="w-full px-3 pb-3 text-gray-700 transition duration-500 bg-gray-200 border-b-4 border-gray-300 rounded focus:outline-none focus:border-purple-600">
                </div>
                <div class="flex justify-end">
                    <a href="#" class="mb-6 text-sm text-indigo-900 hover:text-black hover:underline">Forgot your password?</a>
                </div>
                <button class="py-2 font-bold text-white transition duration-200 bg-indigo-900 rounded shadow-lg hover:bg-indigo-500 hover:shadow-xl" type="submit">Sign In</button>
            </form>
        </section>
    </main>

    <div class="max-w-lg mx-auto mt-12 mb-6 text-center">
        <p class="text-white">Don't have an account? <a href="#" class="font-bold hover:underline">Sign up</a>.</p>
    </div>

    <footer class="flex justify-center max-w-lg mx-auto text-white">
        <a href="#" class="hover:underline">Contact</a>
        <span class="mx-3">•</span>
        <a href="#" class="hover:underline">Privacy</a>
    </footer>
</div>  
</template>
<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Login",
  components: {
    // HelloWorld,
  },
};
</script>
