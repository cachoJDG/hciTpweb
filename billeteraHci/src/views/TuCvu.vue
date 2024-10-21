<script setup>
import BarraLateral from '@/components/BarraLateral.vue';
import ContextHeader from "@/components/contextHeader.vue";

</script>

<template>


      <context-header title="Tu CVU" />
        <BarraLateral userName="Juan Gago" />
        <v-row justify="center" class="ma-15">
            <v-card class="rounded-xl" color="white" style="width:450px;">
                <v-card-title class="text-h5">Datos de Pago</v-card-title>
                <v-card-text class="text-subtitle-1">Comparte tu enlace de pago o alias para recibir dinero de cuentas
                    bancarias o digitales</v-card-text>
                <v-card class="bg-deep-purple-lighten-4 rounded-xl text-black ma-2">
                    <v-row justify="space-around" align="center">
                        <v-col cols="7">
                            <v-card-item class="font-weight-bold pb-0">Tu alias</v-card-item>
                            <v-card-item>JuanGago</v-card-item>
                        </v-col>
                        <v-col cols="2">
                            <v-btn color="deep-purple-lighten-2" rounded="xl">
                                <v-icon icon="mdi-account-edit-outline" color="black"></v-icon>
                            </v-btn>
                        </v-col>
                        <v-col>
                            <v-btn color="deep-purple-lighten-2" rounded="xl">
                                <v-icon icon="mdi-content-copy" color="black"></v-icon>
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-card>
                <v-card class="bg-deep-purple-lighten-4 rounded-xl text-black ma-2">
                    <v-row justify="space-around" align="center">
                        <v-col cols="9">
                            <v-card-item class="font-weight-bold pb-0">Tu enlace de pago</v-card-item>
                            <v-card-item>enalce.de.pago.juan.jago</v-card-item>
                        </v-col>
                        <v-col>
                            <v-btn color="deep-purple-lighten-2" rounded="xl">
                                <v-icon icon="mdi-content-copy" color="black"></v-icon>
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-card>
            </v-card>
        </v-row>

</template>
