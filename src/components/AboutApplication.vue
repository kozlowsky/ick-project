<script>
    export default {
        name: "AboutApplication",
        data() {
            return {
                items: [
                    {
                        src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
                    },
                    {
                        src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
                    },
                    {
                        src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
                    },
                    {
                        src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
                    }
                ]
            }
        }
    }
</script>

<template>
    <v-container>
        <v-layout column align-center mb-4>
            <h3 class="display-2">Dowiedz się więcej o projekcie!</h3>
        </v-layout>
        <v-layout row>
            <v-flex xs12 md6>
                <v-carousel hide-delimiters style="height: 350px">
                    <v-carousel-item
                            v-for="(item,i) in items"
                            :key="i"
                            :src="item.src"
                    ></v-carousel-item>
                </v-carousel>
            </v-flex>
            <v-flex xs12 md6>
                <v-container fill-height>
                    <v-layout column align-center justify-center>
                        <h6 class="title">Coś na temat projektu</h6>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed gravida mauris. Donec
                            efficitur
                            porttitor risus vitae fringilla. Suspendisse commodo lobortis diam, vehicula gravida eros
                            faucibus
                            venenatis. Suspendisse potenti. In dapibus velit tincidunt feugiat lobortis. Etiam convallis
                            tincidunt mauris in pretium. Curabitur eget semper nisl.

                        </p>
                        <v-btn color="success" @click="$router.push('/register')">
                            Zarejestruj się
                        </v-btn>
                    </v-layout>
                </v-container>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<style scoped>

</style>