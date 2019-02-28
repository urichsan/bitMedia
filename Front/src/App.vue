<template>
  <v-app>
    <v-content>
      <MyCrud/>
    </v-content>
  </v-app>
</template>

<script>
import MyCrud from './components/MyCrud'

export default {
  name: 'App',
  components: {
      MyCrud
  },
  data () {
    return {
      //
    }
  }
}
</script>
