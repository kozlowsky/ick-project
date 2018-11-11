<script>
import between from "vuelidate/src/validators/between";
import numeric from "vuelidate/src/validators/numeric";

export default {
    name: "SearchPanel",
    data () {
        return {
            specie: '',
            species: [],

            gender: '',
            genders: [
                'Samiec',
                'Samica',
                'Obojętne'
            ],

            breed: '',
            breeds: [],
            currentBreeds: [],


            colors: [],
            age: 0

        }
    },
    methods: {
        setBreeds () {
            let index = this.species.indexOf(this.specie);
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
                <v-autocomplete v-model="specie" label="Wpisz gatunek pupila" :items="species" @change="setBreeds">
                </v-autocomplete>
            </v-layout>
            <v-layout row>
                <v-select v-model="breed" :items="currentBreeds" :disabled="specie === ''" label="Wpisz gatunek/rasę zwierzęcia">
                </v-select>
            </v-layout>
            <v-layout row>
                <v-flex xs12 md4>
                    <p class="subheading">Płeć</p>
                    <v-radio-group v-model="gender">
                        <v-radio v-for="el in genders" :key="el" :label="`${el}`" :value="el"></v-radio>
                    </v-radio-group>
                </v-flex>
                <v-flex xs12 md4>
                    <p class="subheading">Barwa</p>
                    <v-radio-group>
                        <v-radio v-for="el in colors" :key="el" :label="`${el}`" :value="el">
                        </v-radio>
                    </v-radio-group>
                </v-flex>
                <v-flex xs12 md4>
                    <p class="subheading">Wiek</p>
                    <v-text-field v-model="age" :error-messages="ageErrors" @blur="$v.age.$touch()" @input="$v.age.$touch()">
                    </v-text-field>
                </v-flex>

            </v-layout>
        </v-card-text>
        <v-card-actions>
            <v-spacer />
            <v-btn :disabled="specie === ''" color="success">Szukaj</v-btn>
            <v-spacer />
        </v-card-actions>
    </v-card>
</template>

<style scoped>
</style>