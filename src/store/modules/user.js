import {LOGIN_USER} from '../actions/user'
import {LOGOUT_USER} from "../actions/user";

const state = {
    user: null
};

const getters = {
    isUserLoggedIn: state => !!state.user,
    getUser: state => state.user
}

const mutations = {
    [LOGIN_USER]: (state, payload) => {
        state.user = payload;
    },
    [LOGOUT_USER]: (state) => {
        state.user = null;
    }
}

const actions = {
    [LOGIN_USER]: ({commit, rootGetters}, loginData) => {
        return new Promise((resolve, reject) => {
            let users = rootGetters.getUsers;
            if (loginData.login === 'user' && loginData.password === 'password') {
                commit(LOGIN_USER, users[0]);
            }
            else if (loginData.login === 'admin' && loginData.password === 'password') {
                commit(LOGIN_USER, users[1])
            }

            rootGetters.isUserLoggedIn ? resolve() : reject();
        });
    },
    [LOGOUT_USER]: ({commit}) => {
        commit(LOGOUT_USER);
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}
