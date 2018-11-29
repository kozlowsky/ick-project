<script>
    import {mapGetters} from 'vuex'
    export default {
        name: "WikiSearch",
        data () {
            return {
                filters: {
                    specie: '',
                    breed: '',
                },
                species: [],
                breeds: [],
                currentBreeds: []
            }
        },
        methods: {
            setBreeds () {
                let index = this.species.indexOf(this.filters.specie);
                this.currentBreeds = this.breeds[index];
            }
        },
        computed: {
            ...mapGetters(['isUserLoggedIn'])
        },
        created () {
            this.species = this.$store.getters.getSpecies;
            this.breeds = this.$store.getters.getBreeds;
        }
    }
</script>

<template>
    <v-card>
        <v-card-title>
            <p class="title">Wyszukaj informacje o gatunku</p>
        </v-card-title>
        <v-card-text>
            <v-layout row>
                <v-autocomplete v-model="filters.specie" label="Wybierz gatunek" :items="species" @change="setBreeds">
                </v-autocomplete>
            </v-layout>
            <v-layout row>
                <v-select v-model="filters.breed" :items="currentBreeds" :disabled="filters.specie === ''" label="Wybierz rasę zwierzęcia">
                </v-select>
            </v-layout>
        </v-card-text>
        <v-card-actions>
            <v-spacer />
            <v-btn :disabled="!isUserLoggedIn" color="info" @click="$router.push({name: 'AddWikiEntry'})">Dodaj informacje</v-btn>

            <v-btn :disabled="filters.specie === ''" color="success" @click="$emit('onSearch', filters)">Przejdź</v-btn>
            <v-spacer />
        </v-card-actions>
    </v-card>
</template>

<style scoped>
</style>
