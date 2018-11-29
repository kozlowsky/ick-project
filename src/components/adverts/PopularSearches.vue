<template>
    <v-layout column>
        <v-layout row>
            <v-label>Popularne wyszukiwania: </v-label>
        </v-layout>
        <v-layout row>
            <v-btn
                    v-for="el in species"
                    :key="el"
                    color="primary"
                    @click="$emit('onSearchChanged')" flat>{{`${el}`}}</v-btn>
        </v-layout>
    </v-layout>
</template>

<script>
    export default {
        name: "PopularSearches",
        data () {
            return {
                species: ['pies', 'kot', 'labrador', 'kot perski', 'świnia', 'koń']
            }
        }
    }
</script>

<style scoped>

</style>
