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
        const name = this.notes.split("/");
        const parsed = test.default
          .replace("`$= dv.current().file.name`", name[1] ? name[1] : name[0])
          .replaceAll("[[", "")
          .replaceAll("![[", "")
          .replaceAll("]]", "")
          .split("--- admonition");
        console.log(parsed);
        return marked(parsed[1] ? parsed[1] : parsed[0]);
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

.notes {
  text-align: left;
}
</style>
