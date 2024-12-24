const days = [
    'December 23', 'December 24', 'December 25', 'December 26', 'December 27', 'December 28', 'December 29', 
    'December 30', 'December 31', 'January 1', 'January 3'
  ];
  
  const texts = {
    'December 23': 'The Boy and The Heron, our first movie and first...',
    'December 24': 'Saturday mornings with you, me, and Dr. Hakim',
    'December 25': 'In the car while it snowed outside',
    'December 26': 'At the beach',
    'December 27': 'Countless meetings-of-the-minds and food exchanges at IKEA',
    'December 28': 'The Japan and MCAT arc! What time zone difference!',
    'December 29': 'The day I made what might be the best decision of my life',
    'December 30': 'A tent in the forest.',
    'December 31': 'Elora and James Ross.',
    'January 1': 'A years worth of holidays, from last new years to this one. Thank you for being my 2024.',
    'January 3': 'BONUS! 30 years since the most important day on earth happened lol'
  };
  
  const daysArray = days.map(day => {
    const [month, dayNum] = day.split(' ');
    const monthIndex = new Date(`${month} 1`).getMonth(); // Get month index
    const year = monthIndex === 0 && new Date().getMonth() === 11 // If January and today is December
      ? new Date().getFullYear() + 1
      : new Date().getFullYear();
    return new Date(year, monthIndex, parseInt(dayNum));
  });
  
  const grid = document.getElementById('grid');
  
  // Get today's date as a Date object
  const today = new Date();
  
  // Create the advent calendar
  for (let i = 0; i < days.length; i++) {
    const currentDay = daysArray[i];
    const message = texts[days[i]];  // Get the message for the current day
  
    grid.innerHTML += `
      <div class="day">
        <div class="door door-${days[i]}">
          <div class="number">${days[i]}</div>
        </div>
        <div class="bg-text">${message}</div>
      </div>
    `;
  }
  
  let doors = document.getElementsByClassName('door');
  
  // Check if the door corresponds to today or any day before it
for (let i = 0; i < daysArray.length; i++) {
    const currentDay = daysArray[i];
    const currentDayString = days[i]; // For message and display purposes
  
    // Skip adding an event listener for days not reached yet
    //if (currentDay > today) continue;
  
    // Allow the door to open if the date is equal to or before today
    doors[i].addEventListener('click', () => {
      doors[i].classList.add('open');
    });
  }