import Vue from "vue";
import VueRouter from 'vue-router';

Vue.use(VueRouter);


import Test from '../pages/Test'
import Zkp from '../pages/Zkp'
import Home from '../pages/Home'

import Fund from '../pages/Fund'
import AboutNuoyou from '../pages/AboutNuoyou'
import Login from '../pages/Login'
import UserCenter from '../pages/UserCenter'


export default new VueRouter({
    mode: "history",
    routes:[
        { path: '/', component: Home},
        { path: '/test', component: Test },
        { path: '/zkp', component: Zkp },
        { path: '/userCenter', component: UserCenter },
        { path: '/fund', component: Fund},
        { path: '/about_nuoyou', component: AboutNuoyou },
        { path: '/login', component: Login },
        

        { path: '*', redirect: "/"}
    ]
})

