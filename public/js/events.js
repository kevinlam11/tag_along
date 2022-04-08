// to do: if there is a new event added, data is compiled into a container
function createEvent(event) {
  event.preventDefault();

  const title = document.getElementById('eventName').value.trim();
  const description = document.getElementById('eventDesc').value.trim();
  const dt = document.querySelector('#dateTime').value;
  console.log(dt)

  if (title && description && dt) {
    fetch('/api/events', {
      method: 'POST',
      body: JSON.stringify({ title, description, dt }),
      headers: { 'Content-Type': 'application/json' },
    }).then((response) => {
      return response.json()
    }).then((data) => {
      console.log(data);
    })
  }
}

document.getElementById('createEvent').addEventListener('submit', console.log('clicked'));
// event name
// to do: moment.js implementation into date and time
// user name
// description
// how many people have RSVP'd

// to do: rsvp badge functionality
