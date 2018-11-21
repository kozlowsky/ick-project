<script>
import between from "vuelidate/src/validators/between";
import numeric from "vuelidate/src/validators/numeric";
import PopularSearches from "../components/adverts/PopularSearches";

export default {
    name: "SearchPanel",
    components: {PopularSearches},
    data () {
        return {
            filters: {
                specie: '',
                gender: ['Obojętne'],
                typesOfAd: ['Obojętne'],
                breed: '',
                color: ['Obojętne'],
                age: 0
            },
            colors: [],
            species: [],
            typesOfAd: ['Adopcja', 'Wirtualna adopcja', 'Wyprowadzanie na spacer', 'Obojętne'],
            genders: [
                'Samiec',
                'Samica',
                'Obojętne'
            ],
            breeds: [],
            currentBreeds: []
        }
    },
    methods: {
        setBreeds () {
            let index = this.species.indexOf(this.filters.specie);
            this.currentBreeds = this.breeds[index];
        },
        popularSpecieSelected () {
            let index = this.species.indexOf(0);
            this.currentBreeds = this.breeds[index];
            this.$emit('onSearchChanged', this.filters);
            window.scrollTo(0, 700);
        },
        search() {
            this.$emit('onSearchChanged', this.filters);
            window.scrollTo(0, 700);
        }
    },
    validations: {
        age: {
            between: between(0, 30),
            numeric,
        }
    },
    computed: {
        ageErrors () {
            const errors = [];
            if (!this.$v.age.$dirty) return errors;
            !this.$v.age.numeric && errors.push('Niepoprawny wiek');
            !this.$v.age.between && errors.push('Niepoprawny wiek');
            return errors;

        }
    },
    created () {
        this.species = this.$store.getters.getSpecies;
        this.colors = this.$store.getters.getColors;
        this.breeds = this.$store.getters.getBreeds;
    }
}
</script>

<template>
    <v-card>
        <v-card-title>
            <p class="title">Znajdź pupila</p>
        </v-card-title>
        <v-card-text>
            <v-layout>
                <PopularSearches @onSearchChanged="popularSpecieSelected"></PopularSearches>
            </v-layout>
            <v-layout row>
                <v-autocomplete v-model="filters.specie" label="Wpisz gatunek pupila" :items="species" @change="setBreeds">
                </v-autocomplete>
            </v-layout>
            <v-layout row>
                <v-select v-model="filters.breed" :items="currentBreeds" :disabled="filters.specie === ''" label="Wpisz gatunek/rasę zwierzęcia">
                </v-select>
            </v-layout>
            <v-layout row>
                <v-flex xs12 md3>
                    <p class="subheading">Typ ogłoszenia</p>
                    <v-checkbox v-for="el in typesOfAd" :key="el" :label="`${el}`" :value="`${el}`" v-model="filters.typesOfAd"></v-checkbox>
                </v-flex>
                <v-flex xs12 md3>
                    <p class="subheading">Płeć</p>
                    <v-checkbox v-for="el in genders" :key="el" :label="`${el}`" :value="`${el}`" v-model="filters.gender"></v-checkbox>
                </v-flex>
                <v-flex xs12 md3>
                    <p class="subheading">Barwa</p>
                    <v-checkbox v-for="el in colors" :key="el" :label="`${el}`" :value="`${el}`" v-model="filters.color"></v-checkbox>
                </v-flex>
                <v-flex xs12 md3>
                    <p class="subheading">Wiek</p>
                    <v-text-field v-model="filters.age" :error-messages="ageErrors" @blur="$v.age.$touch()" @input="$v.age.$touch()">
                    </v-text-field>
                </v-flex>

            </v-layout>
        </v-card-text>
        <v-card-actions>
            <v-spacer />
            <v-btn :disabled="filters.specie === ''" color="success" @click="search">Szukaj</v-btn>
            <v-spacer />
        </v-card-actions>
    </v-card>
</template>

<style scoped>
</style>
