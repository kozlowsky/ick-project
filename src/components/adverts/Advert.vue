<script>
    export default {
        name: "Advert",
        data() {
            return {
                tabs: [
                    'Opis ogłoszenia',
                    'Karty chorób i szczepień',
                    'Zdjęcia',
                    'Ogłoszeniodawca',
                    'Wiki'
                ],

                currentTab: 'tab-1',


            }
        }
    }
</script>

<template>
    <div>
        <v-tabs
                v-model="currentTab"
                color="cyan"
                slider-color="yellow"
                grow>
            <v-tab
                    v-for="(el, i) in tabs"
                    :key="i"
                    :href="`#tab-${i+1}`">
                {{ el }}
            </v-tab>
        </v-tabs>

        <v-tabs-items v-model="currentTab">
            <v-tab-item
                    value="tab-1">
                <v-card flat height="600">
                    <v-card-text></v-card-text>
                </v-card>
            </v-tab-item>
            <v-tab-item
                    value="tab-2">
                <v-card flat height="600">
                    <v-card-text></v-card-text>
                </v-card>
            </v-tab-item>
            <v-tab-item
                    value="tab-3">
                <v-card flat height="600">
                    <v-card-text></v-card-text>
                </v-card>
            </v-tab-item>
            <v-tab-item
                    value="tab-4">
                <v-card flat height="600">
                    <v-card-text></v-card-text>
                </v-card>
            </v-tab-item>
            <v-tab-item
                    value="tab-5">
                <v-card flat height="600">
                    <v-card-text></v-card-text>
                </v-card>
            </v-tab-item>
        </v-tabs-items>
    </div>
</template>

<style scoped>

</style>