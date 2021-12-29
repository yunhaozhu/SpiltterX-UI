<template>
  <div class="flex w-screen">
    <SideBar></SideBar>
    <div class="flex flex-col flex-1">
      <NavBar></NavBar>
      <router-view/>
    </div>
  </div>
</template>

<script>
import SideBar from "../pages/components/SideBar";
import NavBar from "../pages/components/NavBar";

export default {
  name: 'Dashboard',
  components: {
    NavBar,
    SideBar
  }
}
</script>
