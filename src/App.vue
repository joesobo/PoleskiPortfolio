<template>
  <div id="app" :style="cssVars">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { background, text, accent, primary } from "./constants/colors";

export default {
  computed: {
    cssVars(): Record<string, unknown> {
      return {
        "--background": background,
        "--text": text,
        "--accent": accent,
        "--primary": primary,
      };
    },
  },
};
</script>

<style>
@import "styles/reset.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--text);
  background: var(--background);
  height: 100%;
}

#nav {
  padding: 30px;
  background: var(--primary);
}

#nav a {
  font-weight: bold;
  color: var(--text);
}

#nav a.router-link-exact-active {
  color: var(--accent);
}
</style>
