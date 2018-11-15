<script>
    import AdvertInfo from "./content/AdvertInfo";
    import AnimalCards from "./content/AnimalCards"
    import AnimalPhotos from "./content/AnimalPhotos";
    import AdvertiserInfo from "./content/AdvertiserInfo";
    import SpecieWiki from "./content/SpecieWiki";

    export default {
        name: "Advert",
        props: ['adId'],
        components: {
            SpecieWiki,
            AdvertiserInfo,
            AnimalPhotos,
            AdvertInfo,
            AnimalCards
        },
        data() {
            return {
                tabs: [
                    'Opis ogłoszenia',
                    'Karty chorób i szczepień',
                    'Zdjęcia',
                    'Kontakt',
                    'Wiki'
                ],

                currentTab: 'tab-1',
            }
        }
    }
</script>

<template>
    <v-layout justify-center pt-5>
        <v-flex xs12 md8>
            <v-tabs
                    v-model="currentTab"
                    color="cyan"
                    slider-color="yellow"
                    grow
                    dark>
                <v-tab
                        v-for="(el, i) in tabs"
                        :key="i"
                        :href="`#tab-${i+1}`">
                    {{ el }}
                </v-tab>
            </v-tabs>

            <v-tabs-items v-model="currentTab" >
                <v-tab-item
                        value="tab-1">
                    <v-card flat>
                        <v-card-text>
                            <AdvertInfo :adId="adId" />
                        </v-card-text>
                    </v-card>
                </v-tab-item>
                <v-tab-item
                        value="tab-2">
                    <v-card flat height="600">
                        <v-card-text>
                            <AnimalCards :adId="adId"/>
                        </v-card-text>
                    </v-card>
                </v-tab-item>
                <v-tab-item
                        value="tab-3">
                    <v-card flat>
                        <v-card-text>
                            <AnimalPhotos :adId="adId"/>
                        </v-card-text>
                    </v-card>
                </v-tab-item>
                <v-tab-item
                        value="tab-4">
                    <v-card flat>
                        <v-card-text>
                            <AdvertiserInfo :adId="adId"/>
                        </v-card-text>
                    </v-card>
                </v-tab-item>
                <v-tab-item
                        value="tab-5">
                    <v-card flat>
                        <v-card-text>
                            <SpecieWiki :adId="adId"/>
                        </v-card-text>
                    </v-card>
                </v-tab-item>
            </v-tabs-items>
        </v-flex>
    </v-layout>
</template>

<style scoped>

</style>
