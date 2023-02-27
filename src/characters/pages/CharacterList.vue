<script setup lang="ts">
import CardList from "@/characters/components/CardList.vue";

const props = defineProps<{ title: string; visible: true }>();
console.log(props);
</script>

<template>
  <h2>Lista de personajes</h2>

  <CardList />
</template>

<style scoped></style>
