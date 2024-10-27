<template>
    <LogRegForm @submit="handleLogin">
        <template #disclaimer>
            ¿No tienes cuenta? <a @click="redirectToRegister">Regístrate</a>
        </template>
        <template #recover-password>
            <a @click="dialog=true">¿Olvidaste tu contraseña?</a>
            <v-dialog v-model="dialog" max-width="415px" transition="dialog-bottom-transition">
                <v-card color="white">
                    <v-card-title class="text-center">Recuperar contraseña</v-card-title>
                    <v-card-text class="custom">
                        <p>Ingresa tu correo para restablecer tu contraseña</p>
                        <v-text-field
                            v-model="recoveryEmail"
                            label="Correo electrónico"
                            outlined
                            prepend-inner-icon="mdi-email"
                            class="mt-4"
                        ></v-text-field>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn color="error" @click="dialog=false">Cancelar</v-btn>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" @click="resetPassword">Enviar</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </template>
    </LogRegForm>
</template>

<script setup>
import LogRegForm from '@/components/logRegForm.vue';
import { useRouter } from 'vue-router';
import { useLoginStore } from '@/stores/login';
import { ref } from 'vue';

const router = useRouter();
const dialog = ref(false);
const recoveryEmail = ref('');
const loginStore = useLoginStore();

const redirectToRegister = () => {
    router.push({ name: 'Register' });
};

const handleLogin = (formData) => {
    if (loginStore.login(formData.email, formData.password)) {
        router.push({ name: 'Inicio' }).then(() => {
            location.reload();
        });
    } else {
        alert('Usuario o contraseña incorrectos');
    }
};

const resetPassword = () => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.email === recoveryEmail.value) {
        storedUser.password = '123456';
        localStorage.setItem('user', JSON.stringify(storedUser));
        alert('Tu nueva contraseña es 123456. Por favor, cámbiala después de iniciar sesión.');
        dialog.value = false;
    } else {
        alert('Correo electrónico no encontrado.');
    }
};

</script>

<style scoped>
.disclaimer a {
    color: purple;
    cursor: pointer;
    text-decoration: underline;
}
.custom{
    padding-bottom: 0 !important;
    padding-top: 0 !important;
}
</style>
