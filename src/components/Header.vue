<script>
import SearchPanel from "./SearchPanel";

export default {
    name: "HomePage",
    components: { SearchPanel }

}
</script>

<template>
    <v-img class="header-image" :src="require('../assets/pexels-photo-213399.jpeg')">
        <v-container>
            <v-layout row wrap align-center justify-center white--text>
                <!--<div class="text-xs-center">-->
                <!--<h1 class="display-2 font-weight-medium ">Przygarnij.Go</h1>-->
                <!--<p class="headline">Witaj w schronisku on-line!</p>-->
                <!--</div>-->

                <v-flex xs12 sm12 md8 lg8>
                    <SearchPanel @onSearchChanged="$router.push('search')"/>
                    <div class="text-sm-center mt-5">
                        <p class="headline">Witaj w schronisku on-line!</p>
                    </div>
                </v-flex>

                <div class="arrow-down">
                    <v-btn fab icon @click="$vuetify.goTo('#aboutApplication')">
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
