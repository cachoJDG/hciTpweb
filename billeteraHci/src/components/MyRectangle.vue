<template>
  <v-container>
    <v-card class="white--text pa-4" color="white" outlined>
      <v-card-title class="black--text">{{ title }}</v-card-title>
      <v-card-text>
        <slot></slot>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.v-card {
  border-radius: 8px;
}
</style>
