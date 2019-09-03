<template>
  <v-alert
    :value="true"
    type="success"
  >
    Counter is at {{ getCount }}!
  </v-alert>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Getter } from 'vuex-class'

@Component
export default class Counter extends Vue {
  @Getter('counter/getCount') getCount: any
}
</script>
