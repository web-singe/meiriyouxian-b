import Vue from 'vue';
import Vuex from 'vuex';
import { getCookies, setCookies, removeCookies } from '@/utils/userCookie';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    collapsed: false,
    user: getCookies(),
  },
  mutations: {
    setcollapsed(state) {
      state.collapsed = !state.collapsed;
    },
    setuser(state, payload) {
      state.user = payload;
    },
    removeuser(state) {
      state.user = {
        username: '',
        appkey: '',
        role: '',
        email: '',
      };
    },
  },
  actions: {
    setcollapsed({ commit }) {
      commit('setcollapsed');
    },
    setuserInfo({ commit }, info) {
      commit('setuser', info);
      setCookies(info);
    },
    removeuserInfo({ commit }) {
      commit('removeuser');
      removeCookies();
    },
  },
  modules: {
  },
});
