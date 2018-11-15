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
                                                        <div class="headline">Przebyte choroby</div>
                                                    </v-flex>
                                                    <v-layout row wrap justify-space-between align-center>
                                                        <v-flex>
                                                            <v-text-field label="Nazwa choroby"
                                                                          v-model="newDisease.name"></v-text-field>
                                                            <v-menu
                                                                    ref="startDateMenu"
                                                                    :close-on-content-click="false"
                                                                    v-model="startDateMenu"
                                                                    :nudge-right="40"
                                                                    :return-value.sync="newDisease.startDate"
                                                                    lazy
                                                                    transition="scale-transition"
                                                                    offset-y
                                                                    full-width
                                                                    min-width="290px"
                                                            >
                                                                <v-text-field
                                                                        slot="activator"
                                                                        v-model="newDisease.startDate"
                                                                        label="Rozpoczęcie choroby"
                                                                        prepend-icon="event"
                                                                        readonly
                                                                ></v-text-field>
                                                                <v-date-picker v-model="newDisease.startDate" no-title
                                                                               scrollable>
                                                                    <v-spacer></v-spacer>
                                                                    <v-btn flat color="primary"
                                                                           @click="startDateMenu = false">
                                                                        Cancel
                                                                    </v-btn>
                                                                    <v-btn flat color="primary"
                                                                           @click="$refs.startDateMenu.save(newDisease.startDate)">
                                                                        OK
                                                                    </v-btn>
                                                                </v-date-picker>
                                                            </v-menu>
                                                            <v-menu
                                                                    ref="endDateMenu"
                                                                    :close-on-content-click="false"
                                                                    v-model="endDateMenu"
                                                                    :nudge-right="40"
                                                                    :return-value.sync="newDisease.endDate"
                                                                    lazy
                                                                    transition="scale-transition"
                                                                    offset-y
                                                                    full-width
                                                                    min-width="290px"
                                                            >
                                                                <v-text-field
                                                                        slot="activator"
                                                                        v-model="newDisease.endDate"
                                                                        label="Zakończenie choroby"
                                                                        prepend-icon="event"
                                                                        readonly
                                                                ></v-text-field>
                                                                <v-date-picker v-model="newDisease.endDate" no-title
                                                                               scrollable>
                                                                    <v-spacer></v-spacer>
                                                                    <v-btn flat color="primary"
                                                                           @click="endDateMenu = false">
                                                                        Cancel
                                                                    </v-btn>
                                                                    <v-btn flat color="primary"
                                                                           @click="$refs.endDateMenu.save(newDisease.endDate)">
                                                                        OK
                                                                    </v-btn>
                                                                </v-date-picker>
                                                            </v-menu>
                                                        </v-flex>
                                                        <v-flex shrink>
                                                            <v-btn large flat dark icon color="green"
                                                                   @click="addDisease">
                                                                <v-icon>add</v-icon>
                                                            </v-btn>
                                                        </v-flex>
                                                    </v-layout>
                                                    <v-divider></v-divider>
                                                    <v-layout>
                                                        <v-flex>
                                                            <v-list three-line>
                                                                <v-list-tile v-for="(disease, index) in diseases"
                                                                             :key="disease.name">
                                                                    <v-layout row wrap justify-space-between
                                                                              align-center>
                                                                        <v-flex>
                                                                            <v-list-tile-content>
                                                                                <v-list-tile-title class="subheading">
                                                                                    Nazwa choroby: {{disease.name}}
                                                                                </v-list-tile-title>
                                                                                <v-list-tile-subtitle class="body-1">
                                                                                    Czas trwania choroby:
                                                                                    {{disease.startDate}} -
                                                                                    {{disease.endDate}}
                                                                                </v-list-tile-subtitle>
                                                                            </v-list-tile-content>
                                                                        </v-flex>
                                                                        <v-flex shrink>
                                                                            <v-btn large flat dark icon color="red"
                                                                                   @click="diseases.splice(index,1)">
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
                                                            <v-text-field label="Tytuł"
                                                                          v-model="newInfo.name"></v-text-field>
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
                                                                             :key="info.name">
                                                                    <v-layout row wrap justify-space-between
                                                                              align-center>
                                                                        <v-flex>
                                                                            <v-list-tile-content>
                                                                                <v-list-tile-title class="subheading">
                                                                                    Tytuł: {{info.name}}
                                                                                </v-list-tile-title>
                                                                                <v-list-tile-subtitle class="body-1">
                                                                                    Treść: {{info.value}}
                                                                                </v-list-tile-subtitle>
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
                                <v-btn class="info">Wyślij stronę do akceptacji
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
                diseases: [],
                newDisease: {
                    name: '',
                    startDate: '',
                    endDate: '',
                },
                infos: [],
                newInfo: {
                    name: '',
                    value: '',
                },
                startDateMenu: false,
                endDateMenu: false,
            }
        },
        methods: {
            registerUser() {

                this.successfulToast("Rejestracja przebiegła pomyślnie!");
                this.$router.push('/');
            },
            addDisease() {
                this.diseases = [...this.diseases, this.newDisease];
                this.newDisease = {name: '', startDate: '', endDate: ''}
            },
            addInfo() {
                this.infos = [...this.infos, this.newInfo];
                this.newInfo = {name: '', value: ''}
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
