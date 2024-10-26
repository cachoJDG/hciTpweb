<script setup>
import { ref } from 'vue';
import BarraLateral from '@/components/ContextComponents/BarraLateral.vue';
import ContextHeader from "@/components/ContextComponents/contextHeader.vue";
import { useUserInfoStore } from '@/stores/userInfo.js';
import { useWalletStore } from '@/stores/walletStore.js';

const userInfoStore = useUserInfoStore();
const alias = userInfoStore.getAlias;

const walletStore = useWalletStore();

const amount = ref(0);
const dialog = ref(false);
const dialogMessage = ref('');

const handleButtonClick = () => {
    walletStore.addMoney(200);
};

const logPaymentLink = () => {
    const paymentLink = `http://ballon/${alias}/${amount.value}`;
    navigator.clipboard.writeText(paymentLink).then(() => {
        dialogMessage.value = 'El contenido se a copiado al portapapeles';
        dialog.value = true;
    }).catch(err => {
        dialogMessage.value = 'Error al copiar el enlace de pago';
        dialog.value = true;
        console.error('Failed to copy payment link: ', err);
    });
};

const logcvuLink = () => {
    const paymentLink = `http://ballon/${alias}/${amount.value}`;
    navigator.clipboard.writeText(paymentLink).then(() => {
        dialogMessage.value = 'El contenido se a copiado al portapapeles';
        dialog.value = true;
    }).catch(err => {
        dialogMessage.value = 'Error al copiar el enlace de pago';
        dialog.value = true;
        console.error('Failed to copy payment link: ', err);
    });
};

const copyCVUToClipboard = () => {
    navigator.clipboard.writeText(cvu).then(() => {
        dialogMessage.value = 'El CVU se ha copiado al portapapeles';
        dialog.value = true;
    }).catch(err => {
        dialogMessage.value = 'Error al copiar el CVU';
        dialog.value = true;
        console.error('Failed to copy CVU: ', err);
    });
};

function generateCVU() {
    let cvu = '';
    for (let i = 0; i < 22; i++) {
        cvu += Math.floor(Math.random() * 10); // Genera un dígito aleatorio entre 0 y 9
    }
    return cvu;
}

const cvu = generateCVU();
</script>  

<template>
    <context-header title="Tu CVU" />
    <BarraLateral  />
    <v-row justify="center" class="ma-15">
        <v-card class="rounded-xl" color="white" style="width:450px;">
            <v-card-title class="text-h5">Datos de Pago</v-card-title>
            <v-card-text class="text-subtitle-1">Comparte tu enlace de pago o alias para recibir dinero de cuentas
                bancarias o digitales</v-card-text>
            <v-card class="bg-deep-purple-lighten-4 rounded-xl text-black ma-2">
                <v-row justify="space-around" align="center">
                    <v-col cols="7">
                        <v-card-item class="font-weight-bold pb-0">Tu alias</v-card-item>
                                               <v-card-item>{{ alias }}</v-card-item>
                    </v-col>
                    <v-col cols="2">
                        <v-btn color="secondary" rounded="xl" @click="handleButtonClick">
                            <v-icon icon="mdi-account-edit-outline"></v-icon>
                        </v-btn>
                    </v-col>
                    <v-col>
                        <v-btn color="secondary" rounded="xl" @click="handleButtonClick">
                            <v-icon icon="mdi-content-copy"></v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-card>
            <v-card class="bg-deep-purple-lighten-4 rounded-xl text-black ma-2">
                <v-row justify="space-around" align="center">
                    <v-col cols="9">
                        <v-card-item class="font-weight-bold pb-0">Tu CVU</v-card-item>
                                               <v-card-item>{{ cvu }}</v-card-item>
                    </v-col>
                    <v-col>
                        <v-btn color="secondary" rounded="xl" @click="copyCVUToClipboard">
                            <v-icon icon="mdi-content-copy" ></v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-card>
            <v-card class="bg-deep-purple-lighten-4 rounded-xl text-black ma-2">
                <v-row justify="space-around" align="center">
                    <v-col cols="9">
                        <v-card-item class="font-weight-bold pb-0">Generar link de pago</v-card-item>
                        <v-text-field v-model="amount" label="Monto" type="number"></v-text-field>
                    </v-col>
                    <v-col>
                        <v-btn color="secondary" rounded="xl" @click="logPaymentLink">
                            <v-icon icon="mdi-content-copy" ></v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
                <v-card-item class="font-weight-light pt-2">Un link de pago se lo puedes compartir a alguien y te tendra que pagar exactamente ese monto</v-card-item>
            </v-card>
        </v-card>
    </v-row>
    <v-dialog v-model="dialog" max-width="400">
        <v-card>
            <v-card-title class="headline">Información</v-card-title>
            <v-card-text>{{ dialogMessage }}</v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" text @click="dialog = false">Cerrar</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
