<template>
  <footer>
    <div class="border" />
    <h1>Get In Touch</h1>

    <p>
      My inbox is always open. Whether you have a question or just want to say
      hi, I’ll try my best to get back to you!
    </p>

    <a href="mailto:soboleskijoe@gmail.com">Send me a message!</a>
    <div class="border" />
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
footer {
  padding-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.border {
  border-top: 2px solid var(--bordermuted);
  margin: 16px 0px;
  width: calc(100% - 64px);
}

h1 {
  font-size: 28px;
}

p {
  margin-top: 12px;
  font-size: 14px;
  line-height: 1.5;
  max-width: 500px;
}

a {
  max-width: 300px;
  width: 100%;
  margin-top: 24px;
  padding: 8px 12px;
  background-color: transparent;
  border: 1px solid var(--border);
  color: var(--text);
  cursor: pointer;
}
</style>
