<template>
  <div class="notebar">
    <div class="container">
      <div v-for="path in filePaths" :key="path">
        <p>{{ path }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filePaths: [],
    };
  },
  mounted() {
    const files = require.context("@/notes", true);
    console.log(files.keys());
    this.filePaths = files
      .keys()
      .map((key) => key.replace("./3. Resources/", ""))
      .map((key) => key.replace(".md", ""));
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
  margin-top: 8px;
}
</style>
