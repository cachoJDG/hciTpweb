<script setup>
import SideBarElement from "@/components/SideBar/SideBarElement.vue";

defineProps({
  userName: {
    type: String,
    required: true
  },
  activeSection: {
    type: String,
    required: true
  }
});

</script>

<template>
  <v-container class="container">
    <SideBarElement element-icon="mdi-account-arrow-down" element-name="uno" :selected-bool="true"/>
    <SideBarElement element-icon="mdi-account-arrow-down" element-name="dos" :selected-bool="false"/>
    <SideBarElement element-icon="mdi-account-arrow-down" element-name="tres" :selected-bool="false"/>
    <SideBarElement element-icon="mdi-account-arrow-down" element-name="cuatro" :selected-bool="false"/>
<!--    <v-icon icon="mdi-account-arrow-down"/>-->
  </v-container>
</template>

<style scoped>

.container {

  height: 100vh; /* vh = viewPort height */
  width: 20vw;
  padding: 10px 0;

  background-color: #C89ECE;
  float: left;
}

</style>
