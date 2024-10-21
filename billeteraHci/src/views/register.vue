<template>
    <LogRegForm title="Registrarse" buttonText="Registrarse">
        <template #form-fields>
            <v-text-field
                type="text"
                label="Nombre"
                :rules="[v => !!v || 'Nombre es requerido']"
                outlined
                class="mb-4"
                color="purple"
                prepend-inner-icon="mdi-account"
            ></v-text-field>
        </template>
        <template #disclaimer>
            ¿Ya tienes cuenta? <a @click="redirectToLogin">Inicia sesión</a>
        </template>
    </LogRegForm>
</template>

<script setup>
import LogRegForm from '@/components/logRegForm.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const redirectToLogin = () => {
    router.push({name: 'Login'});
};
</script>

<style scoped>
.disclaimer a {
    color: purple;
    cursor: pointer;
    text-decoration: underline;
}
</style>
