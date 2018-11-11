<script>
    export default {
        name: "AdvertiserInfo",
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
        <v-layout row>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504.0830539112653!2d16.966439477965924!3d51.125376046283236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fea7444bac3a9%3A0x247b99f7e6bc22c!2sStefana+Drzewieckiego%2C+50-001+Wroc%C5%82aw%2C+Polska!5e0!3m2!1spl!2sis!4v1535501633344"
                    width="100%" height="300" frameborder="0" style="border:0; filter: grayscale(60%)"
                    allowfullscreen></iframe>
        </v-layout>
        <v-layout row wrap class="py-3">
            <v-flex xs12 md4>
                <v-layout row wrap>
                    <v-flex xs12 md4>
                        <p class="font-weight-medium">Sprzedawca</p>
                    </v-flex>
                    <v-flex xs12 md8>
                        <span>{{ advert.advertiserType }}</span><span v-if="advert.advertiserInfo"> - {{ advert.advertiserInfo }}</span>
                    </v-flex>
                </v-layout>
                <v-layout row wrap>
                    <v-flex xs12 md4>
                        <p class="font-weight-medium">Imię i nazwisko</p>
                    </v-flex>
                    <v-flex xs12 md8>
                        <span>{{ advert.advertiser }}</span>
                    </v-flex>
                </v-layout>
                <v-layout row wrap>
                    <v-flex xs12 md4>
                        <p class="font-weight-medium">Adres</p>
                    </v-flex>
                    <v-flex xs12 md8>
                        <span>{{ advert.address }}</span>
                    </v-flex>
                </v-layout>
                <v-layout row wrap>
                    <v-flex xs12 md4>
                        <p class="font-weight-medium">Numer kontaktowy</p>
                    </v-flex>
                    <v-flex xs12 md8>
                        <span>{{ advert.advertiserTelephone }}</span>
                    </v-flex>
                </v-layout>
            </v-flex>
            <v-flex xs12 md8>
                <v-layout row>
                    {{ $store.getters.lorem }}
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<style scoped>

</style>