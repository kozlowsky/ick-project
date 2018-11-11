import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './views/HomePage'
import Login from './views/Login'
import Register from './views/Register'
import Cats from './views/Cats'
import Advertisment from './views/Advertisment'
import Search from './views/Search'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HomePage',
            component: HomePage
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/register',
            name: 'Register',
            component: Register
        },
        {
            path: '/advert/:id',
            name: 'Advertisment',
            component: Advertisment
        },
        {
            path: '/search',
            name: 'Search',
            component: Search
        },
        {
            path: '/secret',
            name: 'Cats',
            component: Cats
        }
    ]
})
