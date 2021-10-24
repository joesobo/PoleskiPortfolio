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
    <ul>
      <li>work 1 (date)</li>
      <li>work 2 (date)</li>
    </ul>
    <a>link to resume download</a>

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
  margin: 8px 0px;
}

h2 {
  font-size: 22px;
  margin: 0;
}

h3 {
  margin: 0;
  font-size: 16px;
  font-weight: thin;
  line-height: 24px;
  color: var(--muted);
  padding-bottom: 16px;
}

p {
  font-size: 14px;
  line-height: 1.5;
  margin: 0px;
}

a {
  color: var(--accent);
}
</style>
