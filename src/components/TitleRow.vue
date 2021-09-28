<template>
  <div class="titlerow">
    <div class="row center max rightalign">
      <div class="empty" />
      <div class="options">
        <a class="selected" href="">
          <fa class="icon selectedicon" :icon="['fas', 'book-open']" />
          Option 1
        </a>
        <a href=""><fa class="icon" :icon="['fas', 'book']" />Option 2</a>
        <a href=""
          ><fa class="icon" :icon="['fas', 'project-diagram']" />Option 3</a
        >
        <a href=""><fa class="icon" :icon="['fas', 'cube']" />Option 4</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.titlerow {
  height: 48px;
  margin-top: 24px;
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: flex-end;
}

.icon {
  width: 16px;
  height: 16px;
  padding-right: 8px;
  color: var(--subtext);
}

.selectedicon {
  color: var(--text);
}

.rightalign {
  justify-content: flex-end;
}

.empty {
  width: 25%;
  padding: 0px 24px;
}

.options {
  width: 75%;
  margin: 0 24px;
  display: flex;
  justify-content: flex-start;
}

a {
  padding: 8px 16px;
  font-size: 14px;
  line-height: 30px;
}

.selected {
  font-weight: 600;
  border-bottom: 2px solid var(--accent);
}
</style>
