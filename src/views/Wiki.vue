<script>
    import WikiSearch from '../components/wiki/WikiSearch'
    export default {
        name: "Wiki",
        components: {
            WikiSearch
        },
        methods: {
            onSearch(filters) {
                console.log(filters)
            }
        }
    }
</script>

<template>
    <v-container fluid background-image>
        <v-layout row wrap align-center justify-center>
            <v-flex md10 lg10 sm12 xs12>
                <wiki-search @onSearch="onSearch"/>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<style scoped>
    .background-image {
        background-image: url("../assets/wiki-bg.jpg");
        background-size: cover;
    }
</style>
