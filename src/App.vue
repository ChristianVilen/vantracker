<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    <h1>Vantracker</h1>
    </v-app-bar>
    <v-main>
      <van-list/>
    </v-main>
  </v-app>
</template>

<script>
import VanList from './components/VanList.vue';

export default {
  name: 'App',

  components: {VanList},

  data: () => ({
    //
  }),
};
</script>
