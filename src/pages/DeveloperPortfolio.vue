<template>
  <div class="developer">
    <div class="header">
      <h1>{{ pageTitle }}</h1>
    </div>
    <div class="university-information">
      <h2>Formação acadêmica</h2>
      <h3>Banco de Dados</h3>
      <h4>FATEC</h4>
      <p>Feveriro de 2023 - Dezembro de 2025</p>
    </div>
    <div class="developer-information">
      <div class="stacks-section">
        <h3>Languages</h3>
        <div v-for="stack in stacks" :key="stack.name">
          <font-awesome-icon :icon="stack.icon" size="2xl" />
          <span>{{ stack.name }}</span>
        </div>
      </div>
      <div class="stacks-section">
        <h3>Languages</h3>
        <div v-for="stack in stacks" :key="stack.name">
          <font-awesome-icon :icon="stack.icon" size="2xl" />
          <span>{{ stack.name }}</span>
        </div>
      </div>
    </div>
    <div class="social-media-section">
      <div class="github-section">
        <font-awesome-icon :icon="['fab', 'square-git']" size="2xl" @click="openGithub()" />
      </div>
      <div class="linkedin-section">
        <font-awesome-icon :icon="['fab', 'linkedin']" size="2xl" @click="openlinkedin()" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageTitle: "Portfólio Software Developer",
      stacks: [
        {
          name: "AWS",
          icon: ['fab', 'aws'],
        },
        {
          name: "Elasticsearch",
          icon: ['fas', 'screwdriver-wrench'],
        },
        {
          name: "Typescript",
          icon: ['fas', 'file-code'],
        },
        {
          name: "Javascript",
          icon: ['fab', 'js'],
        },
        {
          name: "Vue",
          icon: ['fab', 'vuejs'],
        },
        {
          name: "Elixir",
          icon: ['fas', 'file-code'],
        },
        {
          name: "Ruby",
          icon: ['fas', 'file-code'],
        }
      ],
    };
  },
  methods: {
    openGithub() {
      window.open('https://github.com/samrln', '_blank');
    },
    openlinkedin() {
      window.open('https://www.linkedin.com/in/samrln/', '_blank');
    },
  },
};
</script>
  
<style src="../styles/developerPortfolio.css" scoped></style>
