<template>
  <div class="sticky top-0 w-62 h-screen shadow-xl bg-white font-display">
    <div class="flex flex-col w-58 pt-6 pl-4">
      <div class="flex h-10 mb-6 text-purple-600 text-2xl font-semibold">
        <img class="m-1 w-10 h-10" alt="logo" src="../../assets/logo.png">
        <span class="ml-1 mt-2.5">SplitterX</span>
      </div>

      <!-- links -->
      <div class="pl-2 pb-0.5 mt-4 text-gray-500 text-sm font-light">
        <span>PAGES</span>
      </div>
      <div class="flex flex-col pt-2 space-y-2 text-md text-gray-700 font-light">
        <router-link to="/" class="flex h-10 pl-3 rounded-md"
                     exact-active-class="text-gray-50 shadow-nav bg-gradient-to-r from-purple-500 to-purple-400">
          <div class="flex w-full h-full items-center transition ease-in-out transform hover:translate-x-1">
            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.8913288,10 L11.8900003,3.99867157 L5.88867192,10 L5.89001465,10 L5.89001465,20 L17.8900146,20 L17.8900146,10 L17.8913288,10 Z M19.8900146,11.9986859 L19.8900146,20 C19.8900146,21.1045695 18.9945841,22 17.8900146,22 L5.89001465,22 C4.78544515,22 3.89001465,21.1045695 3.89001465,20 L3.89001465,11.9986573 L2.41319817,13.4754737 L1,12.0622756 L10.4769858,2.5852898 C11.2573722,1.8049034 12.5226285,1.8049034 13.3030149,2.5852898 L22.7800007,12.0622756 L21.3668025,13.4754737 L19.8900146,11.9986859 Z"/>
            </svg>
            <span class="ml-2.5">Home</span>
          </div>
        </router-link>
        <router-link to="/1" class="flex h-10 pl-3 items-center rounded-md"
                     exact-active-class="text-gray-100 shadow-nav bg-gradient-to-r from-purple-500 to-purple-400">
          <div class="flex w-full h-full items-center transition ease-in-out transform hover:translate-x-1">
            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M15,3.41421356 L15,7 L18.5857864,7 L15,3.41421356 Z M19,9 L15,9 C13.8954305,9 13,8.1045695 13,7 L13,3 L5,3 L5,21 L19,21 L19,9 Z M5,1 L15.4142136,1 L21,6.58578644 L21,21 C21,22.1045695 20.1045695,23 19,23 L5,23 C3.8954305,23 3,22.1045695 3,21 L3,3 C3,1.8954305 3.8954305,1 5,1 Z M8,17 L8,15 L14,15 L14,17 L8,17 Z M8,13 L8,11 L16,11 L16,13 L8,13 Z"/>
            </svg>
            <span class="ml-2.5">My Bills</span>
          </div>
        </router-link>
        <router-link to="/2" class="flex h-10 pl-3 items-center rounded-md"
                     exact-active-class="text-gray-100 shadow-nav bg-gradient-to-r from-purple-500 to-purple-400">
          <div class="flex w-full h-full items-center transition ease-in-out transform hover:translate-x-1">
            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.82929429,20 C8.41745788,21.1651924 7.30621883,22 6,22 C4.34314575,22 3,20.6568542 3,19 C3,17.3431458 4.34314575,16 6,16 C7.30621883,16 8.41745788,16.8348076 8.82929429,18 L17.5,18 C18.8807119,18 20,16.8807119 20,15.5 C20,14.1192881 18.8807119,13 17.5,13 L6.5,13 C4.01471863,13 2,10.9852814 2,8.5 C2,6.01471863 4.01471863,4 6.5,4 L9.58578644,4 L8.29289322,2.70710678 L9.70710678,1.29289322 L13.4142136,5 L9.70710678,8.70710678 L8.29289322,7.29289322 L9.58578644,6 L6.5,6 C5.11928813,6 4,7.11928813 4,8.5 C4,9.88071187 5.11928813,11 6.5,11 L17.5,11 C19.9852814,11 22,13.0147186 22,15.5 C22,17.9852814 19.9852814,20 17.5,20 L8.82929429,20 Z M6,18 C5.44771525,18 5,18.4477153 5,19 C5,19.5522847 5.44771525,20 6,20 C6.55228475,20 7,19.5522847 7,19 C7,18.4477153 6.55228475,18 6,18 Z M18,2 C19.6568542,2 21,3.34314575 21,5 C21,6.65685425 19.6568542,8 18,8 C16.3431458,8 15,6.65685425 15,5 C15,3.34314575 16.3431458,2 18,2 Z M18,4 C17.4477153,4 17,4.44771525 17,5 C17,5.55228475 17.4477153,6 18,6 C18.5522847,6 19,5.55228475 19,5 C19,4.44771525 18.5522847,4 18,4 Z"/>
            </svg>
            <span class="ml-2.5">Send Money</span>
          </div>
        </router-link>
        <router-link to="/about" class="flex h-10 pl-3 items-center rounded-md"
                     exact-active-class="text-gray-100 shadow-nav bg-gradient-to-r from-purple-500 to-purple-400">
          <div class="flex w-full h-full items-center transition ease-in-out transform hover:translate-x-1">
            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.03531778,18.739764 C7.62329979,20.146176 9.71193925,21 12,21 C14.2880608,21 16.3767002,20.146176 17.9646822,18.739764 C17.6719994,17.687349 15.5693823,17 12,17 C8.43061774,17 6.32800065,17.687349 6.03531778,18.739764 Z M4.60050358,17.1246475 C5.72595131,15.638064 8.37060189,15 12,15 C15.6293981,15 18.2740487,15.638064 19.3994964,17.1246475 C20.4086179,15.6703183 21,13.9042215 21,12 C21,7.02943725 16.9705627,3 12,3 C7.02943725,3 3,7.02943725 3,12 C3,13.9042215 3.59138213,15.6703183 4.60050358,17.1246475 Z M12,23 C5.92486775,23 1,18.0751322 1,12 C1,5.92486775 5.92486775,1 12,1 C18.0751322,1 23,5.92486775 23,12 C23,18.0751322 18.0751322,23 12,23 Z M8,10 C8,7.75575936 9.57909957,6 12,6 C14.4141948,6 16,7.92157821 16,10.2 C16,13.479614 14.2180861,15 12,15 C9.76086382,15 8,13.4273743 8,10 Z M10,10 C10,12.2692568 10.8182108,13 12,13 C13.1777063,13 14,12.2983927 14,10.2 C14,8.95041736 13.2156568,8 12,8 C10.7337387,8 10,8.81582479 10,10 Z"/>
            </svg>
            <span class="ml-2.5">My Profile</span>
          </div>
        </router-link>
        <router-link to="/4" class="flex h-10 pl-3 items-center rounded-md"
                     exact-active-class="text-gray-100 shadow-nav bg-gradient-to-r from-purple-500 to-purple-400">
          <div class="flex w-full h-full items-center transition ease-in-out transform hover:translate-x-1">
            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M1,11.5714286 L21,3 L12.4285714,23 L9.23529412,14.7647059 L1,11.5714286 Z M10.7810216,13.2189784 L12.5211751,17.7067427 L17.1921134,6.80788655 L6.29325726,11.4788249 L10.7810216,13.2189784 Z"/>
            </svg>
            <span class="ml-2.5">Invite</span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "SideBar"
    }
</script>

<style scoped>

</style>
