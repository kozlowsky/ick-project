<script>
    import {maxLength, minLength, sameAs, required, email} from "vuelidate/src/validators/";

    export default {
        name: "Register",
        data() {
            return {
                name: '',
                surname: '',
                city: '',
                street: '',
                login: '',
                email: '',
                password: '',
                password_repeat: '',

                rules_checkbox: false
            }
        },
        validations: {
            name: {
                maxLength: maxLength(20),
                minLength: minLength(3),
                required
            },
            surname: {
                maxLength: maxLength(30),
                minLength: minLength(3),
                required
            },
            login: {
                maxLength: maxLength(20),
                minLength: minLength(4),
                required
            },
            email: {
                email,
                required
            },
            password: {
                maxLength: maxLength(25),
                minLength: minLength(5),
                required
            },
            password_repeat: {
                sameAs: sameAs('password'),
                required
            }
        },
        computed: {
            nameErrors() {
                const errors = [];
                if (!this.$v.name.$dirty) return errors;
                !this.$v.name.required && errors.push('To pole jest wymagane');
                !this.$v.name.minLength && errors.push('Imię powinno się składać z przynajmniej 3 znaków');
                !this.$v.name.maxLength && errors.push('Imię nie może być dłuższe, niż 20 znaków');
                return errors;
            },
            surnameErrors() {
                const errors = [];
                if (!this.$v.surname.$dirty) return errors;
                !this.$v.surname.required && errors.push('To pole jest wymagane');
                !this.$v.surname.minLength && errors.push('Nazwisko powinno się składać z przynajmniej 3 znaków');
                !this.$v.surname.maxLength && errors.push('Nazwisko nie może być dłuższe, niż 30 znaków');
                return errors;
            },
            loginErrors() {
                const errors = [];
                if (!this.$v.login.$dirty) return errors;
                !this.$v.login.required && errors.push('To pole jest wymagane');
                !this.$v.login.minLength && errors.push('Login powinien się składać z przynajmniej 4 znaków');
                !this.$v.login.maxLength && errors.push('Login nie może być dłuższy, niż 20 znaków');
                return errors;
            },
            emailErrors() {
                const errors = [];
                if (!this.$v.email.$dirty) return errors;
                !this.$v.email.required && errors.push('To pole jest wymagane');
                !this.$v.email.email && errors.push('Podany e-mail ma niepoprawny format');
                return errors;
            },
            passwordErrors() {
                const errors = [];
                if (!this.$v.password.$dirty) return errors;
                !this.$v.password.required && errors.push('To pole jest wymagane');
                !this.$v.password.minLength && errors.push('Hasło powinno się składać z przynajmniej 5 znaków');
                !this.$v.password.maxLength && errors.push('Hasło nie może być dłuższe, niż 25 znaków');
                return errors;
            },
            passwordRepeatErrors() {
                const errors = [];
                if (!this.$v.password_repeat.$dirty) return errors;
                !this.$v.password_repeat.required && errors.push('To pole jest wymagane');
                !this.$v.password_repeat.sameAs && errors.push('Powtórzone hasło jest inne');
                return errors;
            },
            confirmationButton() {
                return this.$v.name.$invalid || this.$v.surname.$invalid || this.$v.login.$invalid || this.$v.email.$invalid || this.$v.password.$invalid || this.$v.password_repeat.$invalid;
            }
        },
        methods: {
            registerUser() {
                if (this.rules_checkbox) {
                    this.successfulToast("Rejestracja przebiegła pomyślnie!");
                    this.$router.push('/');
                }
                else
                    this.errorToast("Zaakceptuj regulamin!");
                
            }
        }
    }
</script>

<template>
    <v-container class="background-image" fill-height fluid>
        <v-layout align-center justify-center>
            <v-flex xs12 md8>
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
                                            <v-text-field
                                                    v-model="name"
                                                    :error-messages="nameErrors"
                                                    prepend-icon="person"
                                                    label="Imię"
                                                    @blur="$v.name.$touch()"
                                                    @input="$v.name.$touch()"></v-text-field>
                                        </v-flex>
                                        <v-flex xs12 md6>
                                            <v-text-field v-model="surname"
                                                          :error-messages="surnameErrors"
                                                          prepend-icon="person"
                                                          label="Nazwisko"
                                                          @blur="$v.surname.$touch()"
                                                          @input="$v.surname.$touch()"></v-text-field>
                                        </v-flex>
                                    </v-layout>
                                    <v-layout row wrap>
                                        <v-flex xs12 md6>
                                            <v-text-field v-model="city"
                                                          prepend-icon="home"
                                                          label="Miasto"></v-text-field>
                                        </v-flex>
                                        <v-flex xs12 md6>
                                            <v-text-field v-model="street"
                                                          prepend-icon="home"
                                                          label="Ulica"></v-text-field>
                                        </v-flex>
                                    </v-layout>

                                    <v-layout row wrap>
                                        <v-flex xs12 md6>
                                            <v-text-field v-model="login"
                                                          :error-messages="loginErrors"
                                                          prepend-icon="person"
                                                          label="Login"
                                                          @blur="$v.login.$touch()"
                                                          @input="$v.login.$touch()"></v-text-field>
                                        </v-flex>
                                        <v-flex xs12 md6>
                                            <v-text-field v-model="email"
                                                          :error-messages="emailErrors"
                                                          prepend-icon="mail"
                                                          type="email"
                                                          label="E-mail"
                                                          @blur="$v.email.$touch()"
                                                          @input="$v.email.$touch()"></v-text-field>
                                        </v-flex>
                                    </v-layout>
                                    <v-layout row wrap>
                                        <v-flex xs12 md6>
                                            <v-text-field v-model="password"
                                                          :error-messages="passwordErrors"
                                                          prepend-icon="lock"
                                                          type="password"
                                                          label="Hasło"
                                                          @blur="$v.password.$touch()">
                                                @input="$v.password.$touch()">
                                            </v-text-field>
                                        </v-flex>
                                        <v-flex xs12 md6>
                                            <v-text-field
                                                    v-model="password_repeat"
                                                    :error-messages="passwordRepeatErrors"
                                                    prepend-icon="lock"
                                                    type="password"
                                                    label="Powtórz hasło"
                                                    @blur="$v.password_repeat.$touch()"
                                                    @input="$v.password_repeat.$touch()"
                                            ></v-text-field>
                                        </v-flex>
                                    </v-layout>
                                </v-container>
                                <a href="#">Przeczytaj regulamin</a>
                                <v-checkbox
                                        v-model="rules_checkbox"
                                        label="Zaakceptuj regulamin serwisu"></v-checkbox>
                                <v-btn @click="registerUser()" :disabled="confirmationButton" class="success">Załóż
                                    konto
                                </v-btn>
                            </v-layout>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<style scoped>
    .background-image {
        background-image: url("../assets/pexels-photo-726478.jpeg");
        background-size: cover;
    }
</style>