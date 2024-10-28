import { createRouter, createWebHistory } from 'vue-router';
import inicio from '../views/Inicio.vue';
import login from '../views/login.vue';


const routes = [
    {
        path: '/inicio',
        name: 'Inicio',
        component: inicio

    },
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
    {   path: '/movimeintos',
    name: 'Movimientos',
    component: () => import('../views/movimientos.vue')
    },
    {

        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('../views/NotFound.vue')
    }

];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
