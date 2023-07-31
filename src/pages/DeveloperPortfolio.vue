<template>
  <div>
    <h1>{{ pageTitle }}</h1>
    <div>
      <div class="stacks-section">
        <div>
          <h3>Languages and Tools:</h3>
          <div v-for="stack in stacks" :key="stack.name" class="stack-item">
            <img :src="stack.icon" :alt="stack.name" width="40" height="40" />
            <div class="stack-details">
              <span>{{ stack.name }}</span>
              <div class="progress-bar">
                <div class="progress" :style="{ width: stack.progress + '%' }"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="github-section">
        <h2>Meu GitHub:</h2>
        <a :href="githubURL" target="_blank">{{ githubURL }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageTitle: "Portfólio Software Developer",
      githubURL: "https://github.com/seu_usuario",
      myProjects: ["Meu Portfólio"],
      stacks: [
        {
          name: "AWS",
          icon:
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
          progress: 80,
        },
        {
          name: "Elasticsearch",
          icon:
            "https://www.vectorlogo.zone/logos/elastic/elastic-icon.svg",
          progress: 70,
        },
        {
          name: "Typescript",
          icon:
           "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
          progress: 60,
        },
        {
          name: "Javascript",
          icon:
            "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
          progress: 60,
        },
        {
          name: "Vue",
          icon:
            "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
          progress: 60,
        },
        {
          name: "Elixir",
          icon:
            "https://upload.wikimedia.org/wikipedia/commons/9/92/Official_Elixir_logo.png",
          progress: 50,
        },
        {
          name: "Ruby",
          icon:
            "https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg",
          progress: 50,
        }
      ],
    };
  },
};
</script>
  
<style>
.stacks-section,
.github-section {
  display: inline-block;
  vertical-align: top;
  margin-right: 20px;
  /* Espaçamento entre as seções */
}

.stack-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.stack-details {
  margin-left: 10px;
}

.progress-bar {
  background-color: #f0f0f0;
  border-radius: 4px;
  height: 10px;
  width: 100px;
}

.progress {
  background-color: #4caf50;
  border-radius: 4px;
  height: 100%;
}
</style>
  