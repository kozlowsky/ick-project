<template>
    <v-app>
        <Navbar/>
        <Toast/>
        <router-view class="view"/>
    </v-app>
</template>

<script>

    import Header from './components/Header'
    import Toast from './components/common/Toast'
    import Navbar from './components/Navbar'

    export default {
        name: 'App',
        components: {
            Header,
            Toast,
            Navbar
        },
        data() {
            return {
                clipped: false,
                drawer: true,
                fixed: false,
                items: [{
                    icon: 'bubble_chart',
                    title: 'Inspire'
                }],
                miniVariant: false,
                right: true,
                rightDrawer: false,
                title: 'Vuetify.js'
            }
        }
    }
</script>

<style>
    .view {
        margin-top: 5vh;
    }
</style>
