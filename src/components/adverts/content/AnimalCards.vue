<script>
    export default {
        name: "SpecieCards",
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
        <p class="headline">Karta chorób</p>
        <v-layout row wrap v-for="disease in advert.listOfDiseases" :key="disease.name">
            <v-flex xs12 md2>
                <p class="font-weight-medium">{{ disease.interval }}</p>
            </v-flex>
            <v-flex xs12 md2>
                <p class="font-weight-medium">{{ disease.name }}</p>
            </v-flex>
            <v-flex xs12 md8>
                <p>Maecenas ultricies viverra ligula, dignissim vehicula nibh convallis nec. Etiam vulputate scelerisque
                    nunc. In vel dapibus tellus.</p>
            </v-flex>
        </v-layout>
        <p class="headline">Karta szczepień</p>
        <v-layout row wrap v-for="vaccine in advert.listOfVaccines" :key="vaccine.name">
            <v-flex xs12 md2>
                <p class="font-weight-medium">{{ vaccine.date }}</p>
            </v-flex>
            <v-flex xs12 md2>
                <p class="font-weight-medium">{{ vaccine.name }}</p>
            </v-flex>
            <v-flex xs12 md8>
                <p>Maecenas ultricies viverra ligula, dignissim vehicula nibh convallis nec. Etiam vulputate scelerisque
                    nunc. In vel dapibus tellus.</p>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<style scoped>

</style>