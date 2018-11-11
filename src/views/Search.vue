<script>
import SearchPanel from "../components/SearchPanel";
import AdvertList from "../components/adverts/AdvertList";

export default {
    name: "Search",
    components: { SearchPanel, AdvertList },
    data () {
        return {
            breed: ''
        }
    },
    methods: {
        onSearchChanged (filters) {
            if (filters.specie === 'pies') {
                this.breed = filters.breed
            } else{
                this.breed = ''
            }
        }
    }
}
</script>

<template>
    <v-container fluid>

        <v-layout row wrap align-center justify-center>
            <v-flex md10 lg10 sm12 xs12>
                <SearchPanel @onSearchChanged="onSearchChanged" />
            </v-flex>
            <v-flex mt-2 md11 lg11 sm12 xs12>
                <AdvertList :breed="this.breed" />
            </v-flex>
        </v-layout>

    </v-container>
</template>

<style scoped>
</style>