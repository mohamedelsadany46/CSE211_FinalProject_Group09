/*
  ID & Name:        Youssef Atta Mohamed - 223103574, Mohamed Ahmed Mohamed - 224200083, Wahballah ahmed wahballah - 221100971, Ziad Abdullah - 221101546
  Course:           CSE211 Web Programming
  Assignment:       Course Project
  Date:             30/12/2025
  Description:      Event search and filter functionality
*/

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