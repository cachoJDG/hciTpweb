import { createRouter, createWebHistory } from 'vue-router';
import inicio from '../views/Inicio.vue';


const routes = [
    {
        path: '/inicio',
        name: 'Inicio',
        component: inicio

    },
    {
        path: '/',
        name: 'Login',
        component: () => import('../views/login.vue')
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
    {
        // If no page found
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('../views/NotFound.vue')
    }

];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
