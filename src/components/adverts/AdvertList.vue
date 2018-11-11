<script>
import AdvertListElement from './AdvertListElement'

export default {
    name: "AdvertList",
    props: ['breed'],
    components: { AdvertListElement },
    data () {
        return {
            advertsCount: 10
        }
    }

}
</script>

<template>
    <v-layout  align-center justify-space-around row wrap>
        <v-flex v-for="i in advertsCount" :key="i" ma-1 sm12 xs12 lg3 md3>
            <AdvertListElement :breed="breed" :id="i"/>
        </v-flex>
    </v-layout>
</template>

<style scoped>
</style>