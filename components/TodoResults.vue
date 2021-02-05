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
              @click="$emit('onDeleteTodo', i)"
            >
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
import { Vue, Component, Prop } from 'nuxt-property-decorator';

@Component
export default class TodoResults extends Vue {
 @Prop()
// array of todos which we are looping throught in template and rendering it
 todos!: Array<string>;

 // emiting event for deleting todo and passing index of the todo
 emit = ['onDeleteTodo']
};
</script>

<style scoped>

</style>
