<template>
  <div class="titlerow">
    <div class="row center max rightalign">
      <div class="empty" />
      <div class="options">
        <a class="selected" href="">Option 1</a>
        <a href="">Option 2</a>
        <a href="">Option 3</a>
        <a href="">Option 4</a>
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
