<template>
  <v-container>
    <v-row
      justify="center"
      align="center"
    >
      <v-col cols="12">
        <h2
          class="text-center mt-4 font-weight-regular"
          style="color: #1876D3"
        >
          Enter What You Want To Catch Up On.
        </h2>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-card class="py-5 px-5">
          <v-row>
            <v-col
              cols="12"
              class="px-5 py-5"
            >
              <v-form
                ref="form"
                class="d-flex align-center justify-center"
                lazy-validation
                @submit.prevent="onAddTodo"
              >
                <v-text-field
                  v-model="enteredValue"
                  label="Enter Todo"
                  placeholder="Start Adding..."
                  filled
                  validate-on-blur
                  rounded
                  :rules="[
                    v => !!v || 'Empty field'
                  ]"
                  dense
                />

                <v-btn
                  color="primary"
                  width="150px"
                  type="submit"
                  class="ml-5 mb-5 "
                >
                  Add
                </v-btn>
              </v-form>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <TodoResults
          v-if="todos.length >= 1"
          :todos="todos"
          @onDeleteTodo="onDeleteTodo"
        />
        <h1
          v-else
          class="text-center mt-5 font-weight-regular"
          style="color:#1876D3"
        >
          Add Your Tasks And Make Your Day!
        </h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Ref } from 'nuxt-property-decorator';

@Component
export default class Index extends Vue {
  @Ref('form') form!: HTMLFormElement

  enteredValue = '';

  todos: Array<string> = [];

  onAddTodo () {
    if (this.form.validate()) {
      this.todos.push(this.enteredValue);
      this.enteredValue = '';
    }
  }

  onDeleteTodo (index: string | number) {
    const remainingTodo = this.todos.filter((_item, indx) => indx !== index);
    this.todos = remainingTodo;
  }
}
</script>
