<template>
  <div>
    <h1>hello</h1>
    <HelloWorld />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '~/components/HelloWorld.vue'

@Component({
  mounted () {
    console.log(this.$store)
  },
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {}
</script>
