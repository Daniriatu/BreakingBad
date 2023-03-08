import { ref, onMounted } from "vue";
import axios from "axios";

import type { Characters, Result } from "@/characters/interface/characters";
import rickAndMorty from "@/api/rickAndMorty";

const characters = ref<Result[]>([]);
const isLoading = ref<boolean>(true);

const hasError = ref<boolean>(false);
const errorMessage = ref<string>("");

export const useCharactersOld = () => {
  onMounted(async () => {
    await loadCharacters();
  });
  const loadCharacters = async () => {
    if (characters.value.length > 0) return;

    isLoading.value = true;

    try {
      const { data } = await rickAndMorty.get<Characters>("/character");
      characters.value = data.results;
      isLoading.value = false;
    } catch (error) {
      hasError.value = true;
      if (axios.isAxiosError(error)) {
        errorMessage.value = error.message;
        return;
      }

      errorMessage.value = JSON.stringify(error);
    }
  };

  rickAndMorty.get<Characters>("/character").then((resp) => {
    characters.value = resp.data.results;
    isLoading.value = false;
  });
  return {
    characters,
    isLoading,
    hasError,
    errorMessage,
  };
};
