<template>
  <div class="col social">
    <div class="col buttons">
      <a
        @mouseover="hover1 = true"
        @mouseleave="hover1 = false"
        :class="{ active: hover1 }"
        class="icon-button"
        href="https://github.com/joesobo"
        target="_blank"
      >
        <fa class="icon" :icon="['fab', 'github']" />
      </a>
      <a
        @mouseover="hover2 = true"
        @mouseleave="hover2 = false"
        :class="{ active: hover2 }"
        class="icon-button"
        href="https://twitter.com/JosephSobo"
        target="_blank"
      >
        <fa class="icon" :icon="['fab', 'twitter']" />
      </a>
      <a
        @mouseover="hover3 = true"
        @mouseleave="hover3 = false"
        :class="{ active: hover3 }"
        class="icon-button"
        href="https://www.linkedin.com/in/joe-soboleski-34a502135/"
        target="_blank"
      >
        <fa class="icon" :icon="['fab', 'linkedin-in']" />
      </a>
    </div>
    <div class="border" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      hover1: false,
      hover2: false,
      hover3: false,
    };
  },
};
</script>

<style scoped>
.icon-button {
  background: none;
  border: none;
  font-size: 20px;
  margin-top: 48px;
  color: var(--text);
}

.icon {
  margin-right: 24px;
  font-size: 24px;
}

.social {
  justify-content: flex-end;
  align-items: center;
  width: 100px;
  margin-bottom: 75px;
}

.buttons {
  margin-bottom: 100px;
  margin-left: 20px;
}

.border {
  border: 1px solid var(--border);
  height: 0px;
  width: 150px;
  transform: rotate(90deg);
}

.active {
  color: var(--accent);
}
</style>
