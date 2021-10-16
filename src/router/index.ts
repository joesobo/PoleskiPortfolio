import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Notes from "../views/Notes.vue";
import Projects from "../views/Projects.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/notes",
    name: "Notes",
    component: Notes,
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
  }
];

const router = new VueRouter({
  routes,
});

export default router;
