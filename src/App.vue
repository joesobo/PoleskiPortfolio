<template>
  <div id="app" :style="cssVars">
    <Nav />
    <!-- Title Row -->
    <TitleRow />
    <!--Split Col  -->
    <div class="center row expand max">
      <!-- 1 -->
      <div class="col left">
        <Sidebar />
      </div>
      <!-- 4 -->
      <div class="col right">
        <div class="borderContainer">
          <router-view />
        </div>
      </div>
    </div>
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
  bordermuted,
} from "./constants/colors";
import Nav from "./components/Nav.vue";
import TitleRow from "@/components/TitleRow.vue";
import Sidebar from "@/components/Sidebar.vue";

export default {
  components: {
    Nav,
    TitleRow,
    Sidebar,
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
@import url("https://fonts.googleapis.com/css?family=Open+Sans");

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

<style scoped>
.borderContainer {
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 24px;
  margin: 24px;
}

.left {
  width: 25%;
  padding: 0px 24px;
  margin-top: -32px;
}

.right {
  width: 75%;
}
</style>
