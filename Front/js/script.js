const container = document.getElementById('container');
const registerBtn = document.getElementById('register'); // Asumiendo que 'register' es el id de un botón
const loginBtn = document.getElementById('login'); // Asumiendo que 'login' es el id de otro botón


registerBtn.addEventListener('click', () => {
  container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
  container.classList.remove("active");
});

