<script setup lang="ts">
// import rickAndMorty from "../../api/rickAndMorty";
// import type { Characters, Result } from "../interface/characters";
// import { ref } from "vue";

// import { useCharacters } from "@/characters/composables/useCharacters";
// import { useQuery } from "@tanstack/vue-query";
import type { Result } from "@/characters/interface/characters";
// import rickAndMorty from "@/api/rickAndMorty";
import CharacterCard from "@/characters/components/CharacterCard.vue";

// const { isLoading, characters, hasError, errMessage } = useCharacters();
// const { isLoading, characters, hasError, errorMessage } = useCharacters();

// const getCharactersSlow = async (): Promise<Result[]> => {
//   return new Promise((resolve) => {
//     setTimeout(async () => {
//       const { data } = await rickAndMorty.get<Characters>("/character");
//       resolve(data.results);
//     }, 1000);
//   });
// };

// const { isLoading, data: characters } = useQuery(
//   ["characters"],
//   getCharactersSlow,
//   {
//     cacheTime: 1000 * 60,
//     refetchOnReconnect: "always",
//   }
// );

interface Props {
  characters: Result[];
}

const props = defineProps<Props>();
</script>

<template>
  <!-- <h1 v-if="isError">{{ error }}</h1> -->
  <div class="card-list">
    <!-- <li v-for="{ name, id } of characters" :key="id">
      {{ name }}
    </li> -->
    <!-- <CharacterCard v-for /> -->
    <CharacterCard
      v-for="character of props.characters"
      :key="character.id"
      :character="character"
    />
  </div>
</template>

<style scoped>
.card-list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
