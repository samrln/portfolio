<template>
  <div class="engineer">
    <div class="header">
      <h1>Portfolio de Engenharia</h1>
    </div>
    <div class="formation">
      <div class="formacao">
        <img src="../assets/sam_eng.jpg">
      </div>
      <div class="resumos">
        <div>
          <h2>FONTES</h2>
          <h3>Empresa Jr.</h3>
          <p> 
            Durante minha participação na empresa júnior Fontes, atuei no cargo de Projetos, desempenhando um papel fundamental no desenvolvimento de projetos voltados para a área de engenharia de energia. Contribuí para a criação de soluções inovadoras, aplicando meus conhecimentos técnicos e habilidades de gerenciamento de projetos. Minha experiência na Fontes me proporcionou uma visão abrangente do setor e a oportunidade de aplicar meu aprendizado acadêmico em desafios reais.
          </p>
        </div>
        <div>
          <h2>Método de Diferenças Finitas Aplicadas a Lei de Resfriamento de Newton</h2>
          <h3>iniciacao cientifica</h3>
          <p>Iniciação científica que visa estudar métodos numéricos para a resolução de equações diferenciais, em particular, a equação de distribuição da temperatura em módulos fotovoltaicos, a qual pode ser concebida para calcular a eficiência energética associada a esses coletores.</p>
        </div>
        <div>
          <h2>Sistemas Scada as a Service (SaaS) para gestão de energia comparado aos sistemas convencionais</h2>
          <h3>TCC</h3>
          <p>SCADA as a Service é um sistema remoto de controle e aquisição de dados em nuvem que permite monitorar e processar informações, registrando eventos. Um estudo sobre o uso desse sistema na gestão de energia busca compreender suas vantagens, desvantagens e diferenças em relação aos sistemas tradicionais. A possibilidade de hospedar o SCADA na nuvem cria um novo modelo de negócio com benefícios significativos para o gerenciamento energético.</p>
        </div>
      </div>
    </div>
    <div>
      <h2>certificados</h2>
    </div>
  </div>
</template>

<style scoped>
.engineer {
  flex-direction: column;
  width: max-width;
  height: 500px;
}
.header {
  color: black;
}
.formation {
  display: flex;
  align-items: flex-start;
}

.formacao {
  flex: 1;
  background-color: #f2f2f2;
  padding: 10px;
}
.formacao img {
  margin: 10px;
  width: 200px;
  height: 200px;
  border-radius: 10%;
}

.resumos {
  flex: 1;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.resumos > div {
  padding: 10px;
}
.resumos > div > p {
  text-align: justify;
}
</style>