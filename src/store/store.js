import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  qrCodes: []
};

const mutations = {
  updateCodes(state, payload) {
    state.qrCodes.push(payload);
  }
};

export default new Vuex.Store({
  state,
  mutations
});
