<template>
  <div class="notes">
    <div v-html="markdownToHtml" />
  </div>
</template>

<script>
import Vue from "vue";
import marked from "marked";
import hljs from "highlight.js";

marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function (code, lang) {
    const language = hljs.getLanguage(lang) ? lang : "plaintext";
    return hljs.highlight(code, { language }).value;
  },
  langPrefix: "hljs language-",
  pedantic: false,
  gfm: true,
  breaks: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false,
});

export default Vue.extend({
  props: ["notes"],
  asyncComputed: {
    async markdownToHtml() {
      if (this.notes) {
        const test = await import(`@/notes/3. Resources/${this.notes}.md`);
        // console.log(marked(test.default));
        return marked(test.default);
      }
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

div {
  margin-top: 16px;
}
</style>
