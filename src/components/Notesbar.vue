<template>
  <div class="notebar">
    <div v-for="folder in folders" :key="folder">
      <!-- TODO: add dropdown icon here -->
      <p :class="isFolderSelected(folder)" @click="setFolderSelected(folder)">
        {{ folder }}
      </p>
      <div v-if="selectedFolder && selectedFolder === folder">
        <div v-for="path in filePaths" :key="path">
          <p
            v-if="startsWithFolder(folder, path)"
            :class="isSelected(path)"
            class="file"
            @click="setSelected(path)"
          >
            {{ formatPath(folder, path) }}
          </p>
        </div>
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
      folders: [],
      selectedFolder: "",
    };
  },
  mounted() {
    const files = require.context("@/notes", true);
    this.filePaths = files
      .keys()
      .map((key) => key.replace("./3. Resources/", ""))
      .map((key) => key.replace(".md", ""));
    this.setSelected(this.filePaths[0]);

    this.folders = [
      ...new Set(
        this.filePaths.map((path) => {
          return path.split("/")[0];
        })
      ),
    ];
    this.setFolderSelected(this.folders[0]);
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
    setFolderSelected(folder) {
      if (this.selectedFolder === folder) {
        this.selectedFolder = "";
      } else {
        this.selectedFolder = folder;
        const folderFile = this.filePaths.find((path) => {
          const basicPath = path.replace(folder + "/", "");
          if (path.startsWith(folder) && basicPath === folder) {
            return path;
          } 
        });

        this.setSelected(folderFile);
      }

    },
    isFolderSelected(folder) {
      if (this.selectedFolder === folder) {
        return "selectedFolder";
      }
    },
    startsWithFolder(folder, path) {
      const basicPath = path.replace(folder + "/", "");
      return path.startsWith(folder) && basicPath !== folder;
    },
    formatPath(folder, path) {
      return path.replace(folder + "/", "");
    },
  },
};
</script>

<style scoped>
.notebar {
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  text-align: start;
}

p {
  font-size: 14px !important;
  margin-top: 16px;
  cursor: pointer;
}

.selected {
  color: var(--accent);
}

.file {
  margin-left: 16px;
}

.selectedFolder {
  color: var(--accent);
}
</style>
