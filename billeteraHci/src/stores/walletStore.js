import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useCreditCardStore } from './creditCardStorage.js'

export const useWalletStore = defineStore('wallet', () => {
    const balanceValue = ref(0)
    const transactions = ref([])

    const { addCreditCard, removeCreditCard, getUserCreditCards } = useCreditCardStore()

    const balance = computed(() => balanceValue.value)

    const addMoney = (amount) => {
        if (amount > 0) {
            balanceValue.value += amount
            const date = new Date()
            const formattedDate = `${date.toLocaleDateString()} ${date.toTimeString().split(' ')[0].slice(0, 5)}`
            transactions.value.push({ type: 'add', amount, date: formattedDate })
        }
    }

    const removeMoney = (amount) => {
        if (amount > 0 && balanceValue.value >= amount) {
            balanceValue.value -= amount
            const date = new Date()
            const formattedDate = `${date.toLocaleDateString()} ${date.toTimeString().split(' ')[0].slice(0, 5)}`
            transactions.value.push({ type: 'remove', amount, date: formattedDate })
            return true;
        }
        return false;
    }

    const payWithCreditCard = (cardNumber, amount) => {
        const userCreditCards = getUserCreditCards()
        const card = userCreditCards.find(card => card.cardNumber === cardNumber)
        if (card && amount > 0) {
            const date = new Date()
            const formattedDate = `${date.toLocaleDateString()} ${date.toTimeString().split(' ')[0].slice(0, 5)}`
            transactions.value.push({ type: 'creditCardPayment', amount, day, formattedDate })
        }
    }

    const getBalance = () => {
        return balance.value
    }

    const getTransactions = () => {
        return transactions.value
    }

    return { balance, addMoney, removeMoney, payWithCreditCard, getBalance, getTransactions }
})
