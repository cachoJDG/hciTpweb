<template>
    <v-btn >
        <slot></slot>
    </v-btn>
</template>

<script setup>


</script>

<style scoped>
/* Estilos base del botón */
.v-btn {
    background-color: #111c80; /* Color primario, puedes cambiarlo según tu tema */
    color: white; /* Contraste de color para legibilidad */
    font-weight: bold; /* Negrita para que el texto sea más legible */
    border-radius: 8px; /* Bordes redondeados para un aspecto moderno */
    text-transform: uppercase; /* Texto en mayúsculas para consistencia */
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2); /* Sombra ligera para dar profundidad */
    transition: all 0.3s ease; /* Transición suave para hover y otros estados */
}

/* Hover */
.v-btn:hover {
    background-color: #0d1459; /* Un tono más oscuro del color base */
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.3); /* Incremento de sombra al hacer hover */
    transform: translateY(-2px); /* Efecto de elevación al pasar el mouse */
}
</style>
