function createEvent(event) {
  event.preventDefault();

  const title = document.getElementById('eventName').value.trim();
  const description = document.getElementById('eventDesc').value.trim();
  const dt = document.querySelector('#dateTime').value;

  if (event.target.matches("#createEvent")) {
    console.log(dt)
  
    if (title && description && dt) {
      fetch('/api/events', {
        method: 'POST',
        body: JSON.stringify({ title, description }),
        headers: { 'Content-Type': 'application/json' },
      }).then((response) => {
        return response.json()
      }).then((data) => {
        console.log(data);
      })
    }
  }
}

// document.addEventListener('click', createEvent);
// when new event is clicked, a modal pops up with the form
// when form submit is hit, input data is stored
// when form submit is hit, modal displays Event Created! and a close modal button