import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useLoginStore } from './login.js'  // Importa la tienda de login para acceder al usuario actual

export const useCreditCardStore = defineStore('creditCard', () => {
    const creditCards = ref([])

    const { user } = useLoginStore()  // Accede al usuario actual

    const addCreditCard = (cardNumber, cardHolder, expirationDate, cvv) => {
        if (user) {
            const newCard = {
                cardNumber,
                cardHolder,
                expirationDate,
                cvv,
                userEmail: user.email  // Asocia la tarjeta al email del usuario ya que cada usuario tiene distintas y como manejamos pinia no quiero q las puedan compartir
            }
            creditCards.value.push(newCard)
        }
    }

    const removeCreditCard = (cardNumber) => {
        if (user) {
            creditCards.value = creditCards.value.filter(card => card.cardNumber !== cardNumber && card.userEmail === user.email)
        }
    }

    const getUserCreditCards = () => {
        if (user) {
            return creditCards.value.filter(card => card.userEmail === user.email)
        }
        return []
    }

    return { creditCards, addCreditCard, removeCreditCard, getUserCreditCards }
})