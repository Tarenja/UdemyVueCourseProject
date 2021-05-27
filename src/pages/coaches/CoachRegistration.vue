<template>
  <section>
    <base-card>
      <h2>Register as a coach now!</h2>
      <coach-form></coach-form>
    </base-card>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import CoachForm from "../../components/coaches/CoachForm.vue";

@Options({
  components: {
    CoachForm,
  },
})
export default class CoachRegistration extends Vue {}
</script>

<style></style>
