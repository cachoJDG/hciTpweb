<script setup>
import MyRectangle from '@/components/GeneralUse/MyRectangle.vue';
</script>

<template>
    <ContextHeader title="Inversiones" />
    <div class="page">
        <BarraLateral />
        <div class="inversion">
            <MyRectangle title="Dinero invertido total">
                <v-card-text class="text-h5 font-weight-medium">$ 2000</v-card-text>
                <v-card-text class="pb-0 pl-0">Rendimiento anual estimado</v-card-text>
            </MyRectangle>
            <MyRectangle title="El 27 de Octubre veras tus primeros rendimientos"/>
            <VBtn color="white" class="text-purple-lighten-2 font-weight-bold">Dejar de invertir</VBtn>
        </div>
    </div>



</template>

<style scoped>
.page {
    padding-left: 20px;
    justify-content: center;
}
.inversion {
    justify-content: center;
}
</style>