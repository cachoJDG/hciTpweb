<script setup>
import { ref } from 'vue';
import BarraLateral from '@/components/ContextComponents/BarraLateral.vue';
import ContextHeader from "@/components/ContextComponents/contextHeader.vue";
import { useUserInfoStore } from '@/stores/userInfo.js';
import { useWalletStore } from '@/stores/walletStore.js';
import MyButton from '@/components/GeneralUse/myButton.vue';

const userInfoStore = useUserInfoStore();
const alias = userInfoStore.getAlias;

const walletStore = useWalletStore();

const amount = ref(null);
const dialog = ref(false);
const dialogMessage = ref('');
const paylink = ref('');
const linkTitle = ref('');

const handleButtonClick = () => {
    walletStore.addMoney(200, "Transferencia");
};

const logPaymentLink = () => {
    const paylinkValue = `http://ballon//${linkTitle.value}/${alias}/${amount.value}`;
    paylink.value = paylinkValue;

    walletStore.addMoney(parseInt(amount.value), "Link de Pago");
    navigator.clipboard.writeText(paylinkValue).then(() => {
        dialogMessage.value = 'El link de pago se a copiado al portapapeles';
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
    handleButtonClick();
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
            <v-card-text class="text-subtitle-1">Comparte tus datos para recibir dinero de cuentas
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
        </v-card>
    </v-row>
    <v-row justify="center" class="ma-15">
        <v-card class="rounded-xl" color="white" style="width:450px;">
            <v-card-title class="text-h5">Generar link de pago</v-card-title>
            <v-card-subtitle class="text-subtitle-1">Ingresa el monto y genera un link de pago para compartir</v-card-subtitle>
            <v-row justify="center" class="mt-2">
                <v-col cols="10">
                    <v-text-field
                        v-model="linkTitle"
                        label="Ingresa el Título del Link"
                        type="text"
                        class="mb-2"
                    ></v-text-field>
                </v-col>
            </v-row>
            <v-card class="bg-deep-purple-lighten-4 rounded-xl text-black ma-2 pa-4">
                <v-row>
                    <v-col cols="12">
                        <v-text-field
                            v-model="amount"
                            label="Ingresa el Monto"
                            type="number"
                            outlined
                            dense
                            prepend-inner-icon="mdi-currency-usd"
                            class="mb-2"
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <MyButton @click="logPaymentLink" class="btn">
                            Generar Link
                        </MyButton>
                    </v-col>
                </v-row>
            </v-card>
        </v-card>
    </v-row>
    <v-dialog v-model="dialog" max-width="400">
        <v-card color="white">
            <v-card-title class="headline">Información</v-card-title>
            <v-card-text>{{ dialogMessage }}</v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" text @click="dialog = false">Cerrar</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<style scoped>
.btn {
    width: 100%;
}
</style>
