<template>
  <div id="app" :style="cssVars">
    <Nav />
    <router-view />
  </div>
</template>

<script lang="ts">
import {
  background,
  text,
  accent,
  primary,
  border,
  subtext,
  muted,
  bordermuted
} from "./constants/colors";
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
        "--subtext": subtext,
        "--accent": accent,
        "--primary": primary,
        "--border": border,
        "--muted": muted,
        "--bordermuted": bordermuted,
      };
    },
  },
};
</script>

<style>
@import "styles/reset.css";
@import url('https://fonts.googleapis.com/css?family=Open+Sans');

body,
html {
  font-family: "Open Sans";
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--text);
  background: var(--background);
  height: 100%;
}

.row {
  display: flex;
  flex-direction: row;
}

.col {
  display: flex;
  flex-direction: column;
}

.expand {
  height: 100%;
}

.center {
  justify-content: center;
}

.max {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
}

a {
  color: var(--text);
}

h1 {
  font-size: 2rem;
  font-weight: 600;
}

h3 {
  font-size: 1.25rem;
  font-weight: 600;
}
</style>
