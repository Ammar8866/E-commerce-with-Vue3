import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Shop from './components/Shop.vue'
import Blog from './components/Blog.vue'
import productitem from './components/productitem.vue'
import Itemdetails from './components/Itemdetails.vue'
import Category from './components/Category.vue'
import Search from './components/Search.vue'
import Cart from './components/Cart.vue'
import { createRouter,createWebHistory } from 'vue-router' 


const routes=[
{
    name:'Home',
    component:Home,
    path:'/Home'
},
{
    path:'/',
    redirect:'/Home'
},
{
    name:'Login',
    component:Login,
    path:'/Login'
},
{
    name:'Shop',
    component:Shop,
    path:'/Shop'
},
{
    name:'Blog',
    component:Blog,
    path:'/Blog'
},
{
    name:'productitem',
    component:productitem,
    path:'/productitem'
},
{
    name:'Itemdetails',
    component:Itemdetails,
    path:'/Itemdetails/:id'
},

{
    name:'Category',
    component:Category,
    path:'/Category/:category'
},

{
    name:'Search',
    component:Search,
    path:'/Search/:query'
},

{
    name:'Cart',
    component:Cart,
    path:'/Cart'
},


]

const router=createRouter({
    history:createWebHistory(),
    routes
})
export default router