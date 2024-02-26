function toggleMenuNav() {
  let headerNav = document.getElementById("header-nav");
  headerNav.classList.toggle("active");

  let menuNav = document.getElementById("menuIcon");
  menuNav.classList.toggle("active");
}

document.getElementById("menuIcon").addEventListener("click", toggleMenuNav);
