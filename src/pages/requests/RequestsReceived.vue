<template>
  <section>
    <base-card>
      <header>
        <h2>Requests Received</h2>
      </header>
      <ul v-if="hasRequests">
        <request-item
          v-for="req in receivedRequests"
          :key="req.id"
          :email="req.userEmail"
          :message="req.userMessage"
        ></request-item>
      </ul>
      <h3 v-else>You haven't received any requests yet!</h3>
    </base-card>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import RequestItem from "../../components/requests/RequestItem.vue";

@Options({
  components: {
    RequestItem,
  },
  computed: {
    receivedRequests() {
      return this.$store.getters["requests/getRequests"];
    },
    hasRequests() {
      return this.$store.getters["requests/hasRequests"];
    },
  },
})
export default class RequestReceived extends Vue {}
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>
