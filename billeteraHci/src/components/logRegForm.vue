<template>
    <div class="background">
        <v-container class="scale" max-width="700">
            <v-card class="pa-4" color="white">
                <v-card-title class="title">{{ isRegister? "Registrarse" : "Iniciar Sesión" }}</v-card-title>
                <v-form @submit.prevent="handleSubmit">
                    <v-text-field
                        v-if="isRegister"
                        v-model="name"
                        type="text"
                        label="Nombre"
                        :rules="[v => !!v || 'Nombre es requerido']"
                        outlined
                        class="mb-4"
                        color="purple"
                        prepend-inner-icon="mdi-account"
                    ></v-text-field>
                    <v-text-field
                        v-model="email"
                        label="Correo Electrónico"
                        :rules="[v => !!v || 'Correo es requerido', v => /.+@.+/.test(v) || 'Debe contener @']"
                        outlined
                        color="purple"
                        class="mb-4"
                        prepend-inner-icon="mdi-email"
                    ></v-text-field>
                    <v-text-field
                        v-model="password"
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
                    >
                       {{ isRegister? "Registrarse" : "Iniciar Sesión" }}
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
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const name = ref('');
const showPassword = ref(false);

const props = defineProps({
  isRegister: {
    type: Boolean,
    default: false
  }
});


const router = useRouter();
const emit = defineEmits(['submit']);

const togglePasswordVisibility = () => {
    showPassword.value = !showPassword.value;
};

const handleSubmit = () => {
    const formData = {
        email: email.value,
        password: password.value,
        ...(props.isRegister ? { name: name.value } : {})
    };
    emit('submit', formData);
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
