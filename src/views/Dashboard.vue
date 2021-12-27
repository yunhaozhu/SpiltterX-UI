<template>
  <div class="flex flex-row bg-gray-50">
    <SideBar></SideBar>
    <router-view/>
  </div>

</template>

<script>
import SideBar from "../pages/components/SideBar";

export default {
  name: 'Dashboard',
  components: {
    SideBar
  }
}
</script>
