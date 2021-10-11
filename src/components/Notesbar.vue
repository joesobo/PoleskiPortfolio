<template>
  <div class="notebar">
    <div class="container">
      <div v-for="path in filePaths" :key="path">
        <p :class="isSelected(path)" @click="setSelected(path)">
          {{ path }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filePaths: [],
      selected: "",
    };
  },
  mounted() {
    const files = require.context("@/notes", true);
    console.log(files.keys());
    this.filePaths = files
      .keys()
      .map((key) => key.replace("./3. Resources/", ""))
      .map((key) => key.replace(".md", ""));

    this.setSelected(this.filePaths[0]);
  },
  methods: {
    setSelected(path) {
      this.selected = path;
      this.$emit("sendToNotes", this.selected);
    },
    isSelected(path) {
      if (this.selected === path) {
        return "selected";
      }
    },
  },
};
</script>

<style scoped>
.notebar {
  margin-top: 32px;
}

.container {
  display: flex;
  flex-direction: column;
  text-align: start;
  max-height: 900px;
  overflow-y: scroll;
}

p {
  font-size: 14px !important;
  margin-top: 16px;
  cursor: pointer;
}

.selected {
  color: var(--accent);
}
</style>
