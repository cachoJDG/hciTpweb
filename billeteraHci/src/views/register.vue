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
import { useLoginStore } from '@/stores/login.js';

const loginStore = useLoginStore();

const handleRegister = (formData) => {
    loginStore.register(formData.name, formData.email, formData.password);


    router.push({ name: 'Inicio' }).then(() => {
        location.reload();
    });

};
</script>

<style scoped>
.disclaimer a {
    color: purple;
    cursor: pointer;
    text-decoration: underline;
}
</style>
