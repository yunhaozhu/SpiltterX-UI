<template>
  <div class="flex mx-7 my-3 space-x-12">
    <!-- items -->
    <div class="w-3/5 ml-2">
      <div class="mt-2 mb-6 text-2xl text-gray-600">
        <h2>Group Expanses</h2>
      </div>
      <div class="flex-col bg-white rounded-lg shadow-card justify-center">
        <div class="flex justify-between mx-6 pt-8">
          <div class="flex relative h-10">
            <div class="absolute flex items-center z-10 pl-2.5 pr-2 h-full text-gray-500 border-r border-gray-300">
              <svg class="w-6 h-6 stroke-current stroke-2" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <circle cx="12" cy="7" r="4" />
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
              </svg>
            </div>
            <input type="text" id="people"
                   class="relative rounded-md appearance-none border border-gray-300 w-full py-2 pl-14 text-gray-700 placeholder-gray-400 shadow-sm text-base
                       focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                   placeholder="Member 1"/>
          </div>
          <div class="flex text-md text-gray-500 justify-center mt-1 mr-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 w-6 h-6 stroke-current stroke-2" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <circle cx="12" cy="12" r="9" />
              <path d="M14.8 9a2 2 0 0 0 -1.8 -1h-2a2 2 0 0 0 0 4h2a2 2 0 0 1 0 4h-2a2 2 0 0 1 -1.8 -1" />
              <path d="M12 6v2m0 8v2" />
            </svg>
            <h3>Total: 28.7$</h3>
          </div>
        </div>
        <!-- Repeating Form -->
        <div class="flex-col px-3 py-8 md:px-6">
          <div class="flex space-x-3">
            <div class="w-2/5">
              <p class="block mb-2 text-sm text-gray-500">Item Name</p>
            </div>
            <div class="w-1/5">
              <p class="block mb-2 text-sm text-gray-500">Cost</p>
            </div>
            <div class="w-1/5">
              <p class="block mb-2 text-sm text-gray-500">Quantity</p>
            </div>
            <div class="w-1/5 pl-3">
              <p class="pl-1 block mb-2 text-sm text-gray-500">Actions</p>
            </div>
          </div>
          <div v-for="item in members[0].items" :key="item.id" class="">
            <div class="flex space-x-3 text-sm text-gray-600 mb-3">
                <div class="w-2/5">
                  <input id="item-name" v-model="item.name" class="block w-full px-4 py-1.5 bg-white border rounded-md
               focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text">
                </div>
                <div class="w-1/5">
                  <input id="cost" v-model="item.cost" class="block w-full px-4 py-1.5 bg-white border rounded-md
               focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text">
                </div>
                <div class="w-1/5">
                  <input id="quantity" v-model="item.quantity" class="block w-full px-4 py-1.5 bg-white border rounded-md
               focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text">
                </div>
                <div class="w-1/5 pl-3">
                  <div class="flex">
                    <div class="pl-0.5 pt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 stroke-current text-gray-600" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <circle cx="9" cy="7" r="4" />
                        <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                      </svg>
                    </div>
                    <div class="pt-1 pl-3">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 stroke-current text-red-500" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <line x1="4" y1="7" x2="20" y2="7" />
                        <line x1="10" y1="11" x2="10" y2="17" />
                        <line x1="14" y1="11" x2="14" y2="17" />
                        <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                        <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
          </div>

          <div class="flex mt-6">
            <span class="w-full border-b"></span>
          </div>

          <div class="mt-3 w-32">
            <button @click="addItem"
                    class="py-2 text-white tracking-wide bg-purple-600 hover:bg-purple-700 w-full transition ease-in duration-200 text-center text-base shadow-md rounded-lg">
              Add More +
            </button>
          </div>

        </div>
      </div>
    </div>
    <!-- result column-->
    <div class="w-1/3">
      <div class="sticky top-6">
        <div class="mt-2 mb-6 text-2xl text-gray-600">
          <h2>Results</h2>
        </div>
        <div class="flex-col bg-white rounded-lg shadow-card justify-center">
          <div class="flex justify-center pt-6 pb-3 text-gray-600">
            <div class="flex justify-between w-60 border-b-2 h-11 focus-within:border-purple-600">
              <input id="bill" class="block w-full mx-2 text-lg outline-none" type="text" v-model="billName">
              <label for="bill" class="w-8 mr-2 pt-2 cursor-pointer">
                <svg class="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z">
                  </path>
                </svg>
              </label>
            </div>
          </div>
          <div class="flex justify-center pt-5 pb-3 text-lg text-gray-600">
            <h2>Current Members:</h2>
          </div>
          <div class="flex justify-center text-gray-600 pt-2 pb-8">
            <div class="flex space-x-2">
              <button @click="addItem"
                      class="py-2 w-10 h-11 text-white text-xl bg-purple-600 hover:bg-purple-700 transition ease-in duration-200 text-center text-base shadow-md rounded-md">-
              </button>
              <div class="flex w-28 border-2 h-11 rounded-md focus-within:ring-2 focus-within:ring-purple-600 focus-within:border-transparent">
                <div class="w-32 border-r-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 ml-2.5 mt-2 stroke-current" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <circle cx="9" cy="7" r="4" />
                    <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                  </svg>
                </div>
                <input id="members" class="block w-full mx-3 text-xl outline-none" type="text" v-model="memberCount">
              </div>
              <button @click="addItem"
                      class="py-2 w-10 h-11 text-white text-xl bg-purple-600 hover:bg-purple-700 transition ease-in duration-200 text-center text-base shadow-md rounded-md">+
              </button>
            </div>
          </div>
          <div class="flex justify-center mt-18">
            <button @click="addItem"
                    class="py-2 w-full h-11 text-white text-lg font-light tracking-wide bg-purple-600 hover:bg-purple-700
                  transition ease-in duration-200 text-center text-base shadow-md rounded-b-md">
              Show results
            </button>
          </div>
        </div>
        <div class="flex-col bg-white rounded-lg shadow-card justify-center mt-12">
          <div class="flex justify-center pt-5 pb-3 text-lg text-gray-600" v-show="true">
            <h2>Who pays who how much:</h2>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "Bill",
  data() {
    return {
      billName: "Someone's Bill Group",
      memberCount: 2,
      members: [{
        id: 1,
        total: 0,
        nextItem: 1,
        items: [{
          id: 1,
          name: "xxx",
          cost: 9.72,
          quantity: 1,
        }]
      }]
    }
  },
  methods: {
    addItem() {
      this.members[0].items.push({
        id: this.members[0].nextItem += this.members[0].nextItem
      })
    }
  }
}
</script>

<style scoped>

</style>
