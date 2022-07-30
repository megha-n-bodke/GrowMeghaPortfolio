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

function projectview(project, display) {
//     cardHtml = `
// <section class="works-section-container" id="portfolio">
// <div class="card-container">
//   <div class="img-container">
//     <img
//       class="card-image desktop1"
//       src="images/works_section_images/img1.png"
//       alt=""
//     />
//   </div>
//   <div class="content-container">
//     <h2 class="project-title">Tonic</h2>
//     <div class="frame2">
//       <h2>CANOPY</h2>
//       <ul class="card-role">
//         <li>Back End Dev</li>
//         <li>2015</li>
//       </ul>
//     </div>

//     <div class="description">
//       <p>
//         A daily selection of privately personalized reads; no accounts
//         or sign-ups required.
//       </p>
//     </div>

//     <div class="languagecontaner">
//       <ul class="languages">
//         <li class="word-style">html</li>
//         <li class="word-style">css</li>
//         <li class="word-style">javaScript</li>
//       </ul>
//     </div>
//     <div class="action">
//       <button type="button" class="action-button">See Project</button>
//     </div>
//   </div>
// </div>
// `;
/* const techArr = projects.technologies.map(
    (tech) => `<li>${tech}</li>`,
  ); */
cardHtml = `<h3>Hello world ${project.id}</h3>
            <h1>${project.name}</h1>
            <ul></ul>
            <img src="${project.image}" class = "card-image desktop1">
            <div class="dascription"><p>${project.description}</p></div>
            <button class="action-button" onClick = modalPopUP(${project.id})>SeeProject</button>
            
`; 

return cardHtml;
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

  function modalPopUP(pid)
  {
    alert (pid);
    const data = project.find((card) => card.id === pid);
    
    let modalData = "";
    modalData += `
                  <div class='modal'>
                    <div class='modal-header'>
                      <h1>${data.title}</h1>
                      </div>`
  }