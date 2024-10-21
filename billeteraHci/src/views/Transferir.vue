<template>
    <ContextHeader title="Transferir" />
    <BarraLateral/>
    <v-app>
        <v-container class="ml-10 mt-1">
            <v-row justify="center" align="center" no-gutters>
                <v-card class="rounded-xl" color="white" width="1080px">
                    <v-card-title class="text-h5">Transferir por alias</v-card-title>
                    <v-card-text class="text-subtitle-1">A cuentas bancarias o digitales</v-card-text>

                    <v-card class="bg-deep-purple-lighten-4 rounded-xl text-black ma-8">
                        <v-row justify="space-around" align="center">
                            <v-col cols="7">
                                <v-card-item class="font-weight-medium text-subtitle-1">Ingresa el alias</v-card-item>
                                <v-text-field></v-text-field>
                            </v-col>
                            <v-col cols="2">
                                <v-btn color="deep-purple-lighten-2" rounded="xl" size="large">
                                    <v-icon icon="fa:fas mdi-arrow-right" color="black" size="large"></v-icon>
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
                    <v-card-title class="text-h5">Transferir por enlace de pago</v-card-title>
                    <v-card-text class="text-subtitle-1">A otras cuentas team chuan</v-card-text>

                    <v-card class="bg-deep-purple-lighten-4 rounded-xl text-black ma-8">
                        <v-row justify="space-around" align="center">
                            <v-col cols="7">
                                <v-card-item class="font-weight-medium text-subtitle-1">Ingresa el enlace de
                                    pago</v-card-item>
                                <v-text-field></v-text-field>
                            </v-col>
                            <v-col cols="2">
                                <v-btn color="deep-purple-lighten-2" rounded="xl" size="large">
                                    <v-icon icon="mdi-arrow-right" color="black" size="large"></v-icon>
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-card>
            </v-row>
        </v-container>
    </v-app>
</template>

<script setup>
import BarraLateral from '@/components/BarraLateral.vue';
import ContextHeader from "@/components/contextHeader.vue";

// const cardWidth = computeWidth();

// computeWidth(){
//     switch (this.$vuetify.breakpoint.name) {
//         case "xs":
//           return "250px";
//         case "sm":
//           return "350px";
//         case "md":
//           return "600px";
//         case "lg":
//           return "800px";
//         case "xl":
//           return "1080px";
// }
// }
</script>
