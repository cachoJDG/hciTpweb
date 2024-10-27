<template>
    <v-list-item>
        <v-card class="bg-deep-purple-lighten-3 text-black">
            <div>
                <v-row justify="space-evenly">
                    <v-col cols="2">
                        <v-card-item class="text-h6 font-weight-bold pb-0 ma-0">{{ tType }}</v-card-item>
                    </v-col>
                    <v-col cols="2">
                        <v-card-item class="text-h6 text-red-darken-1 font-weight-bold pb-0 ma-0">-$ {{ monto
                            }}</v-card-item>
                    </v-col>
                </v-row>
            </div>
            <div>
                <v-row justify="space-evenly">
                    <v-col cols="2">
                        <v-card-item class="pt-0 ma-0">{{ persona }}</v-card-item>
                    </v-col>
                    <v-col cols="2">
                        <v-card-item class="pt-0 pl-4 ma-0">{{ fecha }}</v-card-item>
                    </v-col>
                </v-row>
            </div>
        </v-card>
    </v-list-item>
</template>

<script>
export default {
    props: {
        monto: {
            type: Number,
        },
        persona: {
            type: String,
        },
        fecha: {
            type: String,
        },
        tType: {
            type: String,
        },

    }
}
</script>