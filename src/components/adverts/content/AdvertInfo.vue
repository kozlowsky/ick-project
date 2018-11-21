<script>
    export default {
        name: "AdvertInfo",
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
    <v-container fluid grid-list-xl>
        <v-layout id="advert-info" row wrap>
            <h1 class="display-1">
                {{ advert.title }} - {{ advert.type }}
            </h1>
        </v-layout>
        <v-layout id="animal-info" row wrap>
            <v-flex id="animal-img" xs12 sm8>
                <v-img :src="require('../../../assets/pies/owczarek-1.jpeg')" height="300">

                </v-img>
            </v-flex>
            <v-flex id="animal-details" xs12 sm4>
                <v-layout row wrap>
                    <v-flex xs12 sm6><p class="font-weight-bold">Zwierzę</p></v-flex>
                    <v-flex xs12 sm6>{{ advert.animalType }}</v-flex>
                </v-layout>
                <v-layout row wrap>
                    <v-flex xs12 sm6><p class="font-weight-bold">Gatunek</p></v-flex>
                    <v-flex xs12 sm6>{{ advert.specie }}</v-flex>
                </v-layout>
                <v-layout row wrap>
                    <v-flex xs12 sm6><p class="font-weight-bold">Wiek</p></v-flex>
                    <v-flex xs12 sm6>{{ advert.age }}</v-flex>
                </v-layout>
                <v-layout row wrap>
                    <v-flex xs12 sm6><p class="font-weight-bold">Barwy</p></v-flex>
                    <v-flex xs12 sm6>
                        <span v-for="(color,i) in advert.colors" :key="color">
                            <span v-if="i+1 < advert.colors.length"> {{ color }}, </span>
                            <span v-else> {{ color }}</span>
                        </span>
                    </v-flex>
                </v-layout>
                <v-layout column>
                    <v-btn color="cyan" v-if="advert.type === 'Wirtualna Adopcja'" dark>Dofinansuj zwierzaka</v-btn>
                    <v-btn color="cyan" dark>Wyprowadź na spacer</v-btn>
                </v-layout>
            </v-flex>
        </v-layout>
        <v-layout id="advert-info" class="my-3 px-4" row wrap>
            <p v-text="$store.getters.adText"></p>
        </v-layout>
    </v-container>
</template>

<style scoped>

</style>
