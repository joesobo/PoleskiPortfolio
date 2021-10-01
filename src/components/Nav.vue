<template>
  <nav>
    <div class="link" @click="setSelected('home')" to="/">
      <fa class="logo" :icon="['fas', 'monument']" />
    </div>
    <div class="options">
      <div
        @click="setSelected('home')"
        :class="isSelected('home')"
        class="link"
        to="/"
      >
        <fa class="icon selectedicon" :icon="['fas', 'book-open']" />
        About Me
      </div>
      <div
        @click="setSelected('notes')"
        :class="isSelected('notes')"
        class="link"
        to="/notes"
        @click.native="this.selected = 'notes'"
      >
        <fa class="icon" :icon="['fas', 'book']" />Notes
      </div>
      <div
        @click="setSelected('projects')"
        :class="isSelected('projects')"
        class="link"
        to="/projects"
      >
        <fa class="icon" :icon="['fas', 'project-diagram']" />Projects
      </div>
      <div
        @click="setSelected('contact')"
        :class="isSelected('contact')"
        class="link"
        to="/contact"
      >
        <fa class="icon" :icon="['fas', 'cube']" />Contact
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      selected: "home",
    };
  },
  methods: {
    setSelected(selected: string) {
      this.selected = selected;
      if (selected === "home") {
        this.$router.push("/");
      } else {
        this.$router.push(`/${selected}`);
      }
    },
    isSelected(page: string) {
      if (this.selected === page) {
        return "selected";
      }
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
