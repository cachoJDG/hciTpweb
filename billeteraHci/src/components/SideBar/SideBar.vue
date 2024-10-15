<script setup>
import SideBarElement from "@/components/SideBar/SideBarElement.vue";
import {VIcon} from "vuetify/components";

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
    <SideBarElement element-icon="mdi-antenna" element-name="."/>
<!--    <v-icon icon="mdi-antenna"/>-->
  </v-container>
</template>

<style scoped>

.container {

  height: 100vh; /* vh = viewPort height */
  width: 20vw;
  display: flex;
  background-color: #C89ECE;
  float: left;
}

</style>
