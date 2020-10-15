import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("@/views/Index"),
    children: [
      // Dashboard
      {
        name: "Dashboard",
        path: "",
        component: () => import("@/views/Dashboard")
      },
      // Pages
      {
        name: "User List",
        path: "pages/user",
        component: () => import("@/views/pages/UserList")
      },
      {
        name: "Project List",
        path: "pages/project",
        component: () => import("@/views/pages/ProjectList")
      },
      {
        name: "Component List",
        path: "pages/component",
        component: () => import("@/views/pages/ComponentList")
      },
      {
        name: "Question List",
        path: "pages/qna",
        component: () => import("@/views/pages/QuestionList")
      },
      {
        name: "Cooperation List",
        path: "pages/cooperation",
        component: () => import("@/views/pages/CooperationList")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
