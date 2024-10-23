<template>
    <BarraLateral/>
    <ContextHeader title="Mi Perfil" />
    <v-container class="mt-4 pl-4">
        <MyRectangle title="Datos Personales" width="100%">
            <v-btn
                v-if="!editando"
                @click="activarEdicion"
                class="edit-btn"
                color="primary"
                icon
            >
                <v-icon>mdi-pencil</v-icon> <!-- Icono de lápiz -->
            </v-btn>

            <v-card-text>
                <v-form ref="form">
                    <v-row>
                        <!-- Nombre -->
                        <v-col cols="6">
                            <v-text-field
                                v-model="formData.nombre"
                                label="Nombre"
                                :disabled="!editando"
                                outlined
                                prepend-icon="mdi-account"
                            />
                        </v-col>

                        <!-- Apellido -->
                        <v-col cols="6">
                            <v-text-field
                                v-model="formData.apellido"
                                label="Apellido"
                                :disabled="!editando"
                                outlined
                                prepend-icon="mdi-account"
                            />
                        </v-col>

                        <!-- Teléfono -->
                        <v-col cols="12" sm="6">
                            <v-text-field
                                v-model="formData.telefono"
                                label="Teléfono"
                                :disabled="!editando"
                                outlined
                                type="tel"
                                prepend-icon="mdi-phone"
                            />
                        </v-col>

                        <!-- Email -->
                        <v-col cols="12" sm="6">
                            <v-text-field
                                v-model="formData.email"
                                label="Email"
                                :disabled="!editando"
                                outlined
                                type="email"
                                prepend-icon="mdi-email"
                            />
                        </v-col>
                    </v-row>
                </v-form>
            </v-card-text>
            <v-card-actions v-if="editando">
                <v-btn @click="guardarPerfil" color="primary">Guardar</v-btn>
                <v-btn @click="cancelarEdicion" color="secondary">Cancelar</v-btn>
            </v-card-actions>
        </MyRectangle>

        <v-card class="mt-4" color="white">
            <v-card-title>Preferencias</v-card-title>
            <v-card-text>
                <v-row>
                    <v-col cols="12" sm="6">
                        <v-switch label="Notificaciones" color="purple"></v-switch>
                    </v-col>
                    <v-col cols="12" sm="6">
                        <v-select :items="['Español', 'Inglés']" label="Idioma"></v-select>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>

        <v-card class="mt-4" color="white">
            <v-card-title>Seguridad de la Cuenta</v-card-title>
            <v-card-text>
                <v-list>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title>Último inicio de sesión</v-list-item-title>
                            <v-list-item-subtitle>15 de octubre, 2024</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title>Autenticación en dos pasos</v-list-item-title>
                            <v-list-item-subtitle>Desactivado</v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-action class="pt-4">
                            <v-btn color="primary" @click="activarAutenticacion">Activar</v-btn>
                        </v-list-item-action>
                    </v-list-item>
                </v-list>
            </v-card-text>
        </v-card>

        <v-card class="mt-4" color="white">
            <v-card-title>Soporte y Ayuda</v-card-title>
            <v-card-text>
                <v-btn color="primary" @click="irASoporte">Visitar el Centro de Ayuda</v-btn>
            </v-card-text>
        </v-card>
    </v-container>
</template>

<script setup>
import BarraLateral from '@/components/BarraLateral.vue';
import ContextHeader from '@/components/contextHeader.vue';
import MyRectangle from '@/components/MyRectangle.vue';
import { reactive, ref } from 'vue';

// Datos iniciales del perfil
const formData = reactive({
    nombre: 'Juan',
    apellido: 'Pérez',
    telefono: '123456789',
    email: 'juan.perez@example.com',
});

// Estado del modo de edición
const editando = ref(false);

// Guardamos los valores originales para poder restaurarlos en caso de cancelar
const originalData = reactive({ ...formData });

// Referencia al formulario (para validar o reiniciar si fuera necesario)
const form = ref(null);

// Función para activar el modo de edición
const activarEdicion = () => {
    editando.value = true;
};

// Función para guardar los cambios del perfil
const guardarPerfil = () => {
    console.log("Perfil guardado:", formData);
    editando.value = false;
    Object.assign(originalData, formData);
};

// Función para cancelar la edición
const cancelarEdicion = () => {
    Object.assign(formData, originalData);
    editando.value = false;
};
</script>

<style scoped>
/* Estilo para la tarjeta */
.v-card {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px; /* Bordes suaves */
    position: relative; /* Para el posicionamiento absoluto del botón de edición */
    margin-bottom: 25px;
}

.edit-btn {
    position: absolute;
    top: 10px;
    right: 10px;
}

.v-list-item {
    cursor: pointer;
    color: black;
    background-color: transparent;
}
.v-list{
    background-color:transparent
}
.btn:hover {
  background-color: #5a5f9e; /* Color ligeramente más oscuro */
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15); /* Efecto de elevación */
}
</style>
