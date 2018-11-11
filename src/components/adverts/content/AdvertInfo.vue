<script>
    export default {
        name: "AdvertInfo",
        props: {
            adId: {
                type: Number,
                default: 1
            }
        },
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
        <v-layout id="advert-info" row>
            <h1 class="display-1">
                {{ advert.title }} - {{ advert.type }}
            </h1>
        </v-layout>
        <v-layout id="animal-info" row>
            <v-flex id="animal-img" xs12 sm8>
                <v-img :src="require('../../../assets/owczarek.jpg')" height="300">

                </v-img>
            </v-flex>
            <v-flex id="animal-details" xs12 sm4>
                <v-layout row>
                    <v-flex xs12 sm6><p class="font-weight-bold">Zwierzę</p></v-flex>
                    <v-flex xs12 sm6>{{ advert.animalType }}</v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12 sm6><p class="font-weight-bold">Gatunek</p></v-flex>
                    <v-flex xs12 sm6>{{ advert.specie }}</v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12 sm6><p class="font-weight-bold">Wiek</p></v-flex>
                    <v-flex xs12 sm6>{{ advert.age }}</v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12 sm6><p class="font-weight-bold">Barwy</p></v-flex>
                    <v-flex xs12 sm6>
                        <span v-for="(color,i) in advert.colors" :key="color">
                            <span v-if="i+1 < advert.colors.length"> {{ color }}, </span>
                            <span v-else> {{ color }}</span>
                        </span>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
        <v-layout id="advert-info" class="my-3 px-4" row>
            <p v-text="$store.getters.lorem"></p>
        </v-layout>
    </v-container>
</template>

<style scoped>

</style>