<template>
  <div class="sidebar">
    <img src="https://avatars.githubusercontent.com/u/26047842?v=4" />
    <h1>Joe Soboleski</h1>
    <h3>Poleski | JoeSobo</h3>
    <p>Software Engineer</p>
    <p>Front End Developer</p>
    <p>Game Designer</p>

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

    <h2>Languages</h2>
    <ul>
      <div class="row align-center">
        <div class="languageColor" style="background-color: #efd81d" />
        <div class="language">Javascript</div>
      </div>
      <div class="row align-center">
        <div class="languageColor" style="background-color: #2f74c0" />
        <div class="language">Typescript</div>
      </div>
      <div class="row align-center">
        <div class="languageColor" style="background-color: #9a6cd1" />
        <div class="language">C#</div>
      </div>
    </ul>

    <hr />

    <h2>Frameworks</h2>
    <ul>
      <div class="row align-center">
        <div class="languageColor" style="background-color: #40b681" />
        <div class="language">Vue</div>
      </div>
      <div class="row align-center">
        <div class="languageColor" style="background-color: #5ed3f3" />
        <div class="language">React</div>
      </div>
      <div class="row align-center">
        <div class="languageColor" style="background-color: #ffffff" />
        <div class="language">Unity</div>
      </div>
    </ul>

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
  margin-bottom: 8px;
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

.languageColor {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-left: 16px;
  margin-top: 8px;
}

.language {
  font-size: 16px;
  line-height: 1.5;
  margin-left: 16px;
  margin-top: 8px;
}
</style>
