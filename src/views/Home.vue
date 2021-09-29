<template>
  <div class="home">
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
          <MainContent />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TitleRow from "@/components/TitleRow.vue";
import MainContent from "@/components/MainContent.vue";
import Sidebar from "@/components/Sidebar.vue";

export default Vue.extend({
  name: "Home",
  components: {
    TitleRow,
    MainContent,
    Sidebar,
  },
});
</script>

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
