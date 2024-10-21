import { createRouter, createWebHistory } from 'vue-router';
import login from '../views/login.vue';
import register from '../views/register.vue';
import myProfile from '../views/myProfile.vue';
import cobros from '../views/Movimientos/Cobro.vue'
import transferencia from '../views/Movimientos/Transferencia.vue'
import inicio from '../views/Inicio.vue'
import transferir from '../views/Transferir.vue'

const routes = [
    {
        path: '/',
        name: 'Login',
        component: login
    },
    {
        path: '/myProfile',
        name: 'myProfile',
        component: myProfile
    },
    {
        path: '/register',
        name: 'Register',
        component: register
    },
    {
        path:'/movimientos/cobro',
        name: 'Cobros',
        component: cobros
    },
    {
        path: '/movimientos/transferencia',
        name: 'Transferencia',
        component: transferencia
    },
    {
        path: '/inicio',
        name: 'Inicio',
        component: inicio

    },
    {
        path: '/transferir',
        name: 'Transferir',
        component: transferir
    }

];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;