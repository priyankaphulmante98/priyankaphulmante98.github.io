const skills = [
    {
      name: "HTML",
      icon_url: "https://img.icons8.com/color/50/000000/html-5--v1.png",
      category: ["all", "frontend"],
    },
    {
      name: "CSS",
      icon_url: "https://img.icons8.com/color/50/000000/css3.png",
      category: ["all", "frontend"],
    },
    {
      name: "JavaScript",
      icon_url: "https://img.icons8.com/color/50/000000/javascript--v2.png",
      category: ["all", "frontend", "backend"],
    },
    {
      name: "REACT",
      icon_url: "https://img.icons8.com/color/50/000000/react-native.png",
      category: ["all", "frontend","backend"],
    },
    {
      name: "REDUX",
      icon_url: "https://img.icons8.com/color/48/000000/redux.png",
      category: ["all", "frontend"],
    },
    {
      name: "Material-UI",
      icon_url: "https://img.icons8.com/color/50/000000/material-ui.png",
      category: ["all", "frontend"],
    },
   
    {
      name: "Styled-components",
      icon_url: "../images/styled-components.png",
      category: ["all", "frontend"],
    },
    {
      name: "Postman",
      icon_url: "../images/postman.png",
      category: ["all", "backend"],
    },
    {
      name: "NPM",
      icon_url: "https://img.icons8.com/color/48/000000/npm.png",
      category: ["all", "frontend, backend"],
    },
    {
      name: "MONGODB",
      icon_url: "https://img.icons8.com/color/50/000000/mongodb.png",
      category: ["all", "backend"],
    },
    {
      name: "MONGOOSE",
      icon_url: "../images/mongoose.png",
      category: ["all", "backend"],
    },
    {
      name: "EXPRESS",
      icon_url : "https://img.icons8.com/color/48/000000/express.png",
      icon_url: "../images/ExpressJS.png",
      category: ["all", "backend"],
    },
    {
      name: "NODEJS",
      icon_url: "https://img.icons8.com/windows/48/000000/node-js.png",
      category: ["all", "backend"],
    },
    
    {
      name: "Rest API",
      icon_url: "https://img.icons8.com/nolan/64/api-settings.png",
      category: ["all", "backend"],
    },
    {
      name: "Vercel",
      icon_url: "../images/Vercel.png",
      category: ["all", "frontend"],
    },{
      name: "Heroku",
      icon_url: "../images/Heroku.png",
      category: ["all", "backend"],
    },{
      name: "Netlify",
      icon_url: "../images/Netlify.png",
      category: ["all", "frontend"],
    },
  ];
  
  let myTechnicalSkills = document.getElementById("myTechnicalSkills");
  let all_filter_btn = document.querySelector(".all_filter_btn");
  let frontend_filter_btn = document.querySelector(".frontend_filter_btn");
  let backend_filter_btn = document.querySelector(".backend_filter_btn");
  all_filter_btn.classList.add("active_tech_skills");
  all_filter_btn.addEventListener("click", () => {
    filterSkills("all");
    all_filter_btn.classList.add("active_tech_skills");
    frontend_filter_btn.classList.remove("active_tech_skills");
    backend_filter_btn.classList.remove("active_tech_skills");
  });
  
  frontend_filter_btn.addEventListener("click", () => {
    filterSkills("frontend");
    all_filter_btn.classList.remove("active_tech_skills");
    frontend_filter_btn.classList.add("active_tech_skills");
    backend_filter_btn.classList.remove("active_tech_skills");
  });
  backend_filter_btn.addEventListener("click", () => {
    filterSkills("backend");
    all_filter_btn.classList.remove("active_tech_skills");
    frontend_filter_btn.classList.remove("active_tech_skills");
    backend_filter_btn.classList.add("active_tech_skills");
  });
  
  function displaySkills(skills) {
    myTechnicalSkills.innerHTML = null;
    skills.forEach((skill) => {
      let itemContainer = document.createElement("div");
      itemContainer.setAttribute("class", "service-item padd-15");
      itemContainer.innerHTML = `<div class="service-item-inner">
          <div class="">
            <img src=${skill.icon_url} width="48px" height="48px"/>
          </div>
          <h4>${skill.name}</h4>
        </div>`;
  
      myTechnicalSkills.append(itemContainer);
    });
  }
  
  function filterSkills(basis) {
    let filtered = skills.filter((el) => {
      return el.category.includes(basis);
    });
    displaySkills(filtered);
  }
  
  displaySkills(skills);
  