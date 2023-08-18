import { createWebHistory, createRouter} from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Contact from './views/Contact.vue'
const routers = [
    {
        //http://localhost/ => Home　Component
        path:"/",
        component:Home
    },
    {
        //http://localhost/about => About Component
        path:"/about",
        component:About
    },
    {
         //http://localhost/contact => Contact Component
         path:"/contact",
         component:Contact
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes:routers
})

export default router