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
  // Récupère la liste de navigation par son ID
  const navList = document.getElementById("nav-list");

  // Récupère tous les éléments <li> dans la liste
  const navItems = navList.querySelectorAll("li");

  // Ajoute un écouteur d'événement à chaque élément <li>
  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      // Supprime la classe "active" de tous les éléments
      navItems.forEach((navItem) => {
        navItem.classList.remove("active");
      });

      // Ajoute la classe "active" à l'élément cliqué
      this.classList.add("active");
    });
  });
});
