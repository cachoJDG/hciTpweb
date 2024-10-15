<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  elementName: {
    type: String,
    required: true
  },
  elementIcon: {
    type: String,
    required: true
  },
  selectedBool: {
    type: Boolean,
    required: true
  }
});

const isSelected = ref(props.selectedBool);

const buttonClass = computed(() => {
  return {
    card: true,
    selected: isSelected.value,
    notSelected: !isSelected.value
  };
});

</script>

<template>
  <v-btn :class="buttonClass" :prepend-icon="elementIcon">
    <p>{{ elementName }}</p>
  </v-btn>
</template>

<style scoped>
.card {
  display: flex;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-left: 30px;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
  border-radius: 0;
  background-color: #C89ECE;
  box-shadow: none;
}

.selected {
  background-color: #9606aa ;
}

.notSelected {
  background-color: transparent;
}

.v-btn.v-btn--density-default {
    height: 10%; 
    box-shadow: none; 
}

.v-btn:hover {
    background-color: #9606aa;
}

</style>
