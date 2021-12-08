import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// localStorage.getItem("username") && localStorage.getItem("email") && localStorage.getItem("mobile")
 const state={
    username: "",
    email: "",
    mobile: "",
     //要设置的初始属性值
   };
const getters = {   //实时监听state值的变化(最新状态)
    getCount(state){
        return state.count;
    }
};
const mutations = {
    changeCount(state) {
        state.username = "test"
        console.log(state)
    },
};
 const store = new Vuex.Store({
    state,
    getters,
    mutations
});
export default store;
