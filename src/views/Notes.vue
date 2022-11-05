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
  methods: {
    cleanupMarkdown(input) {
      const name = this.notes.split("/");

      // break the textblock into an array of lines
      var lines = input.split("\n");
      // remove one line, starting at the first position
      lines.splice(0, 6);
      // join the array back into a single string
      var newtext = lines.join("\n");

      const temp = newtext
        .replace("`= this.file.name`", name[1] ? name[1] : name[0])
        .replaceAll("![[", "")
        .replaceAll("[[", "")
        .replaceAll("]]", "")
        .replaceAll("#dv current file name", "")
        .split("--- admonition");

      let value = temp[1] ? temp[1] : temp[0];
      if (value.includes("```ccard")) {
        value =
          value.substring(0, value.lastIndexOf("```ccard")) +
          value.substring(value.lastIndexOf("```") + 3, value.length);
      }
      if (value.includes("```dataview")) {
        value =
          value.substring(0, value.lastIndexOf("```dataview")) +
          value.substring(value.lastIndexOf("```") + 3, value.length);
      }
      return value;
    },
  },
  asyncComputed: {
    async markdownToHtml() {
      if (this.notes) {
        const test = await import(`@/notes/3. Resources/${this.notes}.md`);
        return marked(this.cleanupMarkdown(test.default));
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
