<template>
    <v-container class="not-found" fill-height>
        <v-row align="center" justify="center">
            <v-col class="text-center">
                <v-icon large color="error">mdi-alert-circle-outline</v-icon>
                <h1>Página no encontrada</h1>
                <p>Lo sentimos, la página que buscas no existe.</p>
                <v-btn color="primary" @click="goHome">Volver a Inicio</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()

const goHome = () => {
    router.push({ name: 'Inicio' })
}
</script>

<style scoped>
.not-found {
    text-align: center;
    margin-top: 50px;
}

.not-found h1 {
    font-size: 3em;
    margin-bottom: 20px;
    color: black;
}

.not-found p {
    font-size: 1.5em;
    margin-bottom: 20px;
    color: black;
}

.not-found .v-btn {
    font-size: 1.2em;
}
</style>