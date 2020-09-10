import Vue from "vue";
import VueRouter from 'vue-router';

Vue.use(VueRouter);


import Test from '../pages/Test'
import Zkp from '../pages/Zkp'
import Home from '../pages/Home'

import Fund from '../pages/Fund'
import AboutNuoyou from '../pages/AboutNuoyou'
import Login from '../pages/Login'
import Register from '../pages/Register'
import UserCenter from '../pages/UserCenter'
import Law from '../pages/Law'
import UpdatePwd from '../pages/UpdatePwd'
import ForgetPwd from '../pages/ForgetPwd'
import Right from '../pages/Right'

import Risk from '../pages/Risk'
import Responseblity from '../pages/Responseblity'
import ContactUs from '../pages/ContactUs'







export default new VueRouter({
    mode: "history",
    routes:[
        { path: '/', component: Home},
        { path: '/test', component: Test },
        { path: '/zkp', component: Zkp },
        { path: '/userCenter', component: UserCenter },
        { path: '/law', component: Law },
        { path: '/updatePwd', component: UpdatePwd },
        { path: '/forgetPwd', component: ForgetPwd },
        { path: '/right', component: Right },
        { path: '/contactUs', component: ContactUs },

        { path: '/risk', component: Risk },
        { path: '/responseblity', component: Responseblity },


        { path: '/fund', component: Fund},
        { path: '/about_nuoyou', component: AboutNuoyou },
        { path: '/login', component: Login },
        { path: '/register', component: Register },

        { path: '*', redirect: "/"}
    ]
})

