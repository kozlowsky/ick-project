<template>
    <v-app>
        <Toast/>
        <router-view/>
    </v-app>
</template>

<script>

    import Header from './components/Header'
    import Toast from './components/common/Toast'

    export default {
        name: 'App',
        components: {
            Header,
            Toast
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
