<script>
    export default {
        name: "SpecieWiki",
        props: ['adId'],
        data() {
            return {
                advert: null

            }
        },
        created() {
            this.advert = this.$store.getters.ads[this.adId];
        }
    }
</script>

<template>
    <v-container grid-list-xl>
        <v-layout row wrap>
            <h1 class="display-3">{{ advert.animalType }} - {{ advert.specie }}</h1>
            <v-spacer/>
            <v-btn icon>
                <v-icon>edit</v-icon>
            </v-btn>
        </v-layout>
        <v-layout row wrap>
            <v-flex xs12 md8>
                {{ $store.getters.lorem }}
                {{ $store.getters.lorem }}
            </v-flex>
            <v-flex xs12 md4>
                <v-img :src="require('../../../assets/pies/owczarek-1.jpeg')" aspect-ratio="1.75"></v-img>
                <v-toolbar color="cyan" class="elevation-0" dark><span class="subheading">Wymiary</span></v-toolbar>
                <v-card flat>
                    <v-card-text>
                        <v-layout row wrap>
                            <v-flex xs12 md6>Wysokość</v-flex>
                            <v-flex xs12 md6>
                                <p>60-65 cm (samce)</p>
                                <p>60-65 cm (suki)</p>
                            </v-flex>
                        </v-layout>
                        <v-layout row wrap>
                            <v-flex xs12 md6>Masa</v-flex>
                            <v-flex xs12 md6>
                                <p>30-45 kg (samce)</p>
                                <p>22-32 kg (suki)</p>
                            </v-flex>
                        </v-layout>
                    </v-card-text>
                </v-card>
                <v-toolbar color="cyan" class="elevation-0" dark><span class="subheading">Dodatkowe informacje</span>
                </v-toolbar>
                <v-card flat>
                    <v-card-text>
                        <v-layout row wrap>
                            <v-flex xs12 md6>Inne nazwy</v-flex>
                            <v-flex xs12 md6>lorem ipsum</v-flex>
                        </v-layout>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<style scoped>

</style>