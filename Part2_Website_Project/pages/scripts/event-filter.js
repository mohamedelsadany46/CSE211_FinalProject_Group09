
document.addEventListener("DOMContentLoaded", () => {
  const rows = document.querySelectorAll("tbody tr");
  const today = new Date();

  rows.forEach(row => {
    const dateText = row.querySelector("time").getAttribute("datetime");
    const eventDate = new Date(dateText);

    if (eventDate < today) {
      row.style.opacity = "0.5"; 
    }
  });
});
