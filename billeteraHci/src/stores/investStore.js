import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useWalletStore } from './walletStore.js'

export const useInvestStore = defineStore('invest', () => {
    const investedAmount = ref(0)
    const dailyReturnRate = ref(0.001) 

    const { balance, addMoney, removeMoney } = useWalletStore()

    const investMoney = (amount) => {
        if (amount > 0 && balance.value >= amount) {
            removeMoney(amount)
            investedAmount.value += amount
        }
    }

    const withdrawInvestment = (amount) => {
        if (amount > 0 && investedAmount.value >= amount) {
            investedAmount.value -= amount
            addMoney(amount)
        }
    }

    const applyDailyReturn = () => {
        investedAmount.value += investedAmount.value * dailyReturnRate.value
    }

    const getInvestedAmount = () => {
        return investedAmount.value
    }

    return { investMoney, withdrawInvestment, applyDailyReturn, getInvestedAmount }
})

