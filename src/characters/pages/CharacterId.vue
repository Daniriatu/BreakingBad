<script setup lang="ts">
import { useRoute } from "vue-router";
// import rickAndMorty from "@/api/rickAndMorty";
// import type { Result } from "../interface/characters";
// import { useQuery } from "@tanstack/vue-query";
// import { reactive, ref } from "vue";
import characterStore from "@/store/character.store";

const route = useRoute();

const { id } = route.params as { id: string };

const characterID: number = Number(id) - 1;

const character = characterStore.characters.list[characterID];

console.log(character);

// const getCharacter = async (characterId: string): Promise<Result> => {
//   const { data } = await rickAndMorty.get<Result>(`/character/${characterId}`);
//   return data;
// };

// const { data: character } = useQuery(
//   ["character", id],
//   () => getCharacter(id)
//   // {
//   //   cacheTime: 1000 * 20,
//   //   refetchOnReconnect: "always",
//   // }
// );
</script>

<template>
  <h1 v-if="!character">Loading...</h1>

  <div v-else>
    <h1>{{ character.name }}</h1>
    <div class="character-container">
      <img :src="character.image" :alt="character.name" />
      <ul>
        <li>Estado:{{ character.status }}</li>
        <li>Especie:{{ character.species }}</li>
        <li>Tipo:{{ character.type == "" ? "No type" : character.type }}</li>
        <li>Lugar:{{ character.location.name }}</li>
        <li>Género:{{ character.gender }}</li>
        <li>
          Episodios:
          <span v-for="item of character.episode" :key="item">
            {{ item.split("/")[item.split("/").length - 1] }} &nbsp;
          </span>
        </li>
      </ul>
    </div>

    <!-- <code>{{ character }}</code> -->
  </div>
  <!-- <code>
    {{ character }}
  </code> -->
</template>

<style scoped>
.character-container {
  display: flex;
  flex-direction: row;
  margin: 20px 10px;
}

img {
  width: 300px;
  border-radius: 5px;
}

ul {
  font-size: 20px;
}
</style>
