import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CityView from "../views/CityView.vue";
import AllCitiesView from "../views/AllCitiesView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/weather/:search",
      name: "cityView",
      component: CityView,
    },
    {
      path: "/weather/all-cities",
      name: "allCitiesView",
      component: AllCitiesView,
    },
  ],
});

export default router;
