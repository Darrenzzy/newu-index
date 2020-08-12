import Vue from "vue";
import VueRouter from 'vue-router';

Vue.use(VueRouter);


import Test from '../pages/Test'
import Zkp from '../pages/Zkp'
import Home from '../pages/Home'

export default new VueRouter({
    mode: "history",
    routes:[
        { path: '/', component: Home},
        { path: '/test', component: Test },
        { path: '/zkp', component: Zkp },
        { path: '*', redirect: "/"}
    ]
})

