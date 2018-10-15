<template>
    <v-app>
        <router-view />
    </v-app>
</template>

<script>

    import Header from './components/Header'

    export default {
        name: 'App',
        components: {
          Header
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
