import LoginPage from "@/components/LoginPage.vue";
import { createRouter, createWebHistory } from "vue-router";
import FormPage from "@/components/FormPage.vue";
const routes = [
  {
    path: "/",
    component: LoginPage,
    meta: { requiresAuth: false },
    name: "login",
  },
  {
    path: "/form",
    component: FormPage,
    meta: { requiresAuth: true },
    name: "form",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  const loginInfo = localStorage.getItem(`loginInfo`);

  if (to.meta.requiresAuth && !loginInfo) {
    next("/");
  } else {
    next();
  }
});
export default router;
