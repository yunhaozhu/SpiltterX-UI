<template>
  <div class="bg-white mx-7 my-3 h-screen shadow-card rounded-md font-display">
    <div class="px-8 py-12 w-full mx-auto lg:px-12 2xl:w-10/12">
      <!-- banner -->
      <div class="mb-20 w-full sm:text-center">
        <div>
          <p class="inline-block px-3 py-px mb-4 text-xs text-gray-800 font-semibold tracking-wider uppercase">
            Totally Free
          </p>
        </div>
        <h2 class="mt-1 mb-6 font-bold tracking-tight text-gray-800 sm:text-4xl lg:text-5xl">
          Spilt your group bills in <span class="text-purple-700">seconds</span>
        </h2>
        <p class="text-base text-gray-600 md:text-lg">
          Fill in your group expenses, and know who owes whom how much!
        </p>
      </div>
      <!-- Starting form -->
      <div class="flex flex-col max-w-2xl mx-auto my-20 py-8 bg-white rounded-lg shadow-card sm:px-6 md:px-8 lg:px-10">
        <div class="mt-8">
          <validation-observer ref="initialRules">
            <validation-provider name="Bill name" rules="required|max:50" v-slot="{ errors, failed }">
              <div class="flex flex-col mb-4">
                <div class="flex relative">
                  <div class="absolute flex items-center z-10 pl-3 pr-2.5 h-full text-gray-500 border-r border-gray-300">
                    <svg class="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z">
                      </path>
                    </svg>
                  </div>
                  <input type="text" id="title" v-model="billName"  :class="failed ? 'ring-2 ring-red-500' : 'border border-gray-300'"
                         class="relative flex-1 rounded-md appearance-none w-full py-2 pl-14 pr-4 text-gray-700 placeholder-gray-400 shadow-sm text-base
                   focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                         placeholder="Give your bill a name"/>
                </div>
                <span class="text-sm text-red-500 pt-2 text-right">{{ errors[0] }}</span>
              </div>
            </validation-provider>
            <validation-provider rules="integer|member" v-slot="{ errors, failed }">
              <div class="flex flex-col mb-6">
                <div class="flex relative">
                  <div class="absolute flex items-center z-10 pl-3 pr-2.5 h-full text-gray-500 border-r border-gray-300">
                    <svg class="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z">
                      </path>
                    </svg>
                  </div>
                  <input type="number" id="people" v-model.number="memberCount"  :class="failed ? 'ring-2 ring-red-500' : 'border border-gray-300'"
                         class="relative flex-1 rounded-md appearance-none w-full py-2 pl-14 pr-4 text-gray-700 placeholder-gray-400 shadow-sm text-base
                   focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                         placeholder="How many people are in your group?"/>
                </div>
                <span class="text-sm text-red-500 pt-2 text-right">{{ errors[0] }}</span>
              </div>
            </validation-provider>
            <div class="flex w-full h-11">
              <button type="button" @click="startSplit"
                      class="py-2 px-4 bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg">
                Start your split now!
              </button>
            </div>
          </validation-observer>
        </div>
        <div class="flex items-center justify-center mt-4 mb-3">
          <a href="#" target="_blank" class="inline-flex items-center text-sm font-thin text-center text-gray-500 hover:text-gray-700">
            <span class="ml-2">Need some examples?</span>
          </a>
        </div>
      </div>
      <!-- Steps -->
      <div class="mb-8 pt-8 grid gap-16 lg:grid-cols-3 font-sans">
        <div class="relative text-center">
          <div class="flex items-center justify-center w-16 h-16 pr-0.5 mx-auto mb-4 rounded-full bg-indigo-50 text-purple-700 sm:w-20 sm:h-20">
            <svg class="w-11 h-11 stroke-current" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M3 19c3.333 -2 5 -4 5 -6c0 -3 -1 -3 -2 -3s-2.032 1.085 -2 3c.034 2.048 1.658 2.877 2.5 4c1.5 2 2.5 2.5 3.5 1c.667 -1 1.167 -1.833 1.5 -2.5c1 2.333 2.333 3.5 4 3.5h2.5" />
              <path d="M20 17v-12c0 -1.121 -.879 -2 -2 -2s-2 .879 -2 2v12l2 2l2 -2z" />
              <path d="M16 7h4" />
            </svg>
          </div>
          <h3 class="mb-3 text-2xl font-semibold">Step 1</h3>
          <p class="max-w-md mb-3 text-md text-gray-900 sm:mx-auto">
            Fill in the bills paid by each member in your group
          </p>
          <div class="top-0 right-0 flex items-center justify-center h-24 lg:-mr-8 lg:absolute">
            <svg class="w-8 text-gray-700 transform rotate-90 lg:rotate-0 stroke-current stroke-2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
              <line fill="none" stroke-miterlimit="10" x1="2" y1="12" x2="22" y2="12"></line>
              <polyline fill="none" stroke-miterlimit="10" points="15,5 22,12 15,19 "></polyline>
            </svg>
          </div>
        </div>
        <div class="relative text-center">
          <div class="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 text-purple-700 sm:w-20 sm:h-20">
            <svg class="w-10 h-10 stroke-current" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <rect x="4" y="3" width="16" height="18" rx="2" />
              <rect x="8" y="7" width="8" height="3" rx="1" />
              <line x1="8" y1="14" x2="8" y2="14.01" />
              <line x1="12" y1="14" x2="12" y2="14.01" />
              <line x1="16" y1="14" x2="16" y2="14.01" />
              <line x1="8" y1="17" x2="8" y2="17.01" />
              <line x1="12" y1="17" x2="12" y2="17.01" />
              <line x1="16" y1="17" x2="16" y2="17.01" />
            </svg>
          </div>
          <h3 class="mb-3 text-2xl font-semibold">Step 2</h3>
          <p class="max-w-md mb-3 text-md text-gray-900 sm:mx-auto">
            Calculate and save the bills in your account
          </p>
          <div class="top-0 right-0 flex items-center justify-center h-24 lg:-mr-8 lg:absolute">
            <svg class="w-8 text-gray-700 transform rotate-90 lg:rotate-0 stroke-current stroke-2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
              <line fill="none" stroke-miterlimit="10" x1="2" y1="12" x2="22" y2="12"></line>
              <polyline fill="none" stroke-miterlimit="10" points="15,5 22,12 15,19 "></polyline>
            </svg>
          </div>
        </div>
        <div class="relative text-center">
          <div class="flex items-center justify-center w-16 h-16 pr-0.5 mx-auto mb-4 rounded-full bg-indigo-50 text-purple-700 sm:w-20 sm:h-20">
            <svg class="w-10 h-10 stroke-current" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="6" r="3" />
              <circle cx="18" cy="18" r="3" />
              <line x1="8.7" y1="10.7" x2="15.3" y2="7.3" />
              <line x1="8.7" y1="13.3" x2="15.3" y2="16.7" />
            </svg>
          </div>
          <h3 class="mb-3 text-2xl font-semibold">Step 3</h3>
          <p class="max-w-md mb-3 text-md text-gray-900 sm:mx-auto">
            Share the link with your friends or let them edit
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import { memberRule, requiredRule, maxRule, integerRule } from "@/validation";

export default {
  name: "Home",
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      memberCount: null,
      billName: '',
      memberRule,
      requiredRule,
      maxRule,
      integerRule
    }
  },
  methods: {
    startSplit() {
      this.$refs.initialRules.validate().then(success => {
        if (success) {
          if (this.memberCount == null) {
            this.memberCount = 2
          }
          this.$store.commit('setInitialBillName', this.billName)
          this.$store.commit('setInitialMember', this.memberCount)
          this.$router.push('/bill')
        }
      })
    }
  },
}
</script>

<style scoped>

</style>