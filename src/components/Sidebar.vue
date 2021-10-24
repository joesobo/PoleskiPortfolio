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
    <ul>
      <li>Javascript</li>
      <li>Typescript</li>
      <li>C#</li>
    </ul>

    <hr />

    <h2>Work</h2>
    <ul>
      <li>Sendoso (current)</li>
      <li>Metal (2018-2020)</li>
    </ul>
    <a
      href="https://docs.google.com/document/d/1MUk3zuh81HkR4eyLG5xbE_zFTnEzWehpW8FiJHq1YTU/edit?usp=sharing"
      target="_blank"
      >Download my resume!</a
    >

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
  margin-top: 32px;
  color: var(--accent);
}
</style>
