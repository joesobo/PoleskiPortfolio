<template>
  <div class="projects">
    <div class="search">search area</div>
    <div v-for="project in projects" :key="project.title">
      <Project :project="project" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Project from "@/components/Project.vue";

const projects = [
  {
    title: "Test",
    languages: ['Vue', 'Typescript', 'Javascript'],
    technologies: ['Nuxt', 'Tailwind', 'Vuex'],
    description: "Test description with a lot of text behind it to test that we are properly wrapping our text without any overlap ontop of the image that is over on the right hand side.",
    image: "https://via.placeholder.com/125",
    github: "",
    live: "",
  },
  {
    title: "Test",
    languages: [],
    technologies: [],
    description: "Test description",
    image: "https://via.placeholder.com/125",
    github: "",
    live: "",
  },
];

export default Vue.extend({
  name: "Home",
  data() {
    return {
      projects,
    };
  },
  components: {
    Project,
  },
});
</script>

<style scoped>
.search {
  margin: 32px;
}
</style>