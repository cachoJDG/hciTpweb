<template>
    <ContextHeader title="Transferir" />
    <BarraLateral/>
    <v-app>
        <v-container class="ml-10 mt-1">
            <v-row justify="center" align="center" no-gutters>
                <v-card class="rounded-xl" color="white" width="1080px">
                    <v-card-title class="text-h5">Por alias</v-card-title>
                    <v-card-text class="text-subtitle-1">A cuentas bancarias o digitales</v-card-text>

                    <v-card class="bg-deep-purple-lighten-4 rounded-xl text-black ma-8">
                        <v-row justify="space-around" align="center">
                            <v-col cols="7">
                                <v-card-item class="font-weight-medium text-subtitle-1">Ingresa el alias</v-card-item>
                                <v-text-field></v-text-field>
                            </v-col>
                            <v-col cols="2">
                                <v-btn color="secondary" rounded="xl" size="large" @click="showPopup = true">
                                    <v-icon icon="fa:fas mdi-arrow-right" size="large"></v-icon>
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-card>
            </v-row>
        </v-container>
        <v-container class="ml-10 mt-0">
            <v-row justify="center" align="center" no-gutters>
                <v-card class="rounded-xl" color="white" width="1080px">
                    <v-card-title class="text-h5">Por enlace de pago</v-card-title>
                    <v-card-text class="text-subtitle-1">A otras cuentas team chuan</v-card-text>

                    <v-card class="bg-deep-purple-lighten-4 rounded-xl text-black ma-8">
                        <v-row justify="space-around" align="center">
                            <v-col cols="7">
                                <v-card-item class="font-weight-medium text-subtitle-1">Ingresa el enlace de
                                    pago</v-card-item>
                                <v-text-field v-model="paymentLink"></v-text-field>
                            </v-col>
                            <v-col cols="2">
                                <v-btn color="secondary" rounded="xl" size="large" @click="handlePaymentLink">
                                    <v-icon icon="mdi-arrow-right" size="large"></v-icon>
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-card>
            </v-row>
        </v-container>
        <v-dialog v-model="showPopup" max-width="500px">
            <v-card>
                <v-card-title class="headline">Ingresar Dinero</v-card-title>
                <v-card-text>
                    <v-form>
                        <v-text-field v-model="amount" label="Monto" type="number"></v-text-field>
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="green darken-1" text @click="handlesendMoney">Pagar</v-btn>
                    <v-btn color="red darken-1" text @click="showPopup = false">Cancelar</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-dialog v-model="showPaymentOptions" max-width="500px">
            <v-card>
                <v-card-title class="headline">Opciones de Pago</v-card-title>
                <v-card-text>
                    <v-row justify="space-around" align="center">
                        <v-col cols="5">
                            <v-btn color="blue darken-1" text @click="payWithCreditCard">
                                <v-icon left>mdi-credit-card</v-icon>
                                Tarjeta
                            </v-btn>
                        </v-col>
                        <v-col cols="5">
                            <v-btn color="green darken-1" text @click="payWithAccountBalance">
                                <v-icon left>mdi-bank</v-icon>
                                Dinero en Cuenta
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="red darken-1" text @click="showPaymentOptions = false">Cancelar</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-app>
</template>

<script setup>
import { ref } from 'vue';
import BarraLateral from '@/components/BarraLateral.vue';
import ContextHeader from "@/components/contextHeader.vue";
import { useWalletStore } from '@/stores/walletStore.js';
import { useCreditCardStore } from '@/stores/creditCardStorage.js'

const showPopup = ref(false);
const showPaymentOptions = ref(false);
const amount = ref(0);
const paymentLink = ref('');
const walletStore = useWalletStore();
const creditCardStorage = useCreditCardStore();

const handlesendMoney = () => {
    const success = walletStore.removeMoney(amount.value);
    if (!success) {
        alert('Saldo insuficiente');
    } else {
        showPopup.value = false;
    }
};

const handlePaymentLink = () => {
    showPaymentOptions.value = true;
};

const payWithCreditCard = () => {
    const userCreditCards = creditCardStorage.getUserCreditCards();
    if (userCreditCards.length === 0) {
        alert('No tienes tarjetas de crédito disponibles');
        return;
    }

    const urlParts = paymentLink.value.split('/');
    const alias = urlParts[urlParts.length - 2];
    const amount = parseInt(urlParts[urlParts.length - 1], 10);

    walletStore.payWithCreditCard(alias, amount);
    showPaymentOptions.value = false;
    alert(`Pagaste con tarjeta de crédito a: ${alias}, esta cantidad: ${amount}`);
};

const payWithAccountBalance = () => {
    const urlParts = paymentLink.value.split('/');
    const alias = urlParts[urlParts.length - 2];
    const amount = parseInt(urlParts[urlParts.length - 1], 10);

    const success = walletStore.removeMoney(amount);
    if (!success) {
        alert('Saldo insuficiente');
    } else {
        showPaymentOptions.value = false;
        alert(`le mandaste a: ${alias}, esta cantidad: ${amount}`);
    }
};
</script>
