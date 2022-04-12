function handleSignupForm(event) {
  event.preventDefault();

  const email = document.getElementById('signup-email').value.trim();
  const username = document.getElementById('signup-username').value.trim();
  const password = document.getElementById('signup-password').value.trim();

  // If inputs are filled out
  if (email && username && password) {
    // Send input data to user route
    fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ email, username, password }),
      headers: { 'Content-Type': 'application/json' },
    }).then((response) => {
      console.log('RESPONSE', response);
      // If the response is 200, redirect to the dashboard
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to sign up.');
      }
    });
  }
}

document
  .getElementById('signup-form')
  .addEventListener('submit', handleSignupForm);
