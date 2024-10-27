import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useCreditCardStore } from './creditCardStorage.js'

export const useWalletStore = defineStore('wallet', () => {
    const balanceValue = ref(0)
    const transactions = ref([])

    const { addCreditCard, removeCreditCard, getUserCreditCards } = useCreditCardStore()

    const balance = computed(() => balanceValue.value)

    const addMoney = (amount, typeOfTransaction) => {
        if (amount > 0) {
            balanceValue.value += amount
            const date = new Date()
            const formattedDate = `${date.toLocaleDateString()} ${date.toTimeString().split(' ')[0].slice(0, 5)}`
            transactions.value.push({ type: 'add', typeOfTransaction, amount, date: formattedDate })
        }
    }

    const removeMoney = (amount, typeOfTransaction) => {
        if (amount > 0 && balanceValue.value >= amount) {
            balanceValue.value -= amount
            const date = new Date()
            const formattedDate = `${date.toLocaleDateString()} ${date.toTimeString().split(' ')[0].slice(0, 5)}`
            transactions.value.push({ type: 'remove', typeOfTransaction, amount, date: formattedDate })
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
            transactions.value.push({ type: 'remove', typeOfTransaction: 'Tarjeta de Credito', amount, date: formattedDate })
            return true;
        }
        return false;
    }

    const getBalance = () => {
        return balance.value
    }

    const getTransactions = () => {
        return transactions.value
    }

    return { balance, addMoney, removeMoney, payWithCreditCard, getBalance, getTransactions }
})
