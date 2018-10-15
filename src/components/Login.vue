<script>
    export default {
        name: "Login"
    }
</script>

<template>
    <v-container fill-height>
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
                            <v-text-field prepend-icon="person" label="Login">

                            </v-text-field>
                            <v-text-field prepend-icon="lock" type="password" label="Skomplikowany ciąg znaków">

                            </v-text-field>
                            <v-btn color="success">Zaloguj się</v-btn>
                            <v-btn color="error" @click="$router.push('/register')">Załóż konto</v-btn>
                        </v-layout>
                    </v-form>
                </v-card-text>
            </v-card>
        </v-layout>
    </v-container>
</template>

<style scoped>

</style>