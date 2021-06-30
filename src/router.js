import { createWebHistory, createRouter } from "vue-router";
import TheMainPage from "./pages/TheMainPage.vue";
import NotFound from "./pages/NotFound.vue";

const routerHistory = createWebHistory();

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/",
      component: TheMainPage,
    },
    { path: "/:id", component: null, props: true },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});
export default router;
