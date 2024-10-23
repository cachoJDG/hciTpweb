import { createRouter, createWebHistory } from 'vue-router';
import login from '../views/login.vue';
import register from '../views/register.vue';
import myProfile from '../views/myProfile.vue';
import cobros from '../views/Movimientos/Cobro.vue'
import transferencia from '../views/Movimientos/Transferencia.vue'
import inicio from '../views/Inicio.vue'
import transferir from '../views/Transferir.vue'
import cards from '../views/cards.vue'

const routes = [
    {
        path: '/',
        name: 'Login',
        component: login
    },
    {
        path: '/miPerfil',
        name: 'myProfile',
        component: () => import('../views/myProfile.vue')
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('../views/register.vue')
    },
    {
        path:'/movimientos/cobro',
        name: 'Cobros',
        component: () => import('../views/Movimientos/Cobro.vue')
    },
    {
        path: '/movimientos/transferencia',
        name: 'Transferencia',
        component: () => import('../views/Movimientos/Transferencia.vue')
    },
    {
        path: '/inicio',
        name: 'Inicio',
        component: () => import('../views/Inicio.vue')

    },
    {
        path: '/transferir',
        name: 'Transferir',

        component: () => import('../views/Transferir.vue')
    },
    {
        path: '/tarjetas',
        name: 'Tarjetas',
        component: () => import('../views/cards.vue')
    },
    {   path: '/tuCVU',
        name: 'CVU',
        component: () => import('../views/TuCvu.vue')
    },
    {   path: '/inversiones',
        name: 'Inversiones',
        component: () => import('../views/InversionesView.vue')
    },

];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
