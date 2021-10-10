<template>
  <div class="notes">
    <h1>This is an notes page</h1>

    <vue-markdown :source="test" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import VueMarkdown from "vue-markdown-render";
import { readFileSync } from "fs";

/* eslint-disable-next-line */
// const test = require("../notes/3. Resources/3. Resources.md");
const mardownContent = readFileSync(__dirname + '../notes/3. Resources/3. Resources.md', 'utf-8')

export default Vue.extend({
  name: "Home",
  components: {
    VueMarkdown,
  },
  data() {
    return {
      test: mardownContent,
    };
  },
  created() {
    console.log(mardownContent);
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
