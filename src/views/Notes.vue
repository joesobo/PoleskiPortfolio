<template>
  <div class="notes">
    <h1>This is an notes page</h1>

    <div v-html="markdownToHtml" />
  </div>
</template>

<script>
import Vue from "vue";
import marked from "marked";
import test from "../notes/3. Resources/Nuxt/Create Nuxt Module.md"

export default Vue.extend({
  name: "Home",
  computed: {
    markdownToHtml() {
      return marked(test);
    },
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
