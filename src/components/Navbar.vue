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


        <v-tooltip bottom>
            <v-btn slot="activator" flat @click="$router.push('/')">
                <v-icon left>search</v-icon> Wyszukaj
            </v-btn>
            <span>Wyszukaj</span>
        </v-tooltip>

        <v-tooltip bottom>
            <v-btn slot="activator" flat @click="isUserLoggedIn ? $router.push({ name: 'AddAdvert'}) : $router.push({name: 'Login', params: {next: 'AddAdvert' }})">
                <v-icon left>add</v-icon> Dodaj ogłoszenie
            </v-btn>
            <span>Dodaj nowe ogłoszenie</span>
        </v-tooltip>

        <v-tooltip bottom>
            <v-btn slot="activator" flat @click="$router.push({name: 'Wiki'})">
                <v-icon left>school</v-icon>Encyklopedia gatunków
            </v-btn>
            <span>Encyklopedia gatunków</span>
        </v-tooltip>

        <v-toolbar-items>
            <v-btn v-if="!isUserLoggedIn" flat @click="$router.push({name: 'Login', params: {next: 'HomePage' }})">Zaloguj</v-btn>
            <v-btn v-if="!isUserLoggedIn" flat @click="$router.push({name: 'Register'})">Utwórz konto</v-btn>
            <v-btn v-if="isUserLoggedIn" flat @click="logout">Wyloguj</v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<style scoped>

</style>
