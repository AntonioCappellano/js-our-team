const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png",
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png",
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png",
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png",
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png",
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png",
  },
];

const teamContainer = document.getElementById("team-container");
let cards = "";
for (const member of teamMembers) {
  cards += ` 
  
    <div class="col m-2 text-bg-dark d-flex align-items-start">
      <div class="card-image">
        <img " src="./${member.img}" class="img-fluid" alt="${member.img}" />
      </div>
       <div class="card-text">
         <h4>${member.name}</h4>
         <p>${member.role}</p>
         <a>${member.email}</a>
        </div>
    </div>
  
  `;
}
teamContainer.innerHTML = cards;
