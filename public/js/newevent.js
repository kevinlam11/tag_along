const form = document.getElementById('createNewEvent');
const eventName = form.elements['eventName'];
const eventDesc = form.elements['eventDesc'];
const dateTime = form.elements['dateTime'];

// when new event is clicked, a modal pops up with the form
// when form submit is hit, input data is stored
// when form submit is hit, modal displays Event Created! and a close modal button