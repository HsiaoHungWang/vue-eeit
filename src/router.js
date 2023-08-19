import {createRouter, createWebHistory} from 'vue-router'
import Home from './views/Home.vue';
import About from './views/About.vue';
import Contact from './views/Contact.vue';
import Products from './views/Products.vue';
import Add from './views/Add.vue';
import Edit from './views/Edit.vue';
const routes = [
    {
        //http://localhost/
        path:'/',
        component:Home
    },
    {
        //http://localhost/about
        path:'/about',
        component:About
    },
    {
        //http://localhost/contact
        path:'/contact',
        component:Contact
    },
    {
        //http://localhost/products
        path:'/products',
        component:Products
    },
    {
        //http://localhost/products/add
        path:'/products/add',
        component:Add
    },
    {
        //http://localhost/products/edit/1
        path:'/products/edit/:id',
        component:Edit
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router