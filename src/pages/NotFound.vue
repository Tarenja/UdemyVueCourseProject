<template>
  <section>
    <base-card>
      <h2>Page Not Found</h2>
      <p>
        This page could not be found, maybe check out our
        <router-link to="/coaches">coaches</router-link>
      </p>
    </base-card>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class NotFound extends Vue {}
</script>

<style></style>
