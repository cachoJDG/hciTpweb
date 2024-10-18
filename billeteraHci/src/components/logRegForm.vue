<template>
    <div class="background">
        <v-container class="scale" max-width="700">
            <v-card class="pa-4" color="white">
                <v-card-title class="title">{{ title }}</v-card-title>
                <v-form @submit.prevent="handleSubmit">
                    <slot name="form-fields"></slot> <!-- Aquí van los campos adicionales -->
                    <!-- Campo de Email -->
                    <v-text-field
                        label="Correo Electrónico"
                        :rules="[v => !!v || 'Correo es requerido', v => /.+@.+/.test(v) || 'Debe contener @']"
                        outlined
                        color="purple"
                        class="mb-4"
                        prepend-inner-icon="mdi-email"
                    ></v-text-field>
                    <!-- Campo de Contraseña -->
                    <v-text-field
                        :type="showPassword ? 'text' : 'password'"
                        label="Contraseña"
                        :rules="[v => !!v || 'Contraseña es requerida', v => v.length >= 9 || 'Debe tener al menos 9 caracteres']"
                        outlined
                        color="purple"
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
                        <template v-if="!loading">{{ buttonText }}</template>
                    </v-btn>
                </v-form>
                <div class="disclaimer">
                    <span><slot name="disclaimer"></slot></span>
                </div>
                <div class="disclaimer">
                    <span><slot name="recover-password"></slot></span>
                </div>
            </v-card>
        </v-container>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  buttonText: {
    type: String,
    required: true
  }
}); 

const showPassword = ref(false);
const loading = ref(false);

const togglePasswordVisibility = () => {
    showPassword.value = !showPassword.value;
};

const handleSubmit = () => {
    loading.value = true;
    setTimeout(() => {
        loading.value = false;
    }, 2000);
};
</script>

<style scoped>
.background {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.scale{
    transform: scale(1.6);
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
    font-size: 2rem;
}

.disclaimer {
    text-align: center;
    margin-top: 16px;
}
</style>
