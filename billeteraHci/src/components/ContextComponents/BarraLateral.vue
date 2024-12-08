<template>
  <v-navigation-drawer app>
    <v-list class="pt-0 pb-0" style="display: flex; flex-direction: column; height: 100%;">
      <RouterLink :to="{ name: 'myProfile' }" class="profile-link">
        <v-list-item class="profile-container">
            <v-list-item-title class="profile-title">Hola, {{ userName }}</v-list-item-title>
            <span>
                <p class="profile-text">Mi Perfil
                <v-icon>mdi-chevron-right</v-icon>
                </p>
            </span>
        </v-list-item>
      </RouterLink>

      <v-divider></v-divider>

      <v-list-item
        v-for="(item, index) in menuItems"
        :key="index"
        :class="{'menu-item--active': $route.name === item.route}"
        @click="navigateTo(item.route)"
        @mouseover="hoverItem = index"
        @mouseout="hoverItem = null"
        class="menu-item"
      >
          <v-list-item-title>
            <v-icon left class="menu-icon">{{ item.icon }}</v-icon>
            {{ item.title }}
          </v-list-item-title>
      </v-list-item>

      <v-divider></v-divider>

      <v-list-item @click="cerrarSesion" class="mt-auto">
          <v-list-item-title>
            <v-icon left class="menu-icon">mdi-logout</v-icon>
            Cerrar Sesión
          </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import router from '@/router/index';
import { RouterLink } from 'vue-router';
import { ref, defineProps } from 'vue';
import { useLoginStore } from '@/stores/login';
import { useUserInfoStore } from '@/stores/userInfo';

const { userName } = useUserInfoStore();

const menuItems = ref([
  { title: 'Inicio', icon: 'mdi-home', route: 'Inicio' },
  { title: 'Tu CVU', icon: 'mdi-application', route: 'CVU' },
  { title: 'Transferir', icon: 'mdi-transfer', route: 'Transferir' },
  { title: 'Tarjetas', icon: 'mdi-credit-card-outline', route: 'Tarjetas' },
  { title: 'Inversiones', icon: 'mdi-finance', route: 'Inversiones' },
  { title: 'Movimientos', icon: 'mdi-magnify', route: 'Movimientos' },
]);

const hoverItem = ref(null);

const navigateTo = (route) => {
  router.push({ name: route });
};

const cerrarSesion = () => {
  if (confirm('¿Estás seguro de que deseas cerrar sesión?')) {
    useLoginStore().logout();
    router.push({ name: 'Login' });
  }
};
</script>

<style scoped>
.v-navigation-drawer {
  background-color: #b39ddb; /* Color más suave */
  border-color: #7e57c2;
}
.v-list-item:hover {
  background-color: #a493c7; /* Color ligeramente más oscuro */
}

.profile-link {
  text-decoration: none;
  color: inherit;
}

.profile-link:hover .profile-item {
  background-color: #7e57c2; /* Color rosa más fuerte */
}

.profile-item {
  display: flex;
  align-items: center;
}

.profile-title {
  font-size: 28px; /* Tamaño de fuente */
  font-weight: bold; /* Texto en negrita */
  color: #ffffff; /* Color del texto */
}

.profile-container {
  display: flex; /* Flexbox para que ambos textos queden alineados */
  align-items: center; /* Alineación vertical centrada */
  justify-content: space-between; /* Espacio entre elementos */
  height: 80px; /* Asegura que la altura sea la misma */
  background-color: #7e57c2; /* Color de fondo similar */
  padding: 10px; /* Espaciado interno */
}

.menu-item {
  padding: 20px; /* Aumenta el padding para hacer los botones más grandes */
  padding-left: 0px;
  font-size: 18px; /* Tamaño de fuente */
  transition: background-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease; /* Transición suave */
  border-left: 4px solid transparent; /* Indicador de selección */
}

.menu-item:hover {
  background-color: #a493c7; /* Color de fondo más oscuro en hover */
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2); /* Sombra más pronunciada */
  border-left: 4px solid #7e57c2; /* Indicador en el borde izquierdo */
  transform: translateX(5px); /* Leve desplazamiento a la derecha */
}

.menu-item--active {
  background-color: #7e57c2; /* Color de fondo cuando está seleccionado */
  border-left: 4px solid #4a148c; /* Indicador en el borde izquierdo más fuerte */
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.3); /* Sombra más fuerte */
  transform: translateX(5px); /* Mantén el desplazamiento */
}

.menu-icon {
  margin-right: 10px; /* Ajusta el margen derecho según sea necesario */
  transition: color 0.3s ease; /* Transición suave para el color */
}

.v-list-item:last-child:hover {
  background-color: #7e57c2;
  color: #ffffff;
}

.profile-text {
  transition: text-decoration 0.3s ease;
}

.profile-link:hover .profile-text {
  text-decoration: underline;
}
</style>
