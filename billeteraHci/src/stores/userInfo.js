import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useLoginStore } from '../stores/login'

export const useUserInfoStore = defineStore('userInfo', () => {
  const { user } = useLoginStore()
  const userName = computed(() => user ? user.name : '')
  const userEmail = computed(() => user ? user.email : '')

  const userLastName = ref('')
  const userPhone = ref('')
  const userLanguage = ref('')

  const updateUserInfo = (info) => {
    const { name, lastName, phone, email } = info;
    if (user) {
      if (name !== undefined) user.name = name;
      if (email !== undefined) user.email = email;
    }
    userLastName.value = lastName !== undefined ? lastName : '';
    userPhone.value = phone !== undefined ? phone : '';
  }

  const getAlias = computed(() => {
    if (user.email) {
      const sanitizedUserName = user.name.replace(/\s+/g, '_');
      return `${sanitizedUserName}.balloon`;
    }
    return 'laa';
  })

  return { userName, userLastName, userPhone, userEmail, userLanguage, updateUserInfo, getAlias }
})
