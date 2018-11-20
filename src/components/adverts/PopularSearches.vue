<template>
    <v-layout column>
        <v-layout row>
            <v-label>Popularne gatunki: </v-label>
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
                species: ['husky', 'cocker spaniel', 'shih tzu', 'jamnik']
            }
        }
    }
</script>

<style scoped>

</style>
