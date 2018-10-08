import Vue from 'vue'
import Router from 'vue-router'
import Cats from './components/Cats'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Cats',
        component: Cats
    }
    ]
})
