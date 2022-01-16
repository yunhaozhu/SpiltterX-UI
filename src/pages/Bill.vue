<template>
  <div class="flex mx-7 my-3 space-x-12">
    <!-- items -->
    <div class="w-3/5 ml-2">
      <div class="mt-2 mb-6 text-2xl text-gray-600">
        <h2>Group Expanses</h2>
      </div>
      <validation-observer ref="expanses">
        <div v-for="member in members" :key="member.memberId">
          <div class="flex-col bg-white rounded-lg shadow-card justify-center mb-10">
            <div class="flex justify-between mx-6 pt-8">
              <validation-provider class="flex flex-col z-0" name="Name" rules="required|max:30" v-slot="{ errors, failed }" :vid="'member'+member.memberId">
                <div class="flex relative h-10">
                  <div class="absolute flex items-center z-10 pl-2.5 pr-2 h-full text-gray-500 border-r border-gray-300">
                    <svg class="w-6 h-6 stroke-current stroke-2" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                      <circle cx="12" cy="7" r="4" />
                      <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                    </svg>
                  </div>
                  <input type="text" id="people" v-model="member.memberName" :class="failed ? 'ring-2 ring-red-500' : 'border border-gray-300'"
                         class="relative rounded-md appearance-none w-full py-2 pl-14 text-gray-700 placeholder-gray-400 shadow-sm text-base
                       focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Member Name"/>
                </div>
                <span class="text-xs text-red-500 pt-2 text-right">{{ errors[0] }}</span>
              </validation-provider>
              <div class="flex text-md text-gray-500 justify-center mt-1 mr-6">
                <svg xmlns="http://www.w3.org/2000/svg" class="mr-1 w-6 h-6 stroke-current stroke-2" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <circle cx="12" cy="12" r="9" />
                  <path d="M14.8 9a2 2 0 0 0 -1.8 -1h-2a2 2 0 0 0 0 4h2a2 2 0 0 1 0 4h-2a2 2 0 0 1 -1.8 -1" />
                  <path d="M12 6v2m0 8v2" />
                </svg>
                <p>Total: {{totals[member.memberId]}}$</p>
              </div>
            </div>
            <!-- Repeating Form -->
            <div class="flex-col px-3 py-8 md:px-6">
              <!-- Field Labels -->
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
              <!-- Fields -->
              <div v-for="(item, itemIndex) in member.items" :key="item.id">
                <div class="flex space-x-3 text-sm text-gray-600 mb-3">
                  <validation-provider class="w-2/5 flex flex-col" name="Name" rules="required|max:30" v-slot="{ errors, failed }" :vid="member.memberId+'name'+itemIndex">
                    <input id="item-name" type="text" v-model="item.itemName" :class="failed ? 'ring-2 ring-red-500' : 'border'"
                           class="block w-full px-4 py-1.5 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                    <span class="text-xs text-red-500 pt-2 text-right">{{ errors[0] }}</span>
                  </validation-provider>
                  <validation-provider class="w-1/5 flex flex-col" name="Cost" rules="required|min_value:0" v-slot="{ errors, failed }" :vid="member.memberId+'cost'+itemIndex">
                    <input id="cost" type="text" v-model.number="item.cost" @blur="updateTotal(member.memberId)" :class="failed ? 'ring-2 ring-red-500' : 'border'"
                           class="block w-full px-4 py-1.5 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                    <span class="text-xs text-red-500 pt-2 text-right">{{ errors[0] }}</span>
                  </validation-provider>
                  <validation-provider class="w-1/5 flex flex-col" name="Quantity" rules="required|min_value:0" v-slot="{ errors, failed }" :vid="member.memberId+'quantity'+itemIndex">
                    <input id="quantity" type="number" v-model.number="item.quantity" @blur="updateTotal(member.memberId)" :class="failed ? 'ring-2 ring-red-500' : 'border'"
                           class="block w-full px-4 py-1.5 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                    <span class="text-xs text-red-500 pt-2 text-right">{{ errors[0] }}</span>
                  </validation-provider>
                  <div class="w-1/5 pl-3">
                    <div class="flex">
                      <ShareDropdown :shareActive="item.shareActive" @close-dropdown="checkShare(member.memberId, itemIndex)">
                        <div class="flex flex-col mx-3 my-2 w-28">
                          <p class="mt-2 mb-3">Who share this?</p>
                          <div v-for="m in members" :key="m.memberId">
                            <div class="flex items-center mb-2.5 cursor-pointer">
                              <input :id="member.memberId+'share'+itemIndex+m.memberId" type="checkbox" class="form-checkbox text-purple-600 focus:ring-white rounded cursor-pointer" v-model="item.share[m.memberId]"/>
                              <label :for="member.memberId+'share'+itemIndex+m.memberId" class="ml-2 text-sm font-medium truncate select-none cursor-pointer">{{ m.memberName }}</label>
                            </div>
                          </div>
                        </div>
                      </ShareDropdown>
                      <div class="pt-1 pl-3 cursor-pointer" @click="removeItem(member.memberId, itemIndex)">
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
                <button @click="addItem(member.memberId)"
                        class="py-2 text-white tracking-wide bg-purple-600 hover:bg-purple-700 w-full transition ease-in duration-200 text-center text-base shadow-md rounded-lg">
                  Add More +
                </button>
              </div>
            </div>
          </div>
        </div>
      </validation-observer>
    </div>
    <!-- result column-->
    <div class="w-1/3">
      <div class="sticky top-6">
        <div class="mt-2 mb-6 text-2xl text-gray-600">
          <h2>Results</h2>
        </div>
        <div class="flex-col bg-white rounded-lg shadow-card justify-center">
          <div class="flex justify-center pt-6 pb-3 text-gray-600">
            <validation-observer ref="billName">
              <validation-provider name="Name" rules="required|max:50" v-slot="{ errors, failed }">
                <div class="flex justify-between w-60 border-b-2 h-11 focus-within:border-purple-600" :class="failed ? 'border-red-500' : ''">
                  <input id="bill" class="block w-full mx-2 text-lg outline-none" type="text" v-model="billName">
                  <label for="bill" class="w-8 mr-2 pt-2 cursor-pointer">
                    <svg class="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z">
                      </path>
                    </svg>
                  </label>
                </div>
                <span class="text-xs text-red-500 pt-2 text-right">{{ errors[0] }}</span>
              </validation-provider>
            </validation-observer>
          </div>
          <div class="flex justify-center pt-5 pb-3 text-lg text-gray-600">
            <h2>Current Members:</h2>
          </div>
          <div class="flex justify-center text-gray-600 pt-2 pb-8">
            <div class="flex space-x-2">
              <button @click="removeMember"
                      class="py-2 w-10 h-11 text-white text-xl bg-purple-600 hover:bg-purple-700 transition ease-in duration-200 text-center text-base shadow-md rounded-md">-
              </button>
              <div class="flex w-24 border-2 h-11 rounded-md focus-within:ring-2 focus-within:ring-purple-600 focus-within:border-transparent">
                <div class="w-12 border-r-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 ml-2.5 mt-2 stroke-current" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <circle cx="9" cy="7" r="4" />
                    <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                  </svg>
                </div>
                <span v-text="memberCount" class="w-12 pl-3 pt-1.5 text-xl"></span>
              </div>
              <button @click="addMember(1)"
                      class="py-2 w-10 h-11 text-white text-xl bg-purple-600 hover:bg-purple-700 transition ease-in duration-200 text-center text-base shadow-md rounded-md">+
              </button>
            </div>
          </div>
          <div class="flex justify-center mt-18">
            <button @click="submitBill"
                    class="py-2 w-full h-11 text-white text-lg font-light tracking-wide bg-purple-600 hover:bg-purple-700
                  transition ease-in duration-200 text-center text-base shadow-md rounded-b-md">
              Show results
            </button>
          </div>
        </div>
        <div class="bg-white rounded-lg shadow-card justify-center mt-10" v-show="resultsOpen">
          <div class="flex flex-col pt-7 pb-2 text-lg text-gray-600">
            <div class="flex justify-center mb-5">
              <h2>Who pays who how much:</h2>
            </div>
            <div class="flex flex-col mx-6 px-6 mb-8 text-base">
              <div v-for="(result, id) in results" :key="id"
                   class="flex justify-between items-center px-6 h-11 border-t-2 border-r-2 border-l-2 last:border-b-2">
                <span v-text="result.memberA" class="truncate"></span>
                <div class="flex items-center pl-3">
                  <div class="w-20 bg-purple-500 text-white text-center">
                    <span v-text="result.amount"></span>
                  </div>
                  <div class="w-6 h-6 bg-purple-500 text-white text-center transform rotate-45 scale-75 -translate-x-3"></div>
                </div>
                <span v-text="result.memberB" class="truncate">Name 2</span>
              </div>
            </div>
            <div class="mx-12 mb-6 rounded border-2 border-green-400">
              <div class="flex h-10 items-center justify-between">
                <span ref="billLink" class="text-sm mx-3 overflow-auto no-scrollbar">
                  http://localhost:8080/bill/{{billId}}
                </span>
                <button type="button" @click.stop="copyLink" class="mr-3 text-green-500 select-none text-base">Copy</button>
              </div>
            </div>
            <div class="flex h-10 mx-12 mb-12 rounded-md bg-purple-600 hover:bg-purple-700 transition ease-in duration-200 shadow-md">
              <button type="button" @click.stop="saveBill" class="w-full text-white font-light text-base">Save to my account</button>
            </div>
            <SuccessModal :modal-open="successModal" @close-modal="successModal = false">
              <div class="flex flex-col text-center">
                <div class="text-xl font-medium mb-4 text-gray-600">
                  <span>{{ successTitle }}</span>
                </div>
                <div class="text-base text-gray-500">
                  <span>{{ successContent }}</span>
                </div>
              </div>
            </SuccessModal>
            <WarningModal :modal-open="loginModal" @close-modal="loginModal = false">
              <div class="flex flex-col text-center">
                <div class="text-xl mb-2 text-gray-600">
                  <span>Login Required</span>
                </div>
              </div>
              <div class="flex h-9 mt-6 mb-8 justify-center">
                <button type="button" @click.stop="startLogin"
                        class="w-20 text-white text-base rounded-md bg-purple-600 hover:bg-purple-700 transition ease-in duration-200">
                  Sign In
                </button>
              </div>
            </WarningModal>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ShareDropdown from "@/pages/components/ShareDropdown";
import { mapState } from "vuex";
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import { requiredRule, maxRule, minValueRule } from "@/validation";
import SuccessModal from "@/pages/components/SuccessModal";
import WarningModal from "@/pages/components/WarningModal";

export default {
  name: "Bill",
  components: {
    SuccessModal,
    ShareDropdown,
    ValidationProvider,
    ValidationObserver,
    WarningModal
  },
  data() {
    return {
      requiredRule,
      maxRule,
      minValueRule,
      successModal: false,
      successTitle: "",
      successContent: "",
      loginModal: false,
      billId: "",
      billName: "",
      memberCount: 1,
      resultsOpen: false,
      totals: [0, 0],
      results: [],
      members: [{
        memberId: 0,
        memberName: "Name 1",
        nextItem: 1,
        items: [{
          itemId: 0,
          itemName: "",
          cost: null,
          quantity: 1,
          share: [],
          shareActive: false}]
      }],
    }
  },
  computed: {
    ...mapState(['initialBillName','initialMember'])
  },
  methods: {
    submitBill() {
      this.$refs.expanses.validate().then(success => {
        if (success) {
          this.$refs.billName.validate().then(success2 => {
            if (success2) {
              let submitData = {
                billId: this.billId,
                billName: this.billName,
                memberCount: this.memberCount,
                totals: this.totals,
                members: this.members,
              }
              const _this = this
              this.$axios.post('/split', submitData).then(res => {
                _this.results = res.data.data.splitResult
                _this.billId = res.data.data.billId
              })
              this.resultsOpen = true;
            }
          })
        }
      })
    },
    updateTotal(memberId) {
      let sum = 0;
      for (let item of this.members[memberId].items) {
        if (item.cost != null && item.quantity != null) {
          sum = sum + item.cost * item.quantity
        }
      }
      sum = sum.toFixed(2)
      this.$set(this.totals, memberId, sum)
      this.resultsOpen = false
    },
    checkShare(memberId, itemIndex) {
      let active = false;
      for (let share of this.members[memberId].items[itemIndex].share) {
        if (share !== true) active = true
      }
      this.members[memberId].items[itemIndex].shareActive = active
      this.resultsOpen = false
    },
    addItem(memberId) {
      this.members[memberId].items.push({
        itemId: this.members[memberId].nextItem,
        itemName: "",
        cost: null,
        quantity: 1,
        share: [true,true],
        shareActive: false
      })
      for (let i = 2; i < this.memberCount; i++) {
        this.members[memberId].items.at(-1).share.push(true)
      }
      this.members[memberId].nextItem = this.members[memberId].nextItem + 1
    },
    removeItem(memberId, itemIndex){
      this.members[memberId].items.splice(itemIndex, 1)
    },
    addMember(count) {
      if (this.memberCount >= 30) return
      for (let i = 0; i < count; i++) {
        this.members.push({
          memberId: this.memberCount,
          memberName: "Name " + (this.memberCount+1),
          nextItem: 0,
          items: [{
            itemId: 0,
            itemName: "",
            cost: null,
            quantity: 1,
            share: [],
            shareActive: false}]
        })
        this.totals[this.memberCount] = 0
        this.updateTotal(this.memberCount)
        this.memberCount = this.memberCount + 1
      }
      for (let member of this.members) {
        for (let item of member.items) {
          for (let i = item.share.length; i < this.memberCount; i++) {
            item.share.push(true)
          }
        }
      }
    },
    removeMember() {
      if(this.memberCount > 2) {
        this.totals.pop()
        this.memberCount = this.memberCount - 1
        this.members.pop();
        for (let member of this.members) {
          for (let item of member.items) {
            item.share.pop()
          }
        }
      }
    },
    copyLink() {
      let billLink = this.$refs.billLink.textContent
      const _this = this
      this.$copyText(billLink).then(() => {
        _this.successTitle = "Link Copied"
        _this.successContent = "Use this link to share with your friends!"
        _this.successModal = true
      }, e => {
        alert("Copy Failed"+ e.text)
      })
    },
    saveBill() {
      const token = this.$store.state.token
      if (token) {
        this.$axios.post('/save-bill', {billId: this.billId}, {
          headers: {"Authorization": this.$store.state.token}
        }).then(res => {
          alert("succ"+res)
        }, error => {
          alert(error)
          console.log(error)
        })
      } else {
        this.loginModal = true
      }
    },
    startLogin() {
      this.loginModal = false
      this.$router.push('/login')
    }
  },
  created() {
    const billId = this.$route.params.billId
    if (billId) {
      const _this = this
      this.$axios.get('/bill/' + billId).then(res => {
        const bill = res.data.data.bill
        _this.results = res.data.data.results
        _this.billId = bill.billId
        _this.billName = bill.billName
        _this.memberCount = bill.memberCount
        _this.resultsOpen = true
        _this.totals = bill.totals
        _this.members = bill.members
      })
    } else {
      this.updateTotal(0)
      this.billName = this.initialBillName
      this.addMember(this.initialMember - 1)
    }
  },
}
</script>

<style scoped>
</style>