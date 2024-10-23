import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserInfoStore = defineStore('checkLogin', () => {
  const userName = ref('nep')
  return { userName }
})
