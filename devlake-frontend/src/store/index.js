import {createStore} from "vuex"
import callAPI from "../request/service"
import apis from "../request/apis"
const store =createStore({
    state:{
        callAPI,
        apis
    }
})

export default store