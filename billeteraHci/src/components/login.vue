<template>
    <div class="login-container">
      <div class="form-wrapper">
        <h1>Iniciar Sesión</h1>
        <form @submit.prevent="submitForm">
          <div class="input-field">
            <label for="email">Correo</label>
            <input
              type="email"
              id="email"
              v-model="email"
              :class="{ error: emailError }"
              placeholder="Ingresa tu correo"
            />
            <span v-if="emailError" class="error-message">{{ emailError }}</span>
          </div>
  
          <div class="input-field">
            <label for="password">Contraseña</label>
            <div class="password-wrapper">
              <input
                :type="showPassword ? 'text' : 'password'"
                id="password"
                v-model="password"
                :class="{ error: passwordError }"
                placeholder="Ingresa tu contraseña"
              />
              <button type="button" @click="togglePassword" class="show-password">
                {{ showPassword ? 'Mostrar' : 'Ocultar' }}
              </button>
            </div>
            <span v-if="passwordError" class="error-message">{{ passwordError }}</span>
          </div>
  
          <button type="submit" class="submit-button">Iniciar Sesión</button>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const email = ref('');
  const password = ref('');
  const showPassword = ref(false);
  const emailError = ref('');
  const passwordError = ref('');
  
  const togglePassword = () => {
    showPassword.value = !showPassword.value;
  };
  
  const validateEmail = () => {
    if (!email.value) {
      return 'Email is required';
    }
    return '';
  };
  
  const validatePassword = () => {
    const hasUppercase = /[A-Z]/.test(password.value);
    const hasNumber = /\d/.test(password.value);
    if (!password.value) {
      return 'Password is required';
    } else if (password.value.length < 9) {
      return 'Password must be at least 9 characters';
    } else if (!hasUppercase) {
      return 'Password must contain at least one capital letter';
    } else if (!hasNumber) {
      return 'Password must contain at least one number';
    }
    return '';
  };
  
  const submitForm = () => {
    emailError.value = validateEmail();
    passwordError.value = validatePassword();
  
    if (!emailError.value && !passwordError.value) {
      alert('Login successful!');
      // Add login logic here
    }
  };
  </script>
  
  <style scoped>
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(to bottom, purple, grey);
  }
  
  .form-wrapper {
    background: rgba(255, 255, 255, 0.9);
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
    text-align: center;
  }
  
  h1 {
    margin-bottom: 1rem;
    font-size: 2rem;
    color: #333;
  }
  
  .input-field {
    margin-bottom: 1.5rem;
  }
  
  .password-wrapper {
    position: relative;
  }
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: bold;
    color: #333;
  }
  
  input {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
    color: black;
  }
  
  input.error {
    border-color: red;
  }
  
  .error-message {
    color: red;
    font-size: 0.875rem;
    margin-top: 0.25rem;
  }
  
  .show-password {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: #333;
    cursor: pointer;
    font-size: 0.875rem;
  }
  
  .submit-button {
    padding: 0.75rem;
    width: 100%;
    border: none;
    background-color: purple;
    color: white;
    font-size: 1rem;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .submit-button:hover {
    background-color: #6a0dad;
  }
  </style>
  