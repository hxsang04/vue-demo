import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { 
        path: '/product/',
        name: 'product.list',
        component: () => import('../views/products/List.vue')
    },
    { 
        path: '/product/create',
        name: 'product.create',
        component: () => import('../views/products/Form.vue')
    },
    { 
        path: '/product/edit/:id',
        name: 'product.edit',
        component: () => import('../views/products/Form.vue')
    },
]
  
const router = createRouter({
    history: createWebHistory(),
    routes, 
})

export default router