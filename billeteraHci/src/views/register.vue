<template>
    <LogRegForm :isRegister="true" @submit="handleRegister" >
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
const handleRegister = (formData) => {
    console.log('Nombre:', formData.name);
    console.log('Correo:', formData.email);
    console.log('Contraseña:', formData.password);
};
</script>

<style scoped>
.disclaimer a {
    color: purple;
    cursor: pointer;
    text-decoration: underline;
}
</style>
