import { createStore } from "vuex";
import user from "./user";

export default createStore({
  state: () => ({
    all: [],
  }),
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    user,
  },
});
