import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import users from '../api/users.json' // Import the JSON data

export const useLoginStore = defineStore('checkLogin', () => {
    const user = ref(JSON.parse(localStorage.getItem('user')) || null)
    const isAuthenticated = computed(() => user.value !== null)

    const register = (newName, newEmail, newPassword) => {
        user.value = { name: newName, email: newEmail, password: newPassword }
        localStorage.setItem('user', JSON.stringify(user.value))
    }

    const login = (email, password) => {
        const storedUser = JSON.parse(localStorage.getItem('user'))
        if (storedUser && storedUser.email === email && storedUser.password === password) {
            user.value = storedUser
            return true
        }

        // Check against the users in the JSON file
        const foundUser = users.find(u => u.email === email && u.password === password)
        if (foundUser) {
            user.value = foundUser
            localStorage.setItem('user', JSON.stringify(foundUser))
            return true
        }

        return false
    }

    const logout = () => {
        user.value = null
        localStorage.removeItem('user')
    }

    const changePassword = (currentPassword, newPassword) => {
        const storedUser = JSON.parse(localStorage.getItem('user'))
        if (storedUser && storedUser.password === currentPassword) {
            storedUser.password = newPassword
            user.value = storedUser
            localStorage.setItem('user', JSON.stringify(storedUser))
            return true
        }
        return false
    }

    return { user, isAuthenticated, register, login, logout, changePassword }
})