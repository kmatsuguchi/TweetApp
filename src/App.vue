<template>
  <v-app>
    <v-content>
      <AppHeader/>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import AppHeader from './components/AppHeader'

export default {
  name: 'App',
  components: {
    AppHeader
  },
  data () {
    return {
      //
    }
  }
}
</script>
