<script>
import axios from 'axios';

export default {
    name: "AdvertListElement",
    props: ['breed', 'id'],
    data () {
        return {
            image: ''
        }
    },
    created () {
        this.reloadImage()

    },
    watch: {
        breed: function () {
            this.reloadImage()
        }
    },
    methods: {
        reloadImage () {
            if (this.breed === '') {
                this.image = 'https://source.unsplash.com/400x400/?animal,funny,lama&sig=' + this.id
            } else {

                axios.get('https://dog.ceo/api/breed/' + this.breed + '/images/random?sig=' + this.id).then((response) => {
                    this.image = response.data.message
                })
            }
        },
        onDetailsClick () {
            this.$router.push("advert/1")
        }
    }
}
</script>

<template>
    <v-hover>
        <v-card slot-scope="{ hover }">
            <v-img :src="image" aspect-ratio=1>
                <v-expand-transition>
                    <div v-if="hover" class="white black--text v-card--reveal" style="height: 100%;">
                        <v-layout pa-3 fill-height class="title text-truncate text-no-wrap" column>
                            <v-flex class="display-1 font-weight-bold " xs1 sm1 md1 lg1>
                                Tosiek
                            </v-flex>
                            <v-flex mt-2 xs1 sm1 md1 lg1>
                                Wiek: {{Math.floor((Math.random() * 10) + 1)}}
                            </v-flex>
                            <v-flex xs1 sm1 md1 lg1>

                            </v-flex>
                            <v-spacer></v-spacer>
                            <v-flex xs1 sm1 md1 lg1>

                                <v-btn @click="onDetailsClick" outline block color="black">Details</v-btn>

                            </v-flex>
                        </v-layout>
                    </div>
                </v-expand-transition>
            </v-img>

        </v-card>
    </v-hover>
</template>

<style scoped>
.v-card--reveal {
  opacity: 0.8;
}
</style>