import { createDirectStore } from 'direct-vuex';

// Modules
import todo from './module/todo';

const { store } = createDirectStore({
  modules: {
    todo
  }
});

export { store };
