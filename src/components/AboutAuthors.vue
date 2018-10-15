<script>
    export default {
        name: "AboutAuthors",
        data() {
            return {
                authors: [
                    {
                        name: "Konrad Drozd",
                        car: "Ford Mustang",
                        hobby: "Czytanie",
                        image: "konrad.jpg"
                    },
                    {
                        name: "Jakub Kozłowski",
                        car: "Range Rover",
                        hobby: "Squash",
                        image: "kuba.jpg"
                    },
                    {
                        name: "Dawid Michałowicz",
                        car: "Porsche Carrera",
                        hobby: "Śmieszne koty",
                        image: "dawid.jpg"
                    },
                    {
                        name: "Maksymilian Paluszek",
                        car: "Tesla Model S",
                        hobby: "Podróże",
                        image: "maks.jpg"
                    }]
            }
        },
        methods: {
            getImageUrl(author) {
                return require('../assets/' + author.image);
            }
        }
    }
</script>

<template>
    <v-container>
        <h3 class="display-2 text-md-center mb-4">Dowiedz się więcej na temat autorów</h3>
        <v-layout>
            <v-expansion-panel popout>
                <v-expansion-panel-content v-for="author in authors" :key="author.name">
                    <v-layout
                            slot="header"
                            align-center
                            row
                            spacer>
                        <v-flex xs4 sm2 md1>
                            <v-avatar slot="activator"
                                      size="50px">
                                <img :src="getImageUrl(author)">

                            </v-avatar>
                        </v-flex>
                        <v-flex sm5 md3 hidden-xs-only>
                            <strong>{{ author.name }}</strong>
                        </v-flex>
                        <v-flex v-if="author.car" ellipsis hidden-sm-and-down>
                            Autor porusza się {{ author.car }}
                        </v-flex>
                    </v-layout>
                    <v-card>
                        <v-divider></v-divider>
                        <v-card-text>
                            Hobby autora to {{ author.hobby }}
                        </v-card-text>
                    </v-card>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-layout>
    </v-container>
</template>

<style scoped>

</style>