/* Dyanamic card display */
const projects = [
  {
    id: 1,
    name: 'Tonic',
    client: 'CANOPY',
    role: 'Back End Dev',
    year: 2015,
    image: './images/Snapshoot Portfolio.svg',
    technologies: ['html', 'Ruby', 'css'],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been Lorem Ipsum has been Lorem Ipsum has been Lorem Ipsum has been  lorem the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s",
    liveVersion:
      "url('https://github.com/megha-n-bodke/meghaportfolio.github.io')",
    source: "url('https://github.com/megha-n-bodke')",
  },
  {
    id: 2,
    name: 'Multi-Post Stories',
    client: 'CANOPY',
    role: 'Back End Dev',
    year: 2020,
    image: './images/Desktop2.svg',
    technologies: ['html', 'Ruby', 'css'],
    description:
      'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    liveVersion:
      "url('https://github.com/megha-n-bodke/meghaportfolio.github.io')",
    source: "url('https://github.com/megha-n-bodke')",
  },
  {
    id: 3,
    name: 'Tonic',
    client: 'CANOPY',
    role: 'Back End Dev',
    year: 2019,
    image: './images/Desktop3.svg',
    technologies: ['html', 'Ruby', 'css'],
    description:
      "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    liveVersion:
      "url('https://github.com/megha-n-bodke/meghaportfolio.github.io')",
    source: "url('https://github.com/megha-n-bodke')",
  },
  {
    id: 4,
    name: 'Multi post Stories',
    client: 'CANOPY',
    role: 'Back End Dev',
    year: 2020,
    image: './images/Desktop4.svg',
    technologies: ['html', 'Ruby', 'css'],
    description:
      'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    liveVersion:
      "url('https://github.com/megha-n-bodke/meghaportfolio.github.io')",
    source: "url('https://github.com/megha-n-bodke')",
  },
];

document.addEventListener('DOMContentLoaded', () => {
  let cardHtml = '';
  projects.map((project) => {
    const technologies = project.technologies.map(
      (element) => `<li class="word-style">${element}</li>`,
    );
    cardHtml += `
    <section class="works-section-container" id="portfolio">
    <div class="card-container">
      <div class="img-container">
        <img
          class="card-image desktop1"
          src="${project.image}"
          alt=""
        />
      </div>
      <div class="content-container">
        <h2 class="project-title">${project.name}</h2>
        <div class="frame2">
          <h2>${project.client}</h2>
          <ul class="card-role">
            <li>${project.role}</li>
            <li>${project.year}</li>
          </ul>
        </div>
    
        <div class="description">
          <p>${project.description}
          </p>
        </div>
    
        <div class="languagecontaner">
          <ul class="languages">
          ${technologies}
          </ul>
        </div>
        <div class="action">
          <button type="button" id=${project.id} class="action-button" onClick=projectDetailsView(${project.id})>
          See Project
          </button>
        </div>
      </div>
    </div>
    `;
    return cardHtml;
  });

  const portfolio = document.getElementById('portfolio');

  // eslint-disable-next-line no-unused-vars
  projectDetailsView = (projectId) => {
    const projectDetailsModal = document.getElementById('projectDetailsModal');
    const project = projects[projectId - 1];
    let technologies = '';
    project.technologies.forEach((element) => {
      technologies += `<li class="word-style">${element}</li>`;
    });
    const projectDetailsHtml = `
    <div class="modal-div">
   
    <div class="content-container">
    <div class="modal-topbar">
      <h2 class="project-title">${project.name}</h2>
      <i class="fa fa-times close-btn" id="close-modal" onClick="closeModal()"></i>
      </div>
      <div class="frame2">
        <h2>CANOPY</h2>
        <ul class="card-role">
          <li>${project.role}</li>
          <li>${project.year}</li>
        </ul>
      </div>
      <div class="img-container">
      <img
        class="modal-img desktop1"
        src="${project.image}"
        alt=""
      />
    </div>
<div class="modal-description">
      <div class="modal-paragraph">
        <p>${project.description}
        </p>
      </div>
<div class="modal-tech-sec">
      <div class="languagecontaner">
        <ul class="languages">
        ${technologies}
        </ul>
      </div>
      <div class="modal-buttons">
      <button type="button" class="modal-action-buttons">
      See live
      </button>
      <button type="button" class="modal-action-buttons">
      See Source
      </button>
    </div>
    </div>
  </div>
  </div>
    `;
    projectDetailsModal.innerHTML = projectDetailsHtml;
    projectDetailsModal.style.display = 'block';
  };

  // eslint-disable-next-line no-unused-vars
  closeModal = () => {
    const projectDetailsModal = document.getElementById('projectDetailsModal');
    projectDetailsModal.style.display = 'none';
  };

  portfolio.innerHTML = cardHtml;

  const projectDetailsModal = document.getElementById('projectDetailsModal');
  document.onclick = (e) => {
    if (e.target === projectDetailsModal) {
      projectDetailsModal.style.display = 'none';
    }
  };
});
