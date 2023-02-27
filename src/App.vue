<script setup lang="ts">
import { RouterView } from "vue-router";
import NavBar from "@/shared/components/NavBar.vue";
import { routerLinks } from "@/router/link-router";
</script>

<template>
  <div class="wrapper">
    <header>
      <NavBar title="RickAndMorty" :links="routerLinks"></NavBar>
    </header>

    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
}
</style>
