import {LOGIN_USER} from '../actions/user'

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

            if (rootGetters.isUserLoggedIn) resolve();
            else reject();
        });
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}