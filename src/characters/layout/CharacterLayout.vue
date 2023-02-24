<script setup lang="ts">
import NavBar from "@/shared/components/NavBar.vue";
// import type { routerLinks} from '@/router/link-router';
import type { RouterLink } from "../../router/link-router";
import { characterRoute } from "../router/index";

const routerLinks: RouterLink[] = characterRoute
  .children!.filter((route) => (route.props as { visible: boolean }).visible)
  .map((route) => {
    return {
      name: route.name as string,
      path: route.path,
      title: (route.props as { title: string; visible: boolean }).title,
    };
  });
</script>

<template>
  <h1>Personajes</h1>
  <NavBar :show-icon="false" :links="routerLinks" />
  <RouterView />
</template>

<style scoped></style>
