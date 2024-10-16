<template>
    <LogRegForm title="Iniciar Sesión" buttonText="Iniciar Sesión">
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
                            label="Correo electrónico"
                            outlined
                            prepend-inner-icon="mdi-email"
                            class="mt-4"
                        ></v-text-field>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn text @click="dialog=false">Cancelar</v-btn>
                        <v-btn color="primary" @click="dialog=false">Enviar</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </template>
    </LogRegForm>
</template>

<script setup>
import LogRegForm from '@/components/logRegForm.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const dialog = ref(false);

const redirectToRegister = () => {
    router.push('/register');
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
