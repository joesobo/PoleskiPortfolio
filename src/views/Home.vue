<template>
  <div class="home">
    <div class="borderContainer">
      <MainContent />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import MainContent from "@/components/MainContent.vue";

export default Vue.extend({
  name: "Home",
  components: {
    MainContent,
  },
});
</script>

<style scoped>
.borderContainer {
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 24px;
  margin: 24px;
}
</style>
