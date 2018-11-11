import Vue from "vue";
import {mapMutations} from "vuex";
import {OPEN_TOAST} from "../store/actions/toast";

Vue.mixin({
    methods: {
        successfulToast(text) {
            this.OPEN_TOAST({
                text: text,
                color: 'success'
            })
        },
        errorToast(text) {
            this.OPEN_TOAST({
                text: text,
                color: 'error'
            })
        }
        , ...mapMutations({
            OPEN_TOAST: OPEN_TOAST
        })
    }
});