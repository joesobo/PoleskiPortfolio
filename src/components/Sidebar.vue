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

    <h2>Social</h2>

    <div class="row">
      <a class="icon-button" href="https://github.com/joesobo" target="_blank">
        <fa class="icon" :icon="['fab', 'github']" />
      </a>
      <a
        class="icon-button"
        href="https://twitter.com/JosephSobo"
        target="_blank"
      >
        <fa class="icon" :icon="['fab', 'twitter']" />
      </a>
      <a
        class="icon-button"
        href="https://www.linkedin.com/in/joe-soboleski-34a502135/"
        target="_blank"
      >
        <fa class="icon" :icon="['fab', 'linkedin-in']" />
      </a>
    </div>

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
  font-size: 16px;
  font-weight: thin;
  line-height: 24px;
  color: var(--muted);
  padding-bottom: 16px;
}

p {
  font-size: 14px;
  line-height: 1.5;
}

.icon-button {
  background: none;
  border: none;
  font-size: 20px;
  margin-top: 16px;
}

.icon {
  margin-right: 24px;
  color: var(--text);
}

a {
  color: var(--accent);
}
</style>
