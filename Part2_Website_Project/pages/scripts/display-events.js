/*
  ID & Name:        Youssef Atta Mohamed - 223103574, Mohamed Ahmed Mohamed - 224200083, Wahballah ahmed wahballah - 221100971, Ziad Abdullah - 221101546
  Course:           CSE211 Web Programming
  Assignment:       Course Project
  Date:             30/12/2025
  Description:      Display events from database dynamically
*/

function loadEvents() {
  fetch('../scripts/get-events.php')
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        displayEvents(data.events);
      }
    })
    .catch(error => console.error('Error:', error));
}

function displayEvents(events) {
  const tbody = document.querySelector('table tbody');
  if (!tbody) return;
  
  tbody.innerHTML = '';
  
  events.forEach(event => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td data-label="Event Name">${event.name}</td>
      <td data-label="Date"><time datetime="${event.date}">${event.date}</time></td>
      <td data-label="Location">${event.location}</td>
      <td data-label="Cost">$${event.cost}</td>
    `;
    tbody.appendChild(row);
  });
}

document.addEventListener('DOMContentLoaded', loadEvents);