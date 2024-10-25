import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useLoginStore } from './login.js'  // Importa la tienda de login para acceder al usuario actual

export const useCreditCardStore = defineStore('creditCard', () => {
    const creditCards = ref([])

    const { user } = useLoginStore()  // Accede al usuario actual

    const addCreditCard = (cardNumber, cardHolder, expirationDate, cvv) => {
        if (user.value) {
            const newCard = {
                cardNumber,
                cardHolder,
                expirationDate,
                cvv,
                userEmail: user.value.email  // Asocia la tarjeta al email del usuario ya que cada usuario tiene distintas y como manejamos pinia no quiero q las puedan compartir
            }
            creditCards.value.push(newCard)
        }
    }

    const removeCreditCard = (cardNumber) => {
        if (user.value) {
            creditCards.value = creditCards.value.filter(card => card.cardNumber !== cardNumber && card.userEmail === user.value.email)
        }
    }

    const getUserCreditCards = () => {
        if (user.value) {
            return creditCards.value.filter(card => card.userEmail === user.value.email)
        }
        return []
    }

    return { creditCards, addCreditCard, removeCreditCard, getUserCreditCards }
})