<script setup lang="ts">
import type { Result } from "@/characters/interface/characters";
import { toRef } from "vue";

const props = defineProps<{ character: Result }>();
const character = toRef(props, "character");
</script>

<template>
  <div class="character-card">
    <img :src="props.character.image" alt="" />
    <h3>{{ props.character.name }}</h3>
  </div>
</template>

<style scoped>
.character-card {
  margin-right: 5px;
  margin-left: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
}

img {
  width: 180px;
  border-radius: 10px 10px 0px 0px;
  box-shadow: 0px, 2px, 10px, rgba(255, 255, 255, 0.5);
}
</style>
