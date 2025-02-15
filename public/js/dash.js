const navTabs = document.querySelectorAll("#nav-tabs > a");
navTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    navTabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const navList = document.getElementById("nav-list");
  const navItems = navList.querySelectorAll("li");

  // Vérifie l'URL actuelle et applique "active" à la bonne entrée
  const currentPath = window.location.pathname;
  
  navItems.forEach((item) => {
    const link = item.querySelector("a");

    if (link && link.getAttribute("href") === currentPath) {
      item.classList.add("active");
    }

    item.addEventListener("click", function (event) {
      // Supprime "active" de tous les éléments
      navItems.forEach((navItem) => {
        navItem.classList.remove("active");
      });

      // Ajoute "active" à l'élément cliqué
      this.classList.add("active");
    });
  });
});
