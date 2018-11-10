import Vue from 'vue'
import Vuex from 'vuex'
import ads from './modules/ads'
import toast from './modules/toast'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        ads,
        toast
    }
})
