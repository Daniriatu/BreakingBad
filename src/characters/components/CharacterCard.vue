<script setup lang="ts">
import type { Result } from "@/characters/interface/characters";
import { toRef } from "vue";
import { useRouter } from "vue-router";

const props = defineProps<{ character: Result }>();
const character = toRef(props, "character");

const router = useRouter();

const goTo = () => {
  router.push(`by/${character.value.id}`);
};
</script>

<template>
  <div class="character-card" @click="goTo()">
    <img :src="character.image" :alt="character.name" />
    <h3>{{ character.name }}</h3>
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
  cursor: pointer;
}

img {
  width: 180px;
  border-radius: 10px 10px 0px 0px;
  box-shadow: 0px, 2px, 10px, rgba(255, 255, 255, 0.5);
  transition: all 0.5s;
}

img:hover {
  box-shadow: 0px, 2px, 10px, rgba(255, 255, 255, 0.5);
  transition: all 0.5s;
}
</style>
