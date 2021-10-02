<template>
  <div class="row project">
    <div class="col descriptionContainer">
      <div>
        <a class="title">{{ title }}</a>
        <p>{{ description }}</p>
      </div>
      <div class="row techArea">
        <!-- Languages -->
        <div class="col">
          <div v-for="language in languages" :key="language" class="techstack">
            {{ language }}
          </div>
        </div>
        <!-- Technologies -->
        <div class="col">
          <div
            v-for="technology in technologies"
            :key="technology"
            class="techstack"
          >
            {{ technology }}
          </div>
        </div>
      </div>
    </div>
    <div class="col projectDisplay">
      <img :src="image" />
      <div class="row links">
        <!-- Github -->
        <a href="">
          <fa class="icon" :icon="['fab', 'github']" />
        </a>
        <!-- External -->
        <a href="">
          <fa class="icon" :icon="['fas', 'cube']" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
      live: this.project.live,
      isHovered: false,
    };
  },
  methods: {
    onHover() {
      this.isHovered = true;
    },
    onLeave() {
      this.isHovered = false;
    },
  },
  computed: {
    isHoveredClass() {
      return this.isHovered ? "is-hovered" : "";
    },
  },
};
</script>

<style scoped>
.project {
  border-top: 1px solid var(--border);
  padding: 24px 0px;
  margin-right: 48px;
  justify-content: space-between;
}

.descriptionContainer {
  justify-content: space-between;
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
</style>
