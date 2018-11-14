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

        <v-tooltip v-if="isUserLoggedIn" bottom>
            <v-btn slot="activator" icon @click="$router.push({name: 'AddAdvert'})">
                <v-icon>add</v-icon>
            </v-btn>
            <span>Dodaj ogłoszenie</span>
        </v-tooltip>

        <v-tooltip bottom>
            <v-btn slot="activator" icon @click="$router.push({name: 'Wiki'})">
                <v-icon>school</v-icon>
            </v-btn>
            <span>Encyklopedia gatunków</span>
        </v-tooltip>

        <v-toolbar-items>
            <v-btn v-if="!isUserLoggedIn" flat @click="$router.push({name: 'Login'})">Zaloguj</v-btn>
            <v-btn v-if="!isUserLoggedIn" flat @click="$router.push({name: 'Register'})">Utwórz konto</v-btn>
            <v-btn v-if="isUserLoggedIn" flat @click="logout">Wyloguj</v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<style scoped>

</style>
