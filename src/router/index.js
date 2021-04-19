import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Register from "../views/Register.vue";
import aboutUs from "../views/aboutUs.vue";
import StoreLo from "../views/StoreLo.vue";
import HowTo from "../views/HowTo.vue";
import InForm from "../views/inForm.vue";
import Login from "../components/Login.vue";
import Basket from "../components/Basket.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/howto",
    name: "HowTo",
    component: HowTo,
  },
  {
    path: "/inForm",
    name: "InForm",
    component: InForm,
  },
  {
    path: "/storelocation",
    name: "StoreLo",
    component: StoreLo,
  },
  {
    path: "/aboutus",
    name: "aboutUs",
    component: aboutUs,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/basket",
    name: "Basket",
    component: Basket,
  },
  
  {
    path: "/product",
    name: "Product",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Product.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
