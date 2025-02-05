
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que la página se recargue

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "" || password === "") {
        alert("Por favor, llena todos los campos.");
        return;
    }

    // Simulación de login con usuario "admin" y contraseña "1234"
    if (username === "admin" && password === "1234") {
        alert("Inicio de sesión exitoso. Redirigiendo...");
        window.location.href = "dashboard.html"; // Redirigir a otra página
    } else {
        alert("Usuario o contraseña incorrectos.");
    }
});

