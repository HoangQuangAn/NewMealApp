import { createRouter , createWebHistory} from "vue-router"; 
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import MealView from '../views/Meals/View.vue'

const route = createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/',
            name:'home',
            component:HomeView
        },
        {
            path:'/about',
            name:'about',
            component:AboutView
        },
        {
            path:'/students',
            name:'students',
            component:MealView
        },
    ]
})


export default route;