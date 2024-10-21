<template>
  <v-navigation-drawer app>
    <v-list class="pt-0 pb-0" style="display: flex; flex-direction: column; height: 100%;">
      <RouterLink :to="{ name: 'myProfile' }" class="profile-link">
        <v-list-item class="profile-container">
          <v-list-item-avatar>
            <!-- <v-img src="path/to/your/profile-pic.jpg" /> -->
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="profile-title">Hola, {{ userName }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </RouterLink>

      <v-divider></v-divider>

      <v-list-item v-for="(item, index) in menuItems" :key="index" @click="navigateTo(item.route)" @mouseover="hoverItem = index" @mouseout="hoverItem = null">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list-item @click="cerrarSesion" class="mt-auto">
        <v-list-item-icon>
          <v-icon>mdi-logout</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Cerrar Sesión</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import router from '@/router/index2';
import { RouterLink } from 'vue-router';
import { ref } from 'vue';
import { useLoginStore } from '@/stores/login';

const userName = ref('Tu Nombre');
const menuItems = ref([
  { title: 'Inicio', icon: 'mdi-home', route: 'Inicio' },
  { title: 'Tu CVU', icon: 'mdi-credit-card', route: 'myProfile' },
  { title: 'Transferir', icon: 'mdi-transfer', route: 'Transferir' },
]);

const hoverItem = ref(null);

const navigateTo = (route) => {
  router.push({ name: route });
};

const cerrarSesion = () => {
  if(confirm('¿Estás seguro de que deseas cerrar sesión?')) {
    useLoginStore().logout();
    router.push({ name: 'Login' });
  }
};
</script>

<style scoped>
.v-navigation-drawer {
  background-color: #7e57c2; /* Color rosa */
}
.v-list-item:hover {
  background-color: #5a5f9e; /* Color ligeramente más oscuro */
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
</style>