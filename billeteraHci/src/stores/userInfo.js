import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useLoginStore } from './login.js'

export const useUserInfoStore = defineStore('userInfo', () => {
  const { user } = useLoginStore()
  const userName = computed(() => user.value ? user.value.name : '')
  const userEmail = computed(() => user.value ? user.value.email : '')

  const userLastName = ref('')
  const userPhone = ref('')
  const userLanguage = ref('')

  const updateUserInfo = (info) => {
    const { name, lastName, phone, email } = info;
    if (user.value) {
      if (name !== undefined) user.value.name = name;
      if (email !== undefined) user.value.email = email;
    }
    userLastName.value = lastName !== undefined ? lastName : userLastName.value;
    userPhone.value = phone !== undefined ? phone : userPhone.value;
  }

  return { userName, userLastName, userPhone, userEmail, userLanguage, updateUserInfo }
})
