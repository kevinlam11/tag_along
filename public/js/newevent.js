function createEvent(event) {
  event.stopPropagation();

  const title = document.getElementById('eventName').value.trim();
  const description = document.getElementById('eventDesc').value.trim();
  const dt = document.querySelector('#dateTime').value;

  if (event.target.matches("#createEvent")) {
    console.log(dt)
  
    if (title && description) {
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

document.addEventListener('click', createEvent);
