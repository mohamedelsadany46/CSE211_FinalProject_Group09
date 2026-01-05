
document.addEventListener("DOMContentLoaded", () => {
 
  const links = document.querySelectorAll("#main-navigation a");
  const currentPath = window.location.pathname;

  links.forEach(link => {
    if (currentPath.includes(link.getAttribute("href"))) {
      link.classList.add("active");
    }
  });
});
