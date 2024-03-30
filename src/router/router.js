import { createRouter, createWebHistory } from "vue-router";

import Home from "../components/Home.vue";
import About from "../components/About.vue";
import Contact from "../components/Contact.vue";
import AddNewPost from "../components/AddNewPost.vue";
import SinglePost from "../blog/SinglePost.vue";
import BlogHome from "../blog/BlogHome.vue";
import EditPost from "../blog/EditPost.vue";

const routes = [
  {
    path: "/",
    component: Home,
    name: "home",
  },

  {
    path: "/about",
    component: About,
    name: "about",
  },

  {
    path: "/contact",
    component: Contact,
    name: "contact",
  },

  {
    path: "/blog",
    component: BlogHome,
    name: "bloghome",
  },

  {
    path: "/blog/post/:id",
    component: SinglePost,
    name: "singlepost",
  },

  {
    path: "/blog/post/:id/edit",
    component: EditPost,
    name: "editpost",
  },

  {
    path: "/newpost",
    component: AddNewPost,
    name: "addnewpost",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
