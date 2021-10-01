import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

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
    // route level code-splitting
    // this generates a separate chunk (notes.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "notes" */ "../views/Notes.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import("../views/Contact.vue"),
  },
  {
    path: "/projects",
    name: "Projects",
    component: () =>
      import("../views/Projects.vue"),
  }
];

const router = new VueRouter({
  routes,
});

export default router;
