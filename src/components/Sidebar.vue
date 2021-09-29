<template>
  <div class="sidebar">
    <img src="https://avatars.githubusercontent.com/u/26047842?v=4" />
    <h1>Joe Soboleski</h1>
    <h3>Poleski | JoeSobo</h3>
    <p>Software Engineer</p>
    <p>Front End Developer</p>
    <p>Game Designer</p>

    <hr />

    <h2>Languages</h2>

    <hr />

    <h2>Work</h2>

    <hr />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: start;
}

hr {
  width: 100%;
  margin: 32px 0px;
  border-color: var(--bordermuted);
}

img {
  width: 100%;
  border-radius: 50%;
}

h1 {
  font-size: 28px;
  line-height: 1.25;
  padding-top: 16px;
}

h2 {
  font-size: 22px;
}

h3 {
  font-size: 18px;
  font-weight: thin;
  line-height: 24px;
  color: var(--muted);
  padding-bottom: 16px;
}

p {
  font-size: 16px;
  line-height: 1.5;
}
</style>
