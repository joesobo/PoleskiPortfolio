<template>
  <nav>
    <fa class="logo" :icon="['fas', 'monument']" />
    <div class="options">
      <a class="selected" href="">
        <fa class="icon selectedicon" :icon="['fas', 'book-open']" />
        About Me
      </a>
      <a href=""><fa class="icon" :icon="['fas', 'book']" />Notes</a>
      <a href=""
        ><fa class="icon" :icon="['fas', 'project-diagram']" />Projects</a
      >
      <a href=""><fa class="icon" :icon="['fas', 'cube']" />Contact</a>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style scoped>
nav {
  padding: 0px 32px;
  background: var(--primary);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav a {
  font-weight: bold;
  color: var(--text);
}

nav a.router-link-exact-active {
  color: var(--accent);
}

.options {
  display: flex;
  justify-content: flex-start;
}

a {
  padding: 16px 16px;
  font-size: 14px;
  line-height: 30px;
  display: flex;
  align-items: center;
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
