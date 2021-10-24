<template>
  <nav>
    <div class="logo-link" @click="setSelected('home')">
      <img src="../assets/logo.png" />
    </div>
    <div class="options">
      <div
        @click="setSelected('home')"
        :class="isSelected('home')"
        class="link"
      >
        <fa
          class="icon"
          :class="isSelectedIcon('home')"
          :icon="['fas', 'book-open']"
        />
        About Me
      </div>
      <div
        @click="setSelected('projects')"
        :class="isSelected('projects')"
        class="link"
      >
        <fa
          class="icon"
          :class="isSelectedIcon('projects')"
          :icon="['fas', 'project-diagram']"
        />Projects
      </div>
      <div
        @click="setSelected('notes')"
        :class="isSelected('notes')"
        class="link"
      >
        <fa
          class="icon"
          :class="isSelectedIcon('notes')"
          :icon="['fas', 'book']"
        />Notes
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      selected: window.location.href.split("/")[4] || "home",
    };
  },
  methods: {
    setSelected(selected: string) {
      if (this.selected !== selected) {
        this.selected = selected;
        if (selected === "home") {
          this.$router.push("/");
        } else {
          this.$router.push(`/${selected}`);
        }
      }
    },
    isSelected(page: string) {
      if (this.selected === page) {
        return "selected";
      }
    },
    isSelectedIcon(page: string) {
      if (this.selected === page) {
        return "selectedicon";
      }
    },
  },
  watch: {
    $route(to) {
      this.selected = to.path.split("/")[1] || "home";
    },
  },
});
</script>

<style scoped>
nav {
  padding: 0px 32px;
  background: var(--primary);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav div {
  font-weight: bold;
  color: var(--text);
}

.options {
  display: flex;
  justify-content: flex-start;
}

.link {
  padding: 16px 16px;
  font-size: 14px;
  line-height: 30px;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.logo-link {
  padding: 4px;
  cursor: pointer;
}

img {
  margin-left: 16px;
  width: 64px;
  height: 64px;
  color: var(--subtext);
}

.icon {
  width: 16px;
  height: 16px;
  padding-right: 8px;
  margin-top: 2px;
  color: var(--subtext);
}

.selectedicon {
  color: var(--text);
}

.selected {
  font-weight: 600;
  border-bottom: 2px solid var(--accent);
}

.logo {
  width: 32px;
  height: 32px;
}
</style>
