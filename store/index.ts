// import { RootState as State } from './types/index';

// export const state = (): State => ({
//   // list of added todo
//   list: []
// });

// export const mutations = {
//   // adding todo in list of array
//   ADD_TODO (state:State, text: string) {
//     state.list.push(text);
//   },

//   // removing selected todo from list
//   REMOVE_TODO (state:State, index:number) {
//     const remainingTods: Array<string> = state.list.filter((_item:string, idx:number) => idx !== index);

//     state.list = remainingTods;
//   }
// };

import { createDirectStore } from 'direct-vuex';
import Vue from 'vue';
import Vuex from 'vuex';

// Modules
import todo from './module/todo';

Vue.use(Vuex);

const { store, moduleActionContext } = createDirectStore({
  modules: {
    todo
  }
});

export { moduleActionContext, store };

// export type AppStore = typeof store
