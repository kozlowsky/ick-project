<template>
    <v-container class="background-image" fill-height fluid>
        <v-layout align-center justify-center>
            <v-flex xs12 lg10>
                <v-card scrollable>
                    <v-card-title>
                        <v-layout justify-center>
                            <h4 class="display-1">Dodaj nową stronę w encyklopedii</h4>
                        </v-layout>
                    </v-card-title>
                    <v-card-text>
                        <v-form>
                            <v-layout column>
                                <v-container grid-list-xl fluid>
                                    <v-layout row wrap>
                                        <v-flex>
                                            <v-text-field label="Gatunek oraz rasa"></v-text-field>
                                        </v-flex>
                                    </v-layout>
                                    <v-layout row wrap>
                                        <v-flex xs12>
                                            <v-textarea label="Opis"></v-textarea>
                                        </v-flex>
                                    </v-layout>
                                    <v-layout>
                                        <v-flex class="mx-2">
                                            <v-layout row wrap>
                                                <v-flex class="elevation-1">
                                                    <v-flex>
                                                        <div class="headline">Wymiary</div>
                                                    </v-flex>
                                                    <v-layout row wrap justify-space-between align-center>
                                                        <v-flex>
                                                            <v-layout row wrap>
                                                                <v-flex>
                                                                    <v-text-field label="Wymiar (np. Waga, Wysokość)"
                                                                                  v-model="newDimension.name"></v-text-field>
                                                                </v-flex>
                                                                <v-flex>
                                                                    <v-select label="Jednostka" :items="units"
                                                                                v-model="newDimension.unit"></v-select>
                                                                </v-flex>
                                                            </v-layout>
                                                            <v-layout row wrap>
                                                                <v-flex>
                                                                    <v-text-field label="Wartość dla samca (lub jednyna wartość)"
                                                                                  v-model="newDimension.valueMale"></v-text-field>
                                                                </v-flex>
                                                                <v-flex>
                                                                    <v-text-field label="Wartość dla samicy"
                                                                                  v-model="newDimension.valueFemale"></v-text-field>
                                                                </v-flex>
                                                            </v-layout>
                                                        </v-flex>
                                                        <v-flex shrink>
                                                            <v-btn large flat dark icon color="green"
                                                                   @click="addDimension">
                                                                <v-icon>add</v-icon>
                                                            </v-btn>
                                                        </v-flex>
                                                    </v-layout>
                                                    <v-divider></v-divider>
                                                    <v-layout>
                                                        <v-flex>
                                                            <v-list three-line>
                                                                <v-list-tile v-for="(dimension, index) in dimensions"
                                                                             :key="dimension.name">
                                                                    <v-layout row wrap justify-space-between
                                                                              align-center>
                                                                        <v-flex>
                                                                            <v-list-tile-content>
                                                                                <v-list-tile-title class="subheading">
                                                                                    {{dimension.name}}
                                                                                </v-list-tile-title>
                                                                                <v-list-tile-subtitle class="body-1">
                                                                                    <span v-if="dimension.valueFemale !== ''">
                                                                                        Samiec: {{dimension.valueMale}} {{dimension.unit}}
                                                                                    </span>
                                                                                    <span v-if="dimension.valueFemale === ''">
                                                                                        {{dimension.valueMale}} {{dimension.unit}}
                                                                                    </span>
                                                                                    <span v-if="dimension.valueFemale !== ''">
                                                                                        Samica: {{dimension.valueFemale}} {{dimension.unit}}
                                                                                    </span>
                                                                                </v-list-tile-subtitle>
                                                                            </v-list-tile-content>
                                                                        </v-flex>
                                                                        <v-flex shrink>
                                                                            <v-btn large flat dark icon color="red"
                                                                                   @click="dimensions.splice(index,1)">
                                                                                <v-icon>delete</v-icon>
                                                                            </v-btn>
                                                                        </v-flex>
                                                                    </v-layout>
                                                                </v-list-tile>
                                                            </v-list>
                                                        </v-flex>
                                                    </v-layout>
                                                </v-flex>
                                            </v-layout>
                                        </v-flex>
                                        <v-flex class="mx-2">
                                            <v-layout row wrap>
                                                <v-flex class="elevation-1">
                                                    <v-flex>
                                                        <div class="headline">Dodatkowe informacje</div>
                                                    </v-flex>
                                                    <v-layout row wrap justify-space-between align-center>
                                                        <v-flex>
                                                            <v-text-field label="Treść"
                                                                          v-model="newInfo.value"></v-text-field>
                                                        </v-flex>
                                                        <v-flex shrink>
                                                            <v-btn large flat dark icon color="green"
                                                                   @click="addInfo">
                                                                <v-icon>add</v-icon>
                                                            </v-btn>
                                                        </v-flex>
                                                    </v-layout>
                                                    <v-divider></v-divider>
                                                    <v-layout>
                                                        <v-flex>
                                                            <v-list three-line>
                                                                <v-list-tile v-for="(info, index) in infos"
                                                                             :key="info.value">
                                                                    <v-layout row wrap justify-space-between
                                                                              align-center>
                                                                        <v-flex>
                                                                            <v-list-tile-content>
                                                                                <v-list-tile-title class="subheading">
                                                                                    Tytuł: {{info.value}}
                                                                                </v-list-tile-title>
                                                                            </v-list-tile-content>
                                                                        </v-flex>
                                                                        <v-flex shrink>
                                                                            <v-btn large flat dark icon color="red"
                                                                                   @click="infos.splice(index,1)">
                                                                                <v-icon>delete</v-icon>
                                                                            </v-btn>
                                                                        </v-flex>
                                                                    </v-layout>
                                                                </v-list-tile>
                                                            </v-list>
                                                        </v-flex>
                                                    </v-layout>
                                                </v-flex>
                                            </v-layout>
                                        </v-flex>
                                    </v-layout>
                                    <v-layout row wrap>
                                        <v-flex>
                                            <v-text-field label="Dodaj zdjęcie"
                                                          prepend-icon='attach_file'></v-text-field>
                                        </v-flex>
                                    </v-layout>
                                </v-container>
                                <v-btn
                                        class="info"
                                        @click="addEntry">
                                    Wyślij stronę do akceptacji
                                </v-btn>
                            </v-layout>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: "AddWikiEntry",
        data() {
            return {
                dimensions: [],
                newDimension: {
                    name: '',
                    unit: '',
                    valueMale: '',
                    valueFemale: ''
                },
                units: [
                    'kg',
                    'g',
                    'cm',
                    'm'
                ],
                infos: [],
                newInfo: {
                    value: ''
                }
            }
        },
        methods: {
            addEntry() {
                this.successfulToast("Strona została wysłana do akceptacji");
                this.$router.push('/');
            },
            addDimension() {
                this.dimensions = [...this.dimensions, this.newDimension];
                this.newDimension = {name: '', unit: '', valueMale: '', valueFemale: ''}
            },
            addInfo() {
                this.infos = [...this.infos, this.newInfo];
                this.newInfo = {value: ''}
            }
        },
        mounted() {
        }
    }
</script>

<style scoped>
    .background-image {
        background-image: url("../assets/wiki-bg.jpg");
        background-size: cover;
    }
</style>
