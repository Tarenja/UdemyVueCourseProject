<template>
  DETAILS
  <router-view></router-view>
  <router-link to="/coaches/c1/contact">Contact Coach</router-link>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class CoachDetails extends Vue {}
</script>

<style></style>
