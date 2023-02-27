<script setup lang="ts">
// import rickAndMorty from "../../api/rickAndMorty";
// import type { Characters, Result } from "../interface/characters";
// import { ref } from "vue";

import { useCharacters } from "@/characters/composables/useCharacters";
// const { isLoading, characters, hasError, errMessage } = useCharacters();
const { isLoading, characters, hasError, errorMessage } = useCharacters();
</script>

<template>
  <h1 v-if="isLoading">Loading...</h1>
  <h1 v-if="hasError">{{ errorMessage }}</h1>
  <ul>
    <li v-for="{ name, id } of characters" :key="id">
      {{ name }}
    </li>
  </ul>
</template>

<style scoped></style>
