<template>
  <div>
    <!-- Modal backdrop -->
    <transition
        enter-active-class="transition ease-out duration-200"
        enter-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition ease-out duration-100"
        leave-class="opacity-100"
        leave-to-class="opacity-0"
    >
      <div v-show="modalOpen" class="fixed inset-0 bg-gray-900 bg-opacity-30 z-50"></div>
    </transition>
    <!-- Modal dialog -->
    <transition
        enter-active-class="transition ease-in-out duration-200 transform"
        enter-class="opacity-0 scale-75"
        enter-to-class="opacity-100"
        leave-active-class="transition ease-out duration-200"
        leave-class="opacity-100"
        leave-to-class="opacity-0"
    >
      <div v-show="modalOpen" class="fixed inset-0 z-50 overflow-hidden flex items-center my-4 justify-center transform px-4 sm:px-6">
        <div ref="modalContent" class="bg-white rounded-md shadow-lg overflow-auto max-w-md w-full max-h-full">
          <!-- Modal header -->
          <div class="px-5 py-3">
            <div class="flex flex-col">
              <div class="flex justify-end items-center">
                <button class="text-gray-400 hover:text-gray-500 mt-2" @click.stop="$emit('close-modal')">
                  <svg class="w-4 h-4 fill-current">
                    <path d="M7.95 6.536l4.242-4.243a1 1 0 111.415 1.414L9.364 7.95l4.243 4.242a1 1 0 11-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 01-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 011.414-1.414L7.95 6.536z" />
                  </svg>
                </button>
              </div>
              <div class="flex justify-center text-yellow-500 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-20 h-20 stroke-current" viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <circle cx="12" cy="12" r="9" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
              </div>
            </div>
          </div>
          <slot />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "SuccessModal",
  props: ['modalOpen'],
  methods: {
    mouseHandler({target}){
      let modalContent = this.$refs.modalContent;
      if (!this.modalOpen || modalContent.contains(target)) return
      this.$emit("close-modal")
    }
  },
  mounted() {
    document.addEventListener('click', this.mouseHandler)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.mouseHandler)
  }
}
</script>

<style scoped>

</style>