<template>
  <div class="home">
    <!-- Title Row -->
    <TitleRow />
    <!--Split Col  -->
    <div class="center row expand max">
      <!-- 1 -->
      <div class="col left">
        <img src="https://avatars.githubusercontent.com/u/26047842?v=4" />
      </div>
      <!-- 4 -->
      <div class="col right">
        <div class="borderContainer">Hello world</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TitleRow from "@/components/TitleRow.vue";

export default Vue.extend({
  name: "Home",
  components: {
    TitleRow,
  },
});
</script>

<style scoped>
.home {
  height: 100%;
}

.borderContainer {
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 24px;
  margin: 24px;
}

.left {
  width: 25%;
  padding: 24px;
}

img {
  width: 100%;
  border-radius: 50%;
}

.right {
  width: 75%;
}
</style>
