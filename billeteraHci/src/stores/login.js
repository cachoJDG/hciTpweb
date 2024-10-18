import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useLoginStore = defineStore('checkLogin', () => {
    const user = ref(null)
    const isAuthenticated = computed(() => user.value !== null)

    const login = (email, password) => {
        // Simulate a login check
        if (email === 'example@example.com' && password === '123456') {
            user.value = { email, password }
            return true
        }
        return false
    }

    const logout = () => {
        user.value = null
    }

    return { user, isAuthenticated, login, logout }
})
