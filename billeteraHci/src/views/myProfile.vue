<template>
    <BarraLateral/>
    <ContextHeader title="Mi Perfil" />
    <v-container class="mt-4 pl-4">
        <MyRectangle title="Datos Personales" width="100%">
            <v-btn
                v-if="!editando"
                @click="activarEdicion"
                class="edit-btn"
                color="secondary"
                icon="mdi-pencil"
            >
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
                <v-btn @click="guardarPerfil" color="secondary">Guardar</v-btn>
                <v-btn @click="cancelarEdicion" color="error">Cancelar</v-btn>
            </v-card-actions>
        </MyRectangle>

        <MyRectangle title="Preferencias" width="100%">
            <v-card-text>
                <v-row>
                    <v-col cols="12" sm="6">
                        <v-switch label="Notificaciones" color="secondary"></v-switch>
                    </v-col>
                    <v-col cols="12" sm="6">
                        <v-select :items="['Español', 'Inglés']" label="Idioma"></v-select>
                    </v-col>
                </v-row>
            </v-card-text>
            <v-card-text>
                <v-btn color="secondary" class="mb-4" @click="mostrarCamposContrasenia = !mostrarCamposContrasenia" text>
                    ¿Quieres cambiar tu contraseña?
                </v-btn>
                
                <v-form v-if="mostrarCamposContrasenia">
                    <v-text-field
                        v-model="oldPassword"
                        label="Contraseña actual"
                        type="password"
                        outlined
                        prepend-icon="mdi-lock"
                    ></v-text-field>
                    <v-text-field
                        v-model="newPassword"
                        label="Nueva contraseña"
                        type="password"
                        outlined
                        prepend-icon="mdi-lock-plus"
                    ></v-text-field>
                    <v-btn color="green" @click="cambiarContrasenia" >Cambiar contraseña</v-btn>
                </v-form>
            </v-card-text>

        </MyRectangle>

        <MyRectangle title="Seguridad" width="100%">
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
                            <v-btn color="secondary" @click="activarAutenticacion">Activar</v-btn>
                        </v-list-item-action>
                    </v-list-item>
                </v-list>
            </v-card-text>
        </MyRectangle>
        <MyRectangle title="Soporte" width="100%">
            <v-card-text>
                <v-btn color="secondary" @click="irASoporte">Visitar el Centro de Ayuda</v-btn>
            </v-card-text>
        </MyRectangle>
    </v-container>
</template>

<script setup>
import BarraLateral from '@/components/ContextComponents/BarraLateral.vue';
import ContextHeader from '@/components/ContextComponents/contextHeader.vue';
import MyRectangle from '@/components/GeneralUse/MyRectangle.vue';
import { reactive, ref, computed } from 'vue';
import { useUserInfoStore } from '@/stores/userInfo.js';
import { useLoginStore } from '@/stores/login.js'


const userInfoStore = useUserInfoStore();
const loginStore = useLoginStore();
const userName = computed(() => userInfoStore.userName);
const userEmail = computed(() => userInfoStore.userEmail);
const mostrarCamposContrasenia = ref(false);
const oldPassword = ref('');
const newPassword = ref('');

// Datos iniciales del perfil
const formData = reactive({
    nombre: userName.value,
    apellido: '---',
    telefono: '---',
    email: userEmail.value,
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
    const userInfo = {
        name: formData.nombre,
        lastName: formData.apellido,
        phone: formData.telefono,
        email: formData.email
      };
    userInfoStore.updateUserInfo(userInfo);
    editando.value = false;
    Object.assign(originalData, formData);
};

// Función para cancelar la edición
const cancelarEdicion = () => {
    Object.assign(formData, originalData);
    editando.value = false;
};

// Función para cambiar la contraseña
const cambiarContrasenia = () => {
    console.log("Contraseña antigua:", oldPassword.value);
    console.log("Nueva contraseña:", newPassword.value);
    if (loginStore.changePassword(oldPassword.value, newPassword.value)) {
        alert("Contraseña cambiada correctamente");
    } else {
        alert("Error al cambiar la contraseña. Verifique su contraseña actual.");
    }

    // Aquí iría la lógica para cambiar la contraseña en el backend
};
</script>

<style scoped>
/* Estilo para la tarjeta */
.v-card .v-card-text{
    padding-bottom: 0px;
}

.v-card {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px; /* Bordes suaves */
    position: relative; /* Para el posicionamiento absoluto del botón de edición */
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
