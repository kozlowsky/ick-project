<script>
    import {LOGIN_USER} from "../store/actions/user";

    export default {
        name: "Login",
        data() {
            return {
                user_login: '',
                user_password: ''
            }
        },
        methods: {
            loginUser() {
                this.$store.dispatch(LOGIN_USER, {
                    login: this.user_login,
                    password: this.user_password
                }).then(() => {

                    this.successfulToast('Zalogowany pomyślnie!');

                    console.log(this.$route.params.next)
                    
                    this.$router.push({name: this.$route.params.next})
                  
                }).catch(err => {
                    this.errorToast('Login i hasło są niepoprawne!');
                })
            }
        }
    }
</script>

<template>
    <v-container class="background-image" fill-height fluid>
        <v-layout>
            <v-layout align-center justify-center>
                <v-card width="500">
                    <v-card-title>
                        <v-layout justify-center>
                            <h4 class="display-1">Zaloguj się</h4>
                        </v-layout>
                    </v-card-title>
                    <v-card-text>
                        <v-form>
                            <v-layout column>
                                <v-text-field
                                        v-model="user_login"
                                        prepend-icon="person"
                                        label="Login">
                                </v-text-field>
                                <v-text-field
                                        v-model="user_password"
                                        prepend-icon="lock"
                                        type="password"
                                        label="Skomplikowany ciąg znaków">
                                </v-text-field>

                                <v-btn @click="loginUser" color="success">Zaloguj się</v-btn>
                                <v-btn color="error" @click="$router.push('/register')">Załóż konto</v-btn>
                            </v-layout>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-layout>
        </v-layout>
    </v-container>
</template>

<style scoped>
    .background-image {
        background-image: url("../assets/pexels-photo-963063.jpeg");
        background-size: cover;
    }
</style>
