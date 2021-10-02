<template>
  <div class="home">
    <MainContent />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import MainContent from "@/components/MainContent.vue";

export default Vue.extend({
  name: "Home",
  components: {
    MainContent,
  },
});
</script>
