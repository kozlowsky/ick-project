<script>
    import {mapGetters} from 'vuex'
    export default {
        name: "Navbar",
        computed: {
            ...mapGetters(['isUserLoggedIn'])
        },
        methods: {
            logout () {
                this.$store.dispatch('LOGOUT_USER')
                    .then(() => {
                        this.$router.push('/')
                        this.successfulToast('Wylogowano pomyślnie!');
                    }, this);
            },
            scrollToTop() {
                window.scrollTo(0,0);
            }
        }
    }
</script>

<template>
    <v-toolbar dark flat fixed color="primary">

        <router-link to="/" tag="a">
            <v-toolbar-title class="white--text" @click="scrollToTop">Przygarnij.Go</v-toolbar-title>
        </router-link>

        <v-spacer></v-spacer>

        <v-toolbar-items>
            <v-btn v-if="!isUserLoggedIn" flat @click="$router.push({name: 'Login'})">Zaloguj</v-btn>
            <v-btn v-if="!isUserLoggedIn" flat @click="$router.push({name: 'Register'})">Utwórz konto</v-btn>
            <v-btn v-if="isUserLoggedIn" flat @click="logout">Wyloguj</v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<style scoped>

</style>
