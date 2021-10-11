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
      index: 10,
      filePaths: [],
    };
  },
  asyncComputed: {
    async markdownToHtml() {
      if (this.filePaths.length > 0) {
        const test = await import(
          `@/notes${this.filePaths[this.index].substring(1)}`
        );
        return marked(test.default);
      }
    },
  },
  mounted() {
    const files = require.context("@/notes", true);
    console.log(files.keys());
    this.filePaths = files.keys();
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
