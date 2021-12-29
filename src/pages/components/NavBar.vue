<template>
  <div class="bg-white mx-6 my-4 shadow-card rounded-md">
    <div class="flex h-14 p-4 items-center justify-between text-gray-500">
      <div class="flex space-x-3">
        <svg class="w-6 h-6 stroke-current stroke-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 6h18M4 12h18M4 18h18"></path>
        </svg>
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
        </svg>
      </div>
      <div class="flex">
          <img class="w-8 h-8 rounded-full" src="../../assets/avatar.png" alt="User" />
          <span class="text-md font-display ml-2.5 pt-1.5">Sign In</span>
          <svg class="w-6 h-6 ml-1 pt-1 fill-current self-end" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"></path>
          </svg>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>

</style>
