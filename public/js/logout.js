var logoutFunction = async function () {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });
  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('Failed to log out');
  }
};

if (document.querySelector('#logout')) {
  document.querySelector('#logout').addEventListener('click', logoutFunction);

