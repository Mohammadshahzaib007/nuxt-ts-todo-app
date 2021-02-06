<template>
  <div>
    <v-card
      v-for="(todo, i) in todos"
      :key="i"
      class="mt-3"
    >
      <v-list>
        <v-list-item>
          <v-list-item-icon>
            <v-btn
              icon
              color="primary"
              @click="removeTodo(i)"
            >
              <!-- @click="$emit('onDeleteTodo', i)" -->
              <v-icon>
                mdi-delete-sweep
              </v-icon>
            </v-btn>
            <!-- <v-icon
          color="primary"
          size="30"
        >
          mdi-delete-sweep
        </v-icon> -->
          </v-list-item-icon>

          <v-list-item-title style="font-size: 1.25rem">
            {{ todo }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator';
import { store } from '../store';

@Component
export default class TodoResults extends Vue {
//  @Prop()
  // array of todos which we are looping throught in template and rendering it
  //  todos!: Array<string>;

  // emiting event for deleting todo and passing index of the todo
  //  emit = ['onDeleteTodo']

  // after using vuex

  // global state of todos

  public get todos () : Array<string> {
    return store.state.todo.list;
  }

  // deleting todo
  removeTodo (index:number) {
    store.commit.REMOVE_TODO(index);
  }
};
</script>

<style scoped>

</style>
