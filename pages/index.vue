<template>
  <v-layout
    wrap
    row
  >
    <v-flex xs12>
      <Counter />
    </v-flex>
    <v-flex xs12>
      <v-form>
        <v-text-field
          v-model="counter"
          label="add to counter"
          required
        />
      </v-form>
      <v-btn
        block
        color="primary"
        @click='submit'
      >
        add to counter
      </v-btn>
    </v-flex>
  </v-layout>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Counter from '~/components/Counter.vue'
import { Action } from 'vuex-class'

@Component({
  components: {
    Counter
  }
})
export default class Home extends Vue {
  @Action('counter/add') addToCounter: any
  counter = 0
  submit () {
    this.addToCounter(Number(this.counter))
    this.counter = 0
  }
}
</script>
