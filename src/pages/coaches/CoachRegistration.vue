<template>
  <section>
    <base-card>
      <h2>Register as a coach now!</h2>
      <coach-form @save-data="saveData"></coach-form>
    </base-card>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import CoachForm from "../../components/coaches/CoachForm.vue";

export default interface coachData {
  first: String;
  last: String;
  areas: String;
  desc: String;
  rate: number;
}

@Options({
  components: {
    CoachForm,
  },
  methods: {
    saveData(data: coachData) {
      this.$store.dispatch("coaches/registerCoach", data);
      this.$router.replace("/coaches");
    },
  },
})
export default class CoachRegistration extends Vue {}
</script>

<style></style>
