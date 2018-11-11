<script>
    import Advert from "../components/adverts/Advert";

    export default {
        name: "Advertisment",
        components: {Advert},
        data() {
            return {
                adId: null
            }
        },
        created() {
            this.adId = this.$route.params.id;
        }
    }
</script>

<template>
    <v-container fluid>
        <Advert :adId="adId"/>
    </v-container>
</template>

<style scoped>

</style>