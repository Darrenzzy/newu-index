import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

localStorage.getItem("username") && localStorage.getItem("email") && localStorage.getItem("mobile")

const store = new Vuex.store({
    state: {
        username: "",
        email: "",
        mobile: "",
    },
    mutations: {
        // changeCount(state,params) {
        //     state.username = "test"
        //     console.log(state)
        // },
    },
    getters:{ 
        getCount(state){
            return state.count;
        }
    }
})

export default store;
