import { createRouter , createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import AboutPage from "./pages/AboutPage.vue";
import ProjectsPage from "./pages/ProjectsPage.vue"
import SingleProjectPage from "./pages/SingleProjectPage.vue"
import NotFoundPage from "./pages/NotFoundPage.vue"





const router = createRouter({
    history: createWebHistory(),
    routes: [ 
        {
            path: "/",
            name: "home",
            component: HomePage
        },
        {
            path: "/about",
            name: "about",
            component: AboutPage
        },
        {
            path: "/projects",
            name: "projects",
            component: ProjectsPage
        },
        {
            path: "/projects/:slug",
            name: "single-project",
            component: SingleProjectPage
        },
        {
            path: "/not-found",
            name: "not-found",
            component: NotFoundPage
        },
    ]

});

export { router };