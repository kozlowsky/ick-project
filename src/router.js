import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './views/HomePage'
import Login from './views/Login'
import Register from './views/Register'
import Cats from './views/Cats'
import Advertisment from './views/Advertisment'
import Search from './views/Search'
import Wiki from './views/Wiki'
import WikiEntry from './views/WikiEntry'
import AddWikiEntry from './views/AddWikiEntry'
import AddAdvert from './views/AddAdvert'

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
            path: '/wiki/add',
            name: 'AddWikiEntry',
            component: AddWikiEntry
        },
        {
            path: '/wiki/:id',
            name: 'WikiEntry',
            component: WikiEntry
        },
        {
            path: '/wiki',
            name: 'Wiki',
            component: Wiki
        },
        {
            path: '/secret',
            name: 'Cats',
            component: Cats
        },
        {
            path: '/advert/add',
            name:'AddAdvert',
            component: AddAdvert
        }
    ]
})
