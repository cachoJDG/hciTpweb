<template>
    <v-container class="fill-height gradient-background" fluid>
        <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="4">
                <v-card class="login-card">
                    <v-card-title class="headline text-black">Login</v-card-title>
                    <v-card-text>
                        <v-form ref="form" v-model="valid">
                            <v-text-field 
                                v-model="email"
                                label="Email"
                                required
                                class="text-black"
                                :rules="[v => !!v || 'Email is required']"
                            ></v-text-field>
                            <v-text-field
                                v-model="password"
                                label="Password"
                                type="password"
                                required
                                class="text-black"
                                :rules="[v => !!v || 'Password is required']"
                            ></v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" @click="login">Login</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');
const password = ref('');

const login = () => {
    // Handle login logic here
    console.log('Email:', email.value);
    console.log('Password:', password.value);
};
</script>

<style scoped>
.fill-height {
    height: 100vh;
}

.gradient-background {
    background: linear-gradient(to bottom, violet, grey);
}

.login-card {
    background-color: lightgrey;
}
</style>