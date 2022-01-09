<template>
  <div class="relative inline-flex">
    <button ref="trigger" class="pl-0.5 pt-1" @click.prevent="dropdownOpen = !dropdownOpen">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 stroke-current text-gray-600" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <circle cx="9" cy="7" r="4" />
        <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
      </svg>
    </button>
    <transition
        enter-active-class="transition ease-in-out duration-200 transform"
        enter-class="opacity-0 translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition ease-out duration-200"
        leave-class="opacity-100"
        leave-to-class="opacity-0"
    >
      <div v-show="dropdownOpen" ref="dropdown" class="z-10 absolute top-full mt-1.5 min-w-36 bg-white border border-gray-200 rounded shadow-lg overflow-hidden">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "ShareDropdown",
  data() {
    return {
      dropdownOpen : false,
    }
  },
  methods: {
    mouseHandler({target}){
      let dropRef = this.$refs.dropdown;
      let triggerRef = this.$refs.trigger;
      if(!this.dropdownOpen || dropRef.contains(target) || triggerRef.contains(target))
        return;
      this.dropdownOpen = false;
    }
  },
  mounted() {
    document.addEventListener('click', this.mouseHandler)
  }
}
</script>

<style scoped>

</style>