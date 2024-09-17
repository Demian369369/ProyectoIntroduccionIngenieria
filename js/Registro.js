document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.getElementById("registerForm");
  
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("registerName").value;
      const password = document.getElementById("registerPassword").value;
  
      if (localStorage.getItem(username)) {
        alert("El usuario ya existe. Elige otro nombre.");
      } else {
        localStorage.setItem(username, password);
        alert("Usuario registrado exitosamente. Ahora puedes iniciar sesión.");
        registerForm.reset();
        window.location.href = "index.html";
      }
    });
  });
  