/*
  ID & Name:        Youssef Atta Mohamed - 223103574, Mohamed Ahmed Mohamed - 224200083, Wahballah ahmed wahballah - 221100971, Ziad Abdullah - 221101546
  Course:           CSE211 Web Programming
  Assignment:       Course Project
  Date:             30/12/2025
  Description:      Form validation for registration form
*/

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registration-form");

  form.addEventListener("submit", (event) => {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const eventSelect = document.getElementById("event").value;

    if (name.length < 3) {
      alert("Name must be at least 3 characters long.");
      event.preventDefault();
      return;
    }

    if (!email.includes("@")) {
      alert("Please enter a valid email address.");
      event.preventDefault();
      return;
    }

    if (phone.length < 10) {
      alert("Please enter a valid phone number.");
      event.preventDefault();
      return;
    }

    if (eventSelect === "") {
      alert("Please select an event.");
      event.preventDefault();
    }
  });
});