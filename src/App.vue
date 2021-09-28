<template>
  <div id="app" :style="cssVars">
    <Nav />
  </div>
</template>

<script lang="ts">
import { background, text, accent, primary } from "./constants/colors";
import Nav from "./components/Nav.vue";

export default {
  components: {
    Nav,
  },
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
</style>
