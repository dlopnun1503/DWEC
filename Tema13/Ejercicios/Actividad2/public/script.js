document.addEventListener("DOMContentLoaded", () => {
    const lista = document.getElementById("lista");
    const nombreInput = document.getElementById("nombre");
    const apellidoInput = document.getElementById("apellido");
    const botonAnadir = document.getElementById("anadir");
  
    const cargarAlumnos = async () => {
      const res = await fetch("/api/alumnos");
      const alumnos = await res.json();
      lista.innerHTML = alumnos.map(a => `<li>${a.nombre} ${a.apellido}</li>`).join("");
    };
  
    botonAnadir.addEventListener("click", async () => {
      const nombre = nombreInput.value.trim();
      const apellido = apellidoInput.value.trim();
      if (!nombre || !apellido) return alert("Completa todos los campos");
  
      await fetch("/api/alumnos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, apellido })
      });
  
      nombreInput.value = "";
      apellidoInput.value = "";
      cargarAlumnos(); // Recargar lista
    });
  
    cargarAlumnos();
  });
  