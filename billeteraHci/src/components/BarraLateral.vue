<template>
    <v-navigation-drawer app>

      <v-list style="display: flex; flex-direction: column; height: 100%;">
        <v-list-item class="no-hover">
          <v-list-item-avatar>
            <!-- <v-img src="path/to/your/profile-pic.jpg" /> -->
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>Hola, {{ userName }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item v-for="(item, index) in menuItems" :key="index" @click="navigateTo(item.route)" @mouseover="hoverItem = index" @mouseout="hoverItem = null" >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <!-- Cerrar Sesión al final -->
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
      import { ref } from 'vue';

      const userName = ref('Tu Nombre');
      const menuItems = ref([
        { title: 'Inicio', icon: 'mdi-home', route: '/inicio' },
        { title: 'Tu CVU', icon: 'mdi-credit-card', route: '/cvu' },
        { title: 'Transferir', icon: 'mdi-transfer', route: '/transferir' },
        { title: 'Movimientos', icon: 'mdi-history', route: '/movimientos' },
        { title: 'Invertir', icon: 'mdi-chart-line', route: '/invertir' },
      ]);
      const hoverItem = ref(null);

      const navigateTo = (route) => {
        this.$router.push(route);
      };

      const cerrarSesion = () => {
        // Aquí deberías implementar la lógica para cerrar la sesión
        console.log('Cerrar Sesión');
      };



  </script>

  <style scoped>
  .v-navigation-drawer {
    background-color: #e492e0; /* Color rosa */
  }
  .v-list-item:hover {
    background-color: #d57ea5; /* Color rosa más fuerte */
  }
  .no-hover {
    pointer-events: none;
  }
  </style>
