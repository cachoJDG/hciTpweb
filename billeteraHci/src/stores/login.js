import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useLoginStore = defineStore('checkLogin', () => {
    const user = ref(JSON.parse(localStorage.getItem('user')) || null)
    const isAuthenticated = computed(() => user.value !== null)

    const register = (newName, newEmail, newPassword) => {
        user.value = { name: newName, email: newEmail, password: newPassword }
        localStorage.setItem('user', JSON.stringify(user.value))
    }

    const login = (email, password) => {
        if (user.value && user.value.email === email && user.value.password === password) {
            return true
        }
        return false
    }

    const logout = () => {
        user.value = null
        localStorage.removeItem('user')
    }

    const initiatePasswordReset = (email, newPassword) => {
        if (user.value && user.value.email === email) {
            user.value.password = newPassword
            localStorage.setItem('user', JSON.stringify(user.value))
        }
    }

    return { user, isAuthenticated, register, login, logout, initiatePasswordReset }
})
