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
      meta: {
        title: "Home"
      }
    },
    {
      path: "/weather/:search",
      name: "cityView",
      component: CityView,
      meta: {
        title: "City"
      }
    },
    {
      path: "/weather/all-cities",
      name: "allCitiesView",
      component: AllCitiesView,
      meta: {
        title: "Alll Cities"
      }
    },
  ],
});

router.beforeEach((to, from, next) =>{
  document.title = `${to.meta.title} | Weather App`;
  next();
})

export default router;
