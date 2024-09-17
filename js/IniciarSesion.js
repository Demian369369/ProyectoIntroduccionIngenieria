document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
  
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("loginName").value;
      const password = document.getElementById("loginPassword").value;
  
      if (localStorage.getItem(username) === password) {
        alert("Inicio de sesión exitoso.");
        window.location.href = "Inicio.html"; 
      } else {
        alert("Nombre de usuario o contraseña incorrectos.");
      }
    });
  });
  
  