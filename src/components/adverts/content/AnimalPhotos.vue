<script>
    export default {
        name: "AnimalPhotos",
        methods: {
            getDogImage(index) {
                return require('../../../assets/pies/owczarek-' + index + '.jpeg');
            }
        }
    }

</script>

<template>
    <v-layout>
        <v-flex xs12 sm8 offset-sm2>
            <v-card flat>
                <v-container grid-list-sm fluid>
                    <v-layout row wrap>
                        <v-flex
                                v-for="n in 6"
                                :key="n"
                                xs4
                                d-flex>
                            <v-card flat tile class="d-flex">
                                <v-img
                                        :src="getDogImage(n)"
                                        aspect-ratio="1"
                                        class="grey lighten-2">
                                    <v-layout
                                            slot="placeholder"
                                            fill-height
                                            align-center
                                            justify-center
                                            ma-0>
                                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                    </v-layout>
                                </v-img>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<style scoped>

</style>