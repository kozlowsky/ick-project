<script>
    import Header from '../components/Header'
    import AboutApplication from '../components/AboutApplication'
    import AboutAuthors from '../components/AboutAuthors'
    import Footer from '../components/Footer'
    import Advert from '../components/adverts/Advert'

    export default {
        name: "HomePage",
        components: {
            AboutAuthors,
            Header,
            AboutApplication,
            Footer,
            Advert
        }
    }
</script>

<template>
    <div>
        <Header mb-4/>
        <AboutApplication id="aboutApplication"/>
        <v-parallax :src="require('../assets/pexels-photo-1126384.jpeg')" height="300">
            <v-container fill-height>
                <v-layout align-center justify-center>
                    <h1 class="display-2">O Autorach</h1>
                </v-layout>
            </v-container>
        </v-parallax>
        <AboutAuthors/>
        <Footer/>
    </div>
</template>

<style scoped>

</style>