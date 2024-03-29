<template>
  <div id="app" :style="cssVars">
    <div>
      <Nav />
      <!-- Title Row -->
      <TitleRow />
      <!--Split Col  -->
      <div class="row center max">
        <!-- 1 -->
        <div class="col left">
          <Sidebar v-if="selected !== 'notes'" />
          <Notesbar
            v-if="selected === 'notes'"
            @sendToNotes="sendToNotesPage"
          />
        </div>
        <!-- 4 -->
        <div class="col right">
          <router-view :notes="selectedNote" />
        </div>
      </div>
    </div>

    <div class="row spaced bottom">
      <SocialBar />
      <Footer />
      <EmailBar />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
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
import Notesbar from "@/components/Notesbar.vue";
import Footer from "@/components/Footer.vue";
import SocialBar from "@/components/SocialBar.vue";
import EmailBar from "@/components/EmailBar.vue";

export default Vue.extend({
  components: {
    Nav,
    TitleRow,
    Sidebar,
    Notesbar,
    Footer,
    SocialBar,
    EmailBar,
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
        "--linkColor": this.selected === "notes" ? "#96d0ff" : text,
      };
    },
  },
  data() {
    return {
      selected: window.location.href.split("/")[4] || "home",
      selectedNote: "",
    };
  },
  methods: {
    sendToNotesPage(note: string) {
      this.selectedNote = note;
    },
  },
  watch: {
    $route(to) {
      this.selected = to.path.split("/")[1] || "home";
    },
  },
});
</script>

<style>
@import "styles/reset.css";
@import "styles/base.css";
@import "styles/syntax.css";
@import url("https://fonts.googleapis.com/css?family=Open+Sans");

a {
  color: var(--linkColor);
}
</style>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.left {
  width: 25%;
  padding: 0px 24px;
  margin-top: -32px;
}

.right {
  width: 75%;
}

.bottom {
  align-items: flex-end;
}
</style>
