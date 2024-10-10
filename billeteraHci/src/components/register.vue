<template>
    <div class="background">
        <v-container max-width="700">
            <v-card class="pa-4" color="white">
                <v-card-title class="title">Registrarse</v-card-title>
                <v-form @submit.prevent="handleSubmit">
                    <v-text-field
                        type="text"
                        label="Nombre"
                        :rules="[v => !!v || 'Nombre es requerido']"
                        outlined
                        class="mb-4"
                        color="purple"
                        prepend-inner-icon="mdi-account"
                    ></v-text-field>
                    <v-text-field
                        type="email"
                        label="Correo"
                        :rules="[v => !!v || 'Correo es requerido']"
                        outlined
                        class="mb-4"
                        color="purple"
                        prepend-inner-icon="mdi-email"
                    ></v-text-field>
                    <v-text-field
                        :type="showPassword ? 'text' : 'password'"
                        label="Contraseña"
                        :rules="[v => !!v || 'Contraseña es requerida']"
                        outlined
                        class="mb-4"
                        prepend-inner-icon="mdi-lock"
                        :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                        @click:append-inner="togglePasswordVisibility"
                    ></v-text-field>
                    <v-btn 
                        type="submit" 
                        block
                        append-icon="mdi-arrow-right"
                        :loading="loading"
                        :disabled="loading"
                        :class="{ 'loading-btn': loading }"
                    >
                        <template v-if="!loading">Registrarse</template>
                    </v-btn>
                </v-form>
            </v-card>
        </v-container>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const showPassword = ref(false);
const loading = ref(false);

const togglePasswordVisibility = () => {
    showPassword.value = !showPassword.value;
};

const handleSubmit = () => {
    loading.value = true;
    // Simula una acción de carga
    setTimeout(() => {
        loading.value = false;
        // Aquí puedes agregar la lógica para manejar el registro
    }, 2000); // Simula una carga de 2 segundos
};
</script>

<style scoped>
.background {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(to bottom, purple, grey);
}

.v-card {
    border-radius: 8px;
}

.v-form {
    padding: 16px;
}

.v-btn {
    background-color: purple;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    padding: 12px 16px;
}

.loading-btn {
    background-color: purple !important;
    color: white !important;
}

.title {
    text-align: center;
    width: 100%;
    font-size: 2rem; /* Aumenta el tamaño de la fuente aquí */
}
</style>