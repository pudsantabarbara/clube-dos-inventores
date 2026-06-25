const days = [
  {
    day: 'Segunda-feira', theme: 'Exploradores do Futuro', icon: '', accent: 'green',
    mission: 'Imaginar e descobrir', question: '“E se eu pudesse inventar qualquer coisa?”',
    workshops: [
      ['Laboratório dos Inventores', 'Criação do crachá e diário do inventor. Ideias e invenções fantásticas com desenhos, mapas mentais e materiais diversos.'],
      ['Máquinas Malucas', 'Construção de máquinas imaginárias com sucata, papelão, materiais recicláveis e arduino.']
    ],
    skills: ['Criatividade', 'Expressão', 'Observação', 'Equipe']
  },
  {
    day: 'Terça-feira', theme: 'Sustentabilidade e Ciência', icon: '', accent: 'orange',
    mission: 'Explorar e experimentar', question: '“Como as coisas funcionam?”',
    workshops: [
      ['Projeto Automação do Jardim', 'Construção de circuito de irrigação automático com arduino.'],
      ['Missão Cientista', 'Experimentos científicos interativos envolvendo luz, ar, movimento, densidade e reações.']
    ],
    skills: ['Método científico', 'Sustentabilidade', 'Tecnologia']
  },
  {
    day: 'Quarta-feira', theme: 'Compartilhar e Inspirar', icon: '', accent: 'green',
    mission: 'Apresentar e inspirar', question: '“Como mostrar minha invenção para o mundo?”',
    workshops: [
      ['Passeio', 'Geração de memórias afetivas, valorização do aprendizado da jornada e fortalecimento de vínculos.'],
      ['Preparando a Invenção', 'Finalização dos projetos, ensaio de apresentação e celebração das conquistas da semana.']

]
      
    ],
    skills: ['Engenharia', 'Planejamento', 'Lógica', 'Criação']
  },
  {
    day: 'Quinta-feira', theme: 'Desafio da Inovação', icon: '', accent: 'orange',
    mission: 'Inovar e resolver problemas', question: '“Como posso melhorar algo que existe?”',
    workshops: [
      ['Inventando Soluções', 'Construção e aperfeiçoamento de protótipos com caneta 3D, montagem de objetos e criação de peças.'],
      ['Fábrica de Jogos', 'Criação de jogos físicos ou digitais adequados à faixa etária.']
    ],
    skills: ['Empatia', 'Inovação', 'Prototipagem']
  },
  {
     day: 'Sexta-feira', theme: 'Gamer, Robótica e Missões Digitais', icon: '', accent: 'green',
    mission: 'Construir, criar e compartilhar.', question: '“Como transformar uma ideia em algo real?”',
    
    workshops: [
      ['Engenheiros do Futuro', 'Desafios de construção utilizando estruturas, pontes, torres e mecanismos simples.'],
      ['Grande Exposição dos Inventores', 'Preparação visual dos projetos, narrativas, apresentação, organização e comunicação das invenções.']
    ],
    skills: ['Comunicação', 'Autoconfiança', 'Cultura científica']
  }
];

const wrap = document.querySelector('#days');
wrap.innerHTML = days.map(d => `
  <article class="day ${d.accent}">
    <h3>${d.day}</h3>
    <h4>${d.theme}</h4>
    <div class="day-icon">${d.icon}</div>
    <p class="mission"><b>Missão:</b><br>${d.mission}</p>
    <p class="question">${d.question}</p>
    <div class="workshops"><b>Oficinas</b>${d.workshops.map((w,i)=>`
      <div class="workshop"><span>${i+1}</span><p><strong>${w[0]}</strong>${w[1]}</p></div>`).join('')}
    </div>
    <div class="skills"><b>Competências</b><small>${d.skills.join(' • ')}</small></div>
  </article>
`).join('');

document.querySelector('.menu-btn').addEventListener('click', () => document.querySelector('.nav').classList.toggle('open'));
document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => document.querySelector('.nav').classList.remove('open')));
