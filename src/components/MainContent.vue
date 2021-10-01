<template>
  <div>
    <img
      class="headerimage"
      alt="TinyTurtleTanks Planet"
      src="https://github.com/joesobo/joesobo/raw/master/images/TTT.png"
    />

    <div class="textContainer">
      <h1>Hi! My name is Joseph Soboleski or Poleski</h1>

      <h3>
        I'm a Software Engineer, Game Developer, and Front-End Web Developer
      </h3>

      <img
        align="left"
        alt="JoeSobo's Github Stats"
        src="https://github-readme-stats.vercel.app/api?username=joesobo&show_icons=true&theme=dark&hide_border=true&hide=prs,contribs"
      />

      <img
        align="left"
        height="150px"
        alt="JoeSobo's Language Stats"
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=joesobo&layout=compact&theme=dark&hide_border=true"
      />
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
</style>
