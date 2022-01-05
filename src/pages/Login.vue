<template>
  <div class="flex mx-7 my-3 pt-16 h-full overflow-hidden bg-white rounded-lg shadow-card justify-center">
    <div class="flex-grow max-w-md px-6 py-8 md:px-8">
      <h1 class="mb-5 text-4xl font-bold text-center text-purple-700">SplitterX</h1>

      <p class="mb-16 text-md text-center text-gray-600">Sign In to enjoy all features</p>

      <a href="#" class="flex items-center justify-center mt-4 text-gray-600 transition-colors duration-200 transform border rounded-lg hover:bg-gray-50">
        <div class="px-4 py-2">
          <svg class="w-6 h-6" viewBox="0 0 40 40">
            <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107"/>
            <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00"/>
            <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50"/>
            <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2"/>
          </svg>
        </div>
        <span class="w-5/6 pr-12 py-3 font-medium text-center">Sign in with Google</span>
      </a>

      <div class="flex items-center justify-between mt-8">
        <span class="w-1/5 border-b lg:w-1/4"></span>

        <p class="text-xs text-center text-gray-500 uppercase">or login with email</p>

        <span class="w-1/5 border-b lg:w-1/4"></span>
      </div>

      <div class="mt-8">
        <label class="block mb-2 text-sm font-medium text-gray-600" for="email">Email Address</label>
        <input id="email" class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md
               focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="email">
      </div>

      <div class="mt-6">
        <div class="flex justify-between">
          <label class="block mb-2 text-sm font-medium text-gray-600" for="password">Password</label>
          <a href="#" class="text-xs text-gray-500 transition ease-in-out hover:text-gray-800">Forget Password?</a>
        </div>
        <input id="password" class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md
               focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="email">
      </div>

      <div class="my-8">
        <button class="w-full py-2.5 tracking-wide bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">
          Sign In
        </button>
      </div>

      <div class="flex items-center justify-between mt-4">
        <span class="w-1/5 border-b md:w-1/4"></span>

        <a href="#" class="text-xs text-gray-500 uppercase hover:underline">or sign up</a>

        <span class="w-1/5 border-b md:w-1/4"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login"
}
</script>

<style scoped>

</style>
