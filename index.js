// Implement Dynamic Functionality for cards and modal
// import projects from './projects';
const popupWindow = document.querySelector('.modal-container');
const projects = [
    {
        id: 1,
        name: 'Tonic',
        client: 'CANOPY',
        year: 2015,
        image: 'images/Snapshoot Portfolio.svg',
        technologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
        description:
            "A daily selection of privately personalized reads; no accounts or sign-ups required.",
        liveVersion: "url('https://pratap-kumar.github.io/')",
        source: "url('https://github.com/PRATAP-KUMAR')",
    },
    {
        id: 2,
        name: 'Tonic',
        client: 'CANOPY',
        year: 2020,
        image: './images/Snapshoot Portfolio.svg',
        technologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.",
        liveVersion: "url('https://pratap-kumar.github.io/')",
        source: "url('https://github.com/PRATAP-KUMAR')",
    },
    {
        id: 3,
        name: 'Multi post Stories',
        client: 'CANOPY',
        role: 'Back End Dev',
        year: 2019,
        image: './images/Snapshoot Portfolio.svg',
        technologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.",
        liveVersion: "url('https://pratap-kumar.github.io/')",
        source: "url('https://github.com/PRATAP-KUMAR')",
    },
    {
        id: 4,
        name: 'Multi post Stories',
        client: 'CANOPY',
        year: 2020,
        image: './images/Snapshoot Portfolio.svg',
        technologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry.",
        liveVersion: "url('https://pratap-kumar.github.io/')",
        source: "url('https://github.com/PRATAP-KUMAR')",
    },
];

function projectview(project) {
    var technologies = '';
    for (const tech of project.technologies) {
        technologies += `<li class="word-style">${tech}</li>`;
    }
    cardHtml = `
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
};

function projectDetailsView(projectId) {
    const projectDetailsModal = document.getElementById("projectDetailsModal");
    const project = projects[projectId - 1];
    var technologies = '';
    for (const tech of project.technologies) {
        technologies += `<li class="word-style">${tech}</li>`;
    }
    const projectDetailsHtml = `
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
        <h2>CANOPY</h2>
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
    </div>
  </div>
    `
    projectDetailsModal.innerHTML = projectDetailsHtml;
    // Open modal
    projectDetailsModal.style.display = "block";

    // // Close modal
    // const closeModal = document.getElementsByClassName("modal-close-icon")[0];
    // closeModal.addEventListener("click", () => {
    //     projectDetailsModal.style.display = "none";
    // });
};

document.addEventListener("DOMContentLoaded", () => {
    const portfolio = document.getElementById("portfolio");
    // portfolio.innerHTML = "<h3>Hello world</h3>";
    // iterate project array
    for (const project of projects) {
        console.log(project);
        // portfolio.innerHTML += `<h3>Hello world ${project.id}</h3>`;
        portfolio.innerHTML += projectview(project, 0);
    }
});
