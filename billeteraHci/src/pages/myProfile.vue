<template>    

    <BarraLateral active-section="a" user-name="a"/>
    <ContextHeader title="Mi perfil"></ContextHeader>

    <v-container class="background scale  ">
      <v-card class="profile-card" outlined>
        <v-card-title class="title">
        </v-card-title>
        <v-card-text>
          <v-row class="justify-center">
            <!-- Imagen de perfil -->
            <v-avatar size="100" class="mb-4">
              <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="Avatar">
            </v-avatar>
          </v-row>
  
          <v-form ref="profileForm">
            <v-row>
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="profile.name"
                  label="Nombre"
                  :disabled="!isEditing"
                ></v-text-field>
              </v-col>
  
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="profile.email"
                  label="Email"
                  type="email"
                  :disabled="!isEditing"
                ></v-text-field>
              </v-col>
  
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="profile.birthdate"
                  label="Fecha de Nacimiento"
                  type="date"
                  :disabled="!isEditing"
                ></v-text-field>
              </v-col>
  
              <v-col cols="12" md="6">
                <v-text-field
                  v-model="profile.phone"
                  label="Teléfono"
                  type="tel"
                  :disabled="!isEditing"
                ></v-text-field>
              </v-col>
            </v-row>
  
            <v-row class="mt-4 justify-center">
              <v-col cols="12" md="auto">
                <!-- Botones centrados -->
                <v-btn
                  v-if="!isEditing"
                  color="primary"
                  large
                  @click="editProfile"
                >
                  Editar
                </v-btn>
  
                <v-btn v-if="isEditing" color="success" large @click="saveProfile">
                  Guardar
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
      </v-card>
    </v-container>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import BarraLateral from '@/components/BarraLateral.vue';
  import ContextHeader from '@/components/contextHeader.vue';
  
  const profile = ref({
    name: 'Juan Pérez',
    email: 'juan.perez@example.com',
    birthdate: '1990-01-01',
    phone: '+123456789',
  });
  
  const isEditing = ref(false);
  
  const editProfile = () => {
    isEditing.value = true;
  };
  
  const saveProfile = () => {
    // Aquí podrías realizar una acción para guardar los cambios, como hacer una petición a un servidor.
    isEditing.value = false;
  };
  </script>
  
  <style scoped>
  .background {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }
  
  .profile-card {
    width: 100%;
    max-width: 900px;
    padding: 20px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }
  
  .title {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
  }
  
  .v-avatar {
    display: block;
  }
  
  .mt-4 {
    margin-top: 20px;
  }
  </style>
  