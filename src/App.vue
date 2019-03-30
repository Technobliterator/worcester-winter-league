<template>
  <div>
    <app-masthead></app-masthead>
    <app-results></app-results>
    <app-rules></app-rules>
  </div>
</template>

<script>
import Masthead from './Masthead.vue'
import Rules from './Rules.vue'
import Results from './Results.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    'app-masthead': Masthead,
    'app-rules': Rules,
    'app-results': Results,
  }
}
</script>

<style>
body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 1.4em;
  color: #2c3e50;
}
</style>
