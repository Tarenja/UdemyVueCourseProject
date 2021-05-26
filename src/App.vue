<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import TheHeader from "./components/layout/TheHeader.vue";

@Options({
  components: {
    TheHeader,
  },
})
export default class App extends Vue {}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}
</style>
