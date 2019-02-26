import Vue from 'vue'
import Vuex from 'vuex';
import AuthService from './services/auth.service';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    token: null,
    user: null,
  },
  getters: {
    USER: state => {
      return state.user;
    },
    IS_LOGIN: state => {
      return !!state.token;
    }
  },
  mutations: {
    SET_TOKEN: (state, payload) => {
      state.token = payload;
    },
    SET_USER: (state, payload) => {
      state.user = payload;
    }
  },
  actions: {
    LOG_IN: (context, payload) => {
      return AuthService.login(payload).then(async (token) => {
        const { user, access_token } = token;
        AuthService.storeToken(access_token);
        AuthService.setHeader(access_token);
        await context.commit('SET_TOKEN', access_token);

        AuthService.storeUser(user);
        await context.commit('SET_USER', user);
        return user;
      });
    }
  }
});

export default store;
