<script>
    export default {
        name: "HomePage",
    }
</script>

<template>
    <v-img class="header-image" :src="require('../assets/pexels-photo-213399.jpeg')">
        <v-container fill-height>
            <v-layout align-center justify-center column white--text>
                <h1 class="display-4 font-weight-medium ">Przygarnij.Go</h1>
                <p class="headline">Witaj w schronisku on-line!</p>
                <div>
                    <v-btn color="success">Zaloguj się</v-btn>
                    <v-btn color="error">Zarejestruj się</v-btn>
                </div>
                <div class="arrow-down">
                    <v-btn fab icon>
                        <v-icon x-large fab color="white">
                            keyboard_arrow_down
                        </v-icon>
                    </v-btn>
                </div>
            </v-layout>
        </v-container>
    </v-img>
</template>

<style scoped>
    .header-image {
        height: 100vh !important;
    }

    .arrow-down {
        position: absolute;
        bottom: 25px;
    }
</style>