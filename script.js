document.addEventListener("DOMContentLoaded", function() {
  var calendar = document.getElementById('calendar');
  var generateButton = document.getElementById('generate-calendar');

  generateButton.addEventListener('click', function() {
    var startDateInput = document.getElementById('start-date').value;
    var endDateInput = document.getElementById('end-date').value;

    if (!startDateInput || !endDateInput) {
      alert("Please enter both start and end dates.");
      return;
    }

    var startDate = new Date(startDateInput);
    var endDate = new Date(endDateInput);

    if (startDate > endDate) {
      alert("Start date cannot be after end date.");
      return;
    }

    generateCalendar(startDate, endDate);
  });

  function generateCalendar(startDate, endDate) {
    calendar.innerHTML = ''; // Clear previous calendar

    while (startDate <= endDate) {
      var currentYear = startDate.getFullYear();
      var currentMonth = startDate.getMonth();

      var daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
      var weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

      var headerRow = document.createElement('div');
      headerRow.classList.add('week-header');
      weekdays.forEach(function(day) {
        var dayDiv = document.createElement('div');
        dayDiv.textContent = day;
        headerRow.appendChild(dayDiv);
      });
      calendar.appendChild(headerRow);

      for (var i = 1; i <= daysInMonth; i++) {
        var dayDiv = document.createElement('div');
        dayDiv.classList.add('calendar-day');
        dayDiv.textContent = i;
        calendar.appendChild(dayDiv);
      }

      startDate.setMonth(startDate.getMonth() + 1); // Move to next month
    }
  }
});
