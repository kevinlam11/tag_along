// Take in input from modal form to be sent to post request.
function createEvent(event) {
  // event.preventDefault();
  const title = document.getElementById('eventName').value.trim();
  const description = document.getElementById('eventDesc').value.trim();
  const day_and_time = document.querySelector('#dateTime').value;
  if (event.target.matches('.createEvent')) {
    if (title && description && day_and_time) {
      fetch('/api/events', {
        method: 'POST',
        body: JSON.stringify({ title, description, day_and_time }),
        headers: { 'Content-Type': 'application/json' },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          window.location.reload();
        });
    }
  }
}

document.querySelector('.createEvent').addEventListener('click', createEvent);

function getMonth(date) {
  const monthArr = [
    'JANUARY',
    'FEBRUARY',
    'MARCH',
    'APRIL',
    'MAY',
    'JUNE',
    'JULY',
    'AUGUST',
    'SEPTEMBER',
    'OCTOBER',
    'NOVEMBER',
    'DECEMBER',
  ];
  const currentMonthIndex = date.getMonth() + 1;
  monthArr.forEach((month, i) => {
    console.log(i);
  });
}

function addDay(date) {
  // const dayEl = (document.createElement('div')).classList.add('date');
  const day = date.getDate();
  const year = date.getFullYear();
}

addDay(new Date());
getMonth(new Date());
