<script>
    import {OPEN_TOAST} from "../../store/actions/toast";


    export default {
        name: "Toast",
        data() {
            return {
                visible: false,
                toast: {
                    text: '',
                    timeout: 3000,
                    color: 'gray'
                }
            }
        },
        created() {
            this.$store.watch(state => state.toast.toast, () => {
                const msg = this.$store.state.toast.toast;
                if (msg !== null) {
                    this.visible = true;
                    this.toast = this.$store.state.toast.toast;
                    this.$store.commit(OPEN_TOAST, null)
                }
            })
        }
    }

</script>

<template>
    <v-snackbar v-model="visible" :timeout="toast.timeout" :right="true" :top="true" :color="toast.color">
        {{ toast.text }}
        <v-btn flat @click.native="visible = false">Zamknij</v-btn>
    </v-snackbar>
</template>

<style scoped>

</style>