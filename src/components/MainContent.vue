<template>
  <div>
    <img
      class="headerimage"
      alt="TinyTurtleTanks Planet"
      src="https://github.com/joesobo/joesobo/raw/master/images/TTT.png"
    />

    <div class="textContainer">
      <h1>Hi! My name is Joseph Soboleski</h1>

      <h3>
        I'm a Software Engineer, Game Developer, and Front-End Web Developer
      </h3>

      <p>
        Hello there! My name is Joe and I love making stuff. Doesn't matter what
        kind of stuff, I'm always interested in learning how to create something
        new. Whether its programming like game, web, or app development, or
        learning how to make something else with my hands like cooking, I love
        it all.
      </p>

      <p>
        I have had the opportunity to work with a wide variety of technologies.
        My journey started out with Java back in highschool when I was gaining
        an interest in created my own games. After creating my own SIRI, I went
        to college and studied many other languages like C#, Python, and
        JavaScript. I worked on a few other projects like creating our own
        language in Racket. During this time I also taught myself React and
        Unity so I could work on my own
        <router-link to="projects">Personal Projects</router-link>
      </p>

      <p>
        I have recently graduated from California Poly Technical State
        University (<a href="https://www.calpoly.edu/" target="_blank"
          >Cal Poly</a
        >) in San Luis Obispo. Currently I am working as an internal Frontend
        Tools Engineer at
        <a href="https://sendoso.com/" target="_blank">Sendoso</a>, where I
        primarily work with Vue.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.headerimage {
  max-width: 100%;
  /* -webkit-mask-image: linear-gradient(to bottom, white, transparent); */
}

.textContainer {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: start;
}

h1 {
  margin-top: 90px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--border);
}

h3 {
  margin: 50px 0px;
}

p {
  margin-bottom: 24px;
  font-size: 16px;
  line-height: 1.5;
}

a {
  color: var(--accent);
}
</style>
