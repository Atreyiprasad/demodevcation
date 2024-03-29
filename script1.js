const daysList = document.querySelector('.days');

// Function to generate calendar days
function generateCalendarDays() {
  daysList.innerHTML = '';
  const daysInMonth = 31; // Change this based on the current month
  
  for (let i = 1; i <= daysInMonth; i++) {
    const day = document.createElement('li');
    day.textContent = i;
    daysList.appendChild(day);
    
    // Add event listener to each day for user input
    day.addEventListener('click', () => {
      const event = prompt(`Enter event for ${i}`);
      if (event) {
        // Here, you can save the event to your database or perform any other action
        alert(`Event "${event}" added for ${i}`);
      }
    });
  }
}

generateCalendarDays();
