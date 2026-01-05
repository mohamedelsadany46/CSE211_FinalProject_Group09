/*
  ID & Name:        Youssef Atta Mohamed - 223103574, Mohamed Ahmed Mohamed - 224200083, Wahballah ahmed wahballah - 221100971, Ziad Abdullah - 221101546
  Course:           CSE211 Web Programming
  Assignment:       Course Project
  Date:             30/12/2025
  Description:      Budget calculator functionality for event cost calculation
*/

document.addEventListener("DOMContentLoaded", () => {
  const ticketInput = document.getElementById("ticket");
  const travelInput = document.getElementById("travel");
  const hotelInput = document.getElementById("hotel");
  const result = document.getElementById("total-result");
  const button = document.getElementById("calculate-btn");

  button.addEventListener("click", () => {
    const ticket = Number(ticketInput.value) || 0;
    const travel = Number(travelInput.value) || 0;
    const hotel = Number(hotelInput.value) || 0;

    const total = ticket + travel + hotel;

    result.textContent = `$${total.toFixed(2)}`;
  });
});