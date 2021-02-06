import { createDirectStore } from 'direct-vuex';

// Modules
import todo from './module/todo';

const { store, moduleActionContext } = createDirectStore({
  modules: {
    todo
  }
});

export { moduleActionContext, store };
