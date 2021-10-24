<template>
  <div class="emailBar">
    <a
      @mouseover="hover = true"
      @mouseleave="hover = false"
      :class="{ active: hover }"
      href="mailto:soboleskijoe@gmail.com"
    >
      soboleskijoe@gmail.com
    </a>
    <div class="border" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      hover: false,
    };
  },
};
</script>

<style scoped>
.emailBar {
  width: 100px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-color: var(--background);
  margin-bottom: 100px;
}

a {
  height: 100px;
  font-size: 16px;
  letter-spacing: 0.4em;
  color: var(--text);
  line-height: 100px;
  transform: rotate(90deg);
  margin-bottom: 200px;
  margin-top: 125px;
}

.border {
  border: 1px solid var(--border);
  height: 0px;
  margin-top: 52px;
  width: 200px;
  transform: rotate(90deg);
}

.active {
  color: var(--accent);
}
</style>
