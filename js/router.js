const route = (path) => {
  window.history.pushState({}, "", path);
  handleLocation();
};

const routes = {
  404: "/page/404.html",
  "/": "/page/myself.html",
  "/index.html": "/page/myself.html",
  "/skill": "/page/skill.html",
  "/portfolio": "/page/portfolio.html",
  "/contact": "/page/contact.html",
};

const handleLocation = async () => {
  const path = window.location.pathname;
  const route = routes[path] || routes[404];
  const html = await fetch(route).then((data) => data.text());
  document.getElementById("content").innerHTML = html;
};

window.onpopstate = handleLocation;

handleLocation();
