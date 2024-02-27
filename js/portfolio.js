const items = [
  {
    imageSrc: "../image/hishabkitab.jpg",
    title: "HISHAB KITAB",
    description:
      "Accounting app to know the financial situation with numerous essential features.",
    skills: ["Android", "Java"],
  },
  {
    imageSrc: "../image/netflix.jpg",
    title: "NETFLIX BANGLADESH WEBSITE",
    description:
      "A wordpress woocommerce website for selling netflix subscription in Bangladesh.",
    skills: ["Web Development", "WordPress", "WooCommerce"],
  },
  {
    imageSrc: "../image/childrenssmile.jpg",
    title: "CHILDREN'S SMILE FOUNDATION",
    description:
      "To provide education, treatment, food for underprivileged, helpless and poor children.",
    skills: ["Java", "Android", "Firebase"],
  },
  {
    imageSrc: "../image/salat.jpg",
    title: "SALAT TIME ANDROID APP",
    description:
      "Get salat time by realtime location with this app. Don't kaza the Salat again.",
    skills: ["Java", "Android"],
  },
  {
    imageSrc: "../image/spondon.jpg",
    title: "SPONDON BLOOD DONATION APP",
    description:
      "An application for managing donors information of a blood donation organization.",
    skills: ["Java", "Android", "Firebase"],
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
                <h1>${item.title}</h1>
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
