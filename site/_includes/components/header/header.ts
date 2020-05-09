const menuButton = document.getElementById("menu-button");

menuButton.addEventListener("click", (_event) => {
  const headerNav = document.getElementById("header-nav");
  headerNav.className += "navigation--open";
});
