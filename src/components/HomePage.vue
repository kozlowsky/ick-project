<script>
    import Header from './Header'
    import AboutApplication from './AboutApplication'
    import AboutAuthors from './AboutAuthors'
    import Footer from './Footer'

    export default {
        name: "HomePage",
        components: {
            AboutAuthors,
            Header,
            AboutApplication,
            Footer
        }
    }
</script>

<template>
    <div>
        <Header mb-4/>
        <AboutApplication id="aboutApplication"/>
        <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg" height="300">
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