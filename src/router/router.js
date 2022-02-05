import { createRouter, createWebHistory } from "vue-router";
import Main from "@/pages/Main";
import Articles from "@/pages/Articles"
import ArticlePage from "@/pages/ArticlePage"

const routes =[
    {
        path:'/',
        component: Main
    },
    {
        path:'/articles',
        component: Articles
    },
    {
        path:'/articles/:id',
        component: ArticlePage
    },   
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;