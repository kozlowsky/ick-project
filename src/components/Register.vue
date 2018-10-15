<script>
    export default {
        name: "Regiter",
    }
</script>

<template>
    <v-container class="background-image" fill-height fluid>
        <v-layout align-center justify-center>
            <v-card scrollable>
                <v-card-title>
                    <v-layout justify-center>
                        <h4 class="display-1">Załóż konto</h4>
                    </v-layout>
                </v-card-title>
                <v-card-text>
                    <v-form>
                        <v-layout column>
                            <v-container grid-list-xl fluid>
                                <v-layout row wrap>
                                    <v-flex xs12 md6>
                                        <v-text-field prepend-icon="person" label="Imię"></v-text-field>
                                    </v-flex>
                                    <v-flex xs12 md6>
                                        <v-text-field prepend-icon="person" label="Nazwisko"></v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout row wrap>
                                    <v-flex xs12 md6>
                                        <v-text-field prepend-icon="home" label="Miasto"></v-text-field>
                                    </v-flex>
                                    <v-flex xs12 md6>
                                        <v-text-field prepend-icon="home" label="Ulica"></v-text-field>
                                    </v-flex>
                                </v-layout>

                                <v-layout row wrap>
                                    <v-flex xs12 md6>
                                        <v-text-field prepend-icon="person" label="Login"></v-text-field>
                                    </v-flex>
                                    <v-flex xs12 md6>
                                        <v-text-field prepend-icon="mail" type="email"
                                                      label="E-mail"></v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout row wrap>
                                    <v-flex xs12 md6>
                                        <v-text-field prepend-icon="lock" type="password"
                                                      label="Hasło"></v-text-field>
                                    </v-flex>
                                    <v-flex xs12 md6>
                                        <v-text-field prepend-icon="lock" type="password"
                                                      label="Powtórz hasło"></v-text-field>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                            <a href="#">Przeczytaj regulamin</a>
                            <v-checkbox label="Zaakceptuj regulamin serwisu"></v-checkbox>
                            <v-btn class="success">Załóż konto</v-btn>
                        </v-layout>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-layout>
    </v-container>
</template>

<style scoped>
    .background-image {
        background-image: url("../assets/pexels-photo-726478.jpeg");
        background-size: cover;
    }
</style>