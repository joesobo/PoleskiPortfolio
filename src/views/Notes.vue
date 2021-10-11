<template>
  <div class="notes">
    <h1>This is an notes page</h1>

    <div v-html="markdownToHtml" />
  </div>
</template>

<script>
import Vue from "vue";
import marked from "marked";

export default Vue.extend({
  name: "Home",
  data() {
    return {
      path: 'notes/3. Resources/Nuxt/Create Nuxt Module.md'
    }
  },
  asyncComputed: {
    async markdownToHtml() {
      const test = await import(`@/${this.path}`)
      return marked(test.default);
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
