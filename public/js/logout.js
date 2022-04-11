const handleLogout = async (event) => {
  console.log('logging out', event);
  event.preventDefault();

  const response = await fetch('/api/users/logout', { method: 'POST'});
  window.location.href = window.location.origin + '/login';
};

let btn = document.getElementById('logout');
if (btn) {
  btn.addEventListener('click', handleLogout);
}
