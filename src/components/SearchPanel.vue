<script>
import between from "vuelidate/src/validators/between";
import numeric from "vuelidate/src/validators/numeric";

export default {
    name: "SearchPanel",
    data () {
        return {
            filters: {
                specie: '', 
                gender: '', 
                breed: '', 
                color: '',
                age: 0
            },
            colors: [],
            species: [],
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
            <v-layout row>
                <v-autocomplete v-model="filters.specie" label="Wpisz gatunek pupila" :items="species" @change="setBreeds">
                </v-autocomplete>
            </v-layout>
            <v-layout row>
                <v-select v-model="filters.breed" :items="currentBreeds" :disabled="filters.specie === ''" label="Wpisz gatunek/rasę zwierzęcia">
                </v-select>
            </v-layout>
            <v-layout row>
                <v-flex xs12 md4>
                    <p class="subheading">Płeć</p>
                    <v-radio-group v-model="filters.gender">
                        <v-radio v-for="el in genders" :key="el" :label="`${el}`" :value="el"></v-radio>
                    </v-radio-group>
                </v-flex>
                <v-flex xs12 md4>
                    <p class="subheading">Barwa</p>
                    <v-radio-group v-model="filters.color">
                        <v-radio v-for="el in colors" :key="el" :label="`${el}`" :value="el">
                        </v-radio>
                    </v-radio-group>
                </v-flex>
                <v-flex xs12 md4>
                    <p class="subheading">Wiek</p>
                    <v-text-field v-model="filters.age" :error-messages="ageErrors" @blur="$v.age.$touch()" @input="$v.age.$touch()">
                    </v-text-field>
                </v-flex>

            </v-layout>
        </v-card-text>
        <v-card-actions>
            <v-spacer />
            <v-btn :disabled="filters.specie === ''" color="success" @click="$emit('onSearchChanged', filters)">Szukaj</v-btn>
            <v-spacer />
        </v-card-actions>
    </v-card>
</template>

<style scoped>
</style>