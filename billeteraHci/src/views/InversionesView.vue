<script setup>
import MyRectangle from '@/components/GeneralUse/MyRectangle.vue';
import MyButton from '@/components/GeneralUse/myButton.vue';

</script>

<template>
    <ContextHeader title="Inversiones" />
    <BarraLateral />
    <v-row align="center" justify="space-evenly">
        <v-col cols="auto">
            <MyRectangle title="Dinero invertido total">
                <v-card-text class="text-h5 font-weight-medium">$ 2000</v-card-text>
                <v-row>
                    <v-col>
                        <MyButton>Invertir</MyButton>
                    </v-col>
                    <v-col class="text-end">
                        <MyButton @click="showPopup = true">Retirar dinero</MyButton>
                    </v-col>
                </v-row>
            </MyRectangle>
            <MyRectangle title="Rendimiento">
                <v-row>
                    <v-col cols="auto">
                        <v-card-text>Rendimiento total: %50</v-card-text>
                    </v-col>
                    <v-col class="text-end">
                        <v-card-text>Ultimo movimiento: %50</v-card-text>
                    </v-col>
                </v-row>
                 <v-card-text class="text-center text-h2">Dinero actual: $2000</v-card-text>
            </MyRectangle>
        </v-col>
    </v-row>
</template>