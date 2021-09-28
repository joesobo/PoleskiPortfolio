<template>
  <nav>
    <div id="nav">
      <router-link to="/">Home</router-link>
      <span>{{ `&nbsp;|&nbsp;` }}</span>
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </nav>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({});
</script>

<style scoped>
#nav {
  height: 30px;
  padding: 16px;
  background: var(--primary);
  display: flex;
  justify-content: center;
  align-items: center;
}

#nav a {
  font-weight: bold;
  color: var(--text);
}

#nav a.router-link-exact-active {
  color: var(--accent);
}
</style>
