import { defineModule } from 'direct-vuex';
import { moduleActionContext } from '../index';
import { RootState as State } from '../types/index';

const todo = defineModule({
  state: (): State => ({
    list: []
  }),
  mutations: {
    // adding todo in list of array
    ADD_TODO (state: State, text: string) {
      state.list.push(text);
    },

    // removing selected todo from list
    REMOVE_TODO (state: State, index: number) {
      const remainingTods: Array<string> = state.list.filter((_item: string, idx: number) => idx !== index);

      state.list = remainingTods;
    }
  }
});

export default todo;

// For Action types.
// Refer Direct-vuex documentation.
const modActionContext = (context: any) => moduleActionContext(context, todo);

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
