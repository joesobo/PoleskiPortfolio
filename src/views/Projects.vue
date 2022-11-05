<template>
  <div class="projects">
    <!-- <div class="search">search area</div> -->
    <div class="project-list">
      <div v-for="project in projects" :key="project.title">
        <Project :project="project" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Project from "@/components/Project.vue";

interface ProjectClass {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  languages: string[];
  github: string;
  live?: string;
}

const projects: ProjectClass[] = [
  {
    title: "CodeGraphy",
    languages: ["Typescript"],
    technologies: ["Vue"],
    description: "VSCode extension for visualizing file connections.",
    image: require("../assets/CodeGraphy.png"),
    github: "https://github.com/joesobo/Codegraphy",
    live: "https://marketplace.visualstudio.com/items?itemName=codegraphy.codegraphy",
  },
  {
    title: "This Portfolio",
    languages: ["Typescript"],
    technologies: ["Vue"],
    description: "Just a basic place to show off the crap I make.",
    image: require("../assets/Portfolio.png"),
    github: "https://github.com/joesobo/PoleskiPortfolio",
    live: "",
  },
  {
    title: "Tiny Turtle Tanks",
    languages: ["C#", "Shaders"],
    technologies: ["Unity", "MagicaVoxel"],
    description:
      "Tiny Turtle Tanks is a fun casual shooter game about exploring the solar system and ridding the exotic planets of evil Turtlebots.",
    image: require("../assets/TinyTurtleTanks.jpg"),
    github: "https://github.com/joesobo/TinyTurtleTanks",
    live: "https://poleski.itch.io/tiny-turtle-tanks",
  },
  {
    title: "Plant App",
    description:
      "A small React Native app for notifying you when your plants need watering or fertilizing.",
    image: require("../assets/Plant.png"),
    languages: ["Typescript"],
    technologies: ["React Native"],
    github: "https://github.com/joesobo/PlantApp",
  },
  {
    title: "Marching Squares v1.0",
    description:
      "A small Unity Library for creating terrain based on the Marching Squares algorithm.",
    image: require("../assets/MarchingSquares.png"),
    languages: ["C#", "Compute Shaders"],
    technologies: ["Unity"],
    github: "https://github.com/joesobo/Marching-Squares",
  },
  {
    title: "Unity Extension Library",
    description:
      "This is a basic Unity Extension Library for quicker coding capability.",
    image: require("../assets/Unity.png"),
    languages: ["C#"],
    technologies: ["Unity"],
    github: "https://github.com/joesobo/Unity-Extension-Library",
  },
  {
    title: "Procedural Voxel Tree",
    description:
      "This is a small tool used to generate procedural trees that was created to assist making custom trees for my game TinyTurtleTanks. It is based off of the popular algorithm Space Colonization.",
    image: require("../assets/Tree.png"),
    languages: ["C#", "Shaders"],
    technologies: ["Unity"],
    github: "https://github.com/joesobo/ProceduralVoxelTree",
  },
];

export default Vue.extend({
  name: "Home",
  components: {
    Project,
  },
  data() {
    return {
      projects,
    };
  },
});
</script>

<style scoped>
.search {
  margin: 32px;
}

.project-list {
  margin-top: 32px;
}
</style>
