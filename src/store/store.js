import Vue from 'vue'
import Vuex from 'vuex'
import ads from './modules/ads'
import toast from './modules/toast'
import user from './modules/user'
import users from './modules/users'
import species from './modules/species'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        ads,
        toast,
        user,
        users,
        species
    }
})
