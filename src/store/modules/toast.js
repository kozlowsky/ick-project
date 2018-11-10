import {OPEN_TOAST} from "../actions/toast";

const state = {
    toast: null
};

const mutations = {
    [OPEN_TOAST]: (state, payload) => {
        state.toast = payload;
    }
}

export default {
    state,
    mutations
}