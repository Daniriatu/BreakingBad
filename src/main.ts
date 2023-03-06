import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css";
import router from "./router/index";
import { VueQueryPlugin } from "@tanstack/vue-query";

const app = createApp(App);

import "@/store/character.store";

// app.use(VueQueryPlugin);
VueQueryPlugin.install(app, {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        cacheTime: 1000 * 120,
        refetchOnReconnect: "always",
      },
    },
  },
});

app.use(router);

app.mount("#app");
