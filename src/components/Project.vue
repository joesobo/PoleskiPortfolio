<template>
  <div class="row project">
    <div class="col descriptionContainer">
      <div>
        <a :href="live ? live : github" target="_blank" class="title">{{
          title
        }}</a>
        <p>{{ description }}</p>
      </div>
      <div class="row techArea">
        <!-- Languages -->
        <div class="col">
          <div
            v-for="language in languages"
            :key="language"
            class="row techstack"
          >
            <div
              class="languageColor"
              :style="`background-color: ${langColor(language)}`"
            />
            {{ language }}
          </div>
        </div>
        <!-- Technologies -->
        <div class="col">
          <div
            v-for="technology in technologies"
            :key="technology"
            class="row techstack"
          >
            <div
              class="languageColor"
              :style="`background-color: ${techColor(technology)}`"
            />
            {{ technology }}
          </div>
        </div>
      </div>
    </div>
    <div class="col projectDisplay">
      <a :href="live ? live : github" target="_blank" class="title">
        <img :src="image" />
      </a>
      <div class="row links">
        <!-- Github -->
        <a :href="github" target="_blank">
          <fa class="icon" :icon="['fab', 'github']" />
        </a>
        <!-- External -->
        <a v-if="live !== null" :href="live" target="_blank">
          <fa class="icon" :icon="['fas', 'cube']" />
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      title: this.project.title,
      languages: this.project.languages,
      description: this.project.description,
      technologies: this.project.technologies,
      image: this.project.image,
      github: this.project.github,
      live: this.project.live ? this.project.live : null,
    };
  },
  methods: {
    langColor(language: string) {
      if (language === "Typescript") {
        return "#2F74C0";
      } else if (language === "Javascript") {
        return "#EFD81D";
      } else if (language === "C#") {
        return "#9A6CD1";
      } else if (language === "Shaders" || language === "Compute Shaders") {
        return "#5080A9";
      } else {
        return "#868E96";
      }
    },
    techColor(technology: string) {
      if (
        technology === "Vue" ||
        technology === "Nuxt" ||
        technology === "Vuex"
      ) {
        return "#40B681";
      } else if (technology === "React" || technology === "React Native") {
        return "#5ED3F3";
      } else if (technology === "Tailwind") {
        return "#15B3C0";
      } else if (technology === "Unity") {
        return "#FFFFFF";
      } else if (technology === "MagicaVoxel") {
        return "#45239B";
      } else {
        return "#868E96";
      }
    },
  },
});
</script>

<style scoped>
.project {
  border-top: 1px solid var(--border);
  padding: 24px 0px;
  margin-right: 48px;
  justify-content: space-between;
}

.descriptionContainer {
  text-align: left;
  width: 100%;
}

.title {
  font-size: 20px;
  font-weight: 600;
  color: var(--accent);
  cursor: pointer;
}

p {
  color: var(--muted);
  font-size: 14px;
  line-height: 1.5;
  margin-top: 8px;
  margin-bottom: 8px;
}

.projectDisplay {
  justify-content: space-between;
  margin-left: 24px;
}

.links {
  margin-top: 16px;
  justify-content: flex-end;
}

.icon {
  margin-left: 8px;
  font-size: 18px;
}

.techArea {
  margin-top: 16px;
}

.techstack {
  margin-right: 24px;
  margin-bottom: 8px;
  font-size: 14px;
  color: var(--muted);
}

.languageColor {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-top: 3px;
  margin-right: 8px;
}

img {
  width: 125px;
  height: 125px;
  object-fit: cover;
  border-radius: 4px;
}
</style>
