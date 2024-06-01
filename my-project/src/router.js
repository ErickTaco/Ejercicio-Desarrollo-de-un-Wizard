import { createRouter, createWebHistory } from "vue-router";
import Home from ".//components/componeteEnvioCodigo/envioCodigo.vue";
import Ruc from "./components/componenteRuc/encontrarRuc.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/Ruc", component: Ruc },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
