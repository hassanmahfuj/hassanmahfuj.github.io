const items = [
  {
    imageSrc: "../image/hishabkitab.jpg",
    title: "Hishab Kitab App",
    description:
      "Accounting app to know the financial situation with numerous essential features.",
    skills: ["Android", "Java"],
    url: "https://play.google.com/store/apps/details?id=com.oshadharonlab.hk",
  },
  {
    imageSrc: "../image/woocommerce.jpg",
    title: "Netflix Bangladesh Website",
    description:
      "A wordpress woocommerce website for selling netflix subscription in Bangladesh.",
    skills: ["Web Development", "WordPress", "WooCommerce"],
    url: "https://www.netflixbangladesh.com",
  },
  {
    imageSrc: "../image/childrenssmile.jpg",
    title: "Children's Smile Foundation",
    description:
      "To provide education, treatment, food for underprivileged, helpless and poor children.",
    skills: ["Java", "Android", "Firebase"],
    url: "https://play.google.com/store/apps/details?id=com.oshadharonlab.childrenssmile",
  },
  {
    imageSrc: "../image/salat.jpg",
    title: "Salat Time Android App",
    description:
      "Get salat time by realtime location with this app. Don't kaza the Salat again.",
    skills: ["Java", "Android"],
    url: "https://play.google.com/store/apps/details?id=com.oshadharonlab.salat",
  },
  {
    imageSrc: "../image/spondon.jpg",
    title: "Spondon Blood Donation App",
    description:
      "An application for managing donors information of a blood donation organization.",
    skills: ["Java", "Android", "Firebase"],
    url: "https://play.google.com/store/apps/details?id=com.oshadharonlab.spondonreborn",
  },
  {
    imageSrc: "../image/shopsense.png",
    title: "Multi-Vendor eCommerce Solution",
    description:
      "This project aims to create a comprehensive online marketplace platform that allows multiple vendors to showcase and sell their products. The solution utilizes the Spring framework for robust backend development, Angular for building a dynamic and responsive web interface, and Flutter for crafting a seamless and engaging mobile app. This combination of technologies ensures efficient management of vendors, user-friendly web browsing, and a consistent experience across both web and mobile platforms.",
    skills: [
      "Java",
      "SpringBoot",
      "MySQL",
      "Angular",
      "Flutter",
      "Dart",
      "TypeScript",
      "SQL",
    ],
    url: "https://github.com/hassanmahfuj/Multi-Vendor-eCommerce-Solution-with-Spring-Angular-Flutter",
  },
  {
    imageSrc: "../image/hr-glance.png",
    title: "Human Resource Management System",
    description:
      "HR Management System is software which satisfies the needs of the Human Resources Department of a company to manage employees' personal data (citizen identity number, name, surname, birthdate, educational information etc.), timings, holidays, annual leaves, payroll and so on. My HR Management System will meet the needs for managing the personal data, attendance, leaves, payroll of an employee.",
    skills: ["Java", "Desktop App", "MySQL", "SQL"],
    url: "https://github.com/hassanmahfuj/HR-Glance",
  },
  {
    imageSrc: "../image/nodemcu.webp",
    title: "ESP8266 WiFi Switching Solution",
    description:
      "The project aims to simplify the process of switching between Access Point (AP) and Station (STA) modes on the ESP8266 NodeMCU module, making it more user-friendly and versatile for IoT and wireless networking applications. The project addresses the need for quick and hassle-free transitions between these modes, which are essential for IoT devices to connect to existing networks or establish their networks for other devices to connect.",
    skills: ["Arduino", "C++", "IoT", "Microcontroller"],
    url: "https://github.com/hassanmahfuj/ESP8266-Solution-For-Easy-WiFi-Connection",
  },
  {
    imageSrc: "../image/snowball.png",
    title: "Snowball Showdown - Online Game",
    description:
      "This is a thrilling two-player web game where you take on the role of either the red or blue player. Move your character vertically and throw snowballs at your opponent to score points. The first player to reach 15 points wins the game. With strategic movement and precise aim, it's a test of reflexes and accuracy in a fun snowball battle.",
    skills: ["HTML", "CSS", "JavaScript", "Game Development"],
    url: "https://hassanmahfuj.github.io/Snowball-Showdown-Online-Game",
  },
  {
    imageSrc: "../image/chatapp.png",
    title: "ChaterApp Android",
    description:
      "This open-source Android project leverages Firebase as a real-time database to create a feature-rich chat application with a strong emphasis on user privacy and simplicity. The core functionality of the app allows users to send messages, share their real-time location, and authenticate using their phone number.",
    skills: ["Android", "Firebase"],
    url: "https://github.com/hassanmahfuj/ChaterApp-Android-Firebase",
  },
  {
    imageSrc: "../image/chatappweb.jpg",
    title: "Realtime Chat Web Application",
    description:
      "This is a real-time chat application with a client in the browser developed using Angular for the frontend and Spring Boot for the backend. The backend uses WebSocket (via Spring's WebSocket support) for real-time communication between users. It also integrates with MySQL to store user data and chat history. Users can register with their email, first name, and last name, and then initiate chats with other registered users. The application also supports viewing and deleting old chats and allows users to sign out.",
    skills: ["Web Development", "Angular", "SpringBoot", "WebSocket"],
    url: "https://github.com/hassanmahfuj/Realtime-Chat-Application-with-SpringBoot-and-Angular",
  },
  {
    imageSrc: "../image/nestiverse.png",
    title: "Nestiverse - Rent Your Apartments App",
    description:
      "Nestiverse provide a platform for people to rent out their homes, apartments, or other types of accommodations to travelers and tourists.",
    skills: ["Firebase", "Android", "Flutter"],
    url: "https://github.com/hassanmahfuj/Nestiverse-Rent-Your-Apartments-Flutter-App",
  },
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function appendItems(items) {
  const contentDiv = document.querySelector(".p-content");
  contentDiv.innerHTML = "";
  const shuffledItems = shuffleArray(items);

  shuffledItems.forEach((item, index) => {
    const newItem = document.createElement("div");
    newItem.className = index % 2 === 0 ? "p-item" : "p-item-even";

    newItem.innerHTML = `
            <div class="p-item-start">
                <img src="${item.imageSrc}" />
            </div>
            <div class="p-item-end">
              <h1><a href="${item.url}" target="_blank">${item.title}</a></h1>
              <p>${item.description}</p>
            </div>
        `;

    contentDiv.appendChild(newItem);
  });
}

function filterItemsBySkill(skill) {
  return items.filter((item) => item.skills.includes(skill));
}

function loadItems(skill) {
  if (skill === "All") {
    appendItems(items);
  } else {
    const filteredItems = filterItemsBySkill(skill);
    appendItems(filteredItems);
  }
}

/************************** */

function getDistinctSkills() {
  const allSkills = items.flatMap((item) => item.skills);
  return [...new Set(allSkills)];
}

function createSkillChips() {
  const chipContainer = document.querySelector(".p-chip-container");
  const distinctSkills = getDistinctSkills();
  distinctSkills.unshift("All");

  distinctSkills.forEach((skill) => {
    const chip = document.createElement("div");
    chip.className = "p-chip";
    chip.textContent = skill;

    chip.addEventListener("click", () => {
      handleChipClick(chip, skill);
    });

    chipContainer.appendChild(chip);
  });
}

function handleChipClick(chip, skill) {
  const chips = document.querySelectorAll(".p-chip");
  chips.forEach((c) => c.classList.remove("p-chip-active"));

  chip.classList.add("p-chip-active");

  loadItems(skill);
}

function routeToPortfolio() {
  createSkillChips();
  handleChipClick(document.querySelector(".p-chip"), "All");
  loadItems("All");
}
