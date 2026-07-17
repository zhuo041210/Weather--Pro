import { createRouter,createWebHistory } from "vue-router"

import Index from '../components/layout/index.vue'
import Home from '../components/views/firstViews/home.vue'
import TodayWeather from '../components/views/firstViews/todayWeather.vue'
import RecentWeather from '../components/views/firstViews/recentWeather.vue'
import DailySoup from '../components/views/firstViews/dailySoup.vue'

const routes = [
    {
        path:'/',
        name:'index',
        component:Index,
        children:[
            {
                path:'',
                redirect:'/home'
            },
            {
                path:'home',
                name:'home',
                component:Home
            },
            {
                path:'todayWeather',
                name:'todayWeather',
                component:TodayWeather
            },       
            {
                path:'recentWeather',
                name:'recentWeather',
                component:RecentWeather
            },
            {
                path:'dailySoup',
                name:'dailySoup',
                component:DailySoup
            },                    
        ]
    }
]


export default createRouter({
    history:createWebHistory(),
    routes  
})