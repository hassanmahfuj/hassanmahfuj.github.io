const toggleMenu = () => {
  //document.getElementById("menu").classList.toggle("show-menu");
  const menu = document.getElementById("menu");
  if (menu.classList.contains("hide-menu")) {
    menu.classList.remove("hide-menu");
    menu.classList.add("show-menu");
  } else {
    menu.classList.remove("show-menu");
    menu.classList.add("hide-menu");
  }
};

const openLink = (url) => {
  window.open(url, "_blank");
};
