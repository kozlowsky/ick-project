import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './components/HomePage'
import Login from './components/Login'
import Register from './components/Register'
import Cats from './components/Cats'

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
            path: '/secret',
            name: 'Cats',
            component: Cats
        }
    ]
})
