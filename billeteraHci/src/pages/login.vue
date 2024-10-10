<template>
    <LogRegForm title="Iniciar Sesión" buttonText="Iniciar Sesión">
        <template #disclaimer>
            ¿No tienes cuenta? <a @click="redirectToRegister">Regístrate</a>
        </template>
    </LogRegForm>
</template>

<script setup>
import LogRegForm from '@/components/logRegForm.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
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
</style>
