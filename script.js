  // Seleccionar elementos del DOM
  const formulario = document.querySelector('form');
  const galeria = document.querySelector('.galeria');

  // Escuchar el evento 'submit' del formulario
  formulario.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevenir el comportamiento por defecto (recargar página)

    // Obtener valores del formulario
    const nombre = formulario.querySelector('input[placeholder="nombre..."]').value;
    const precio = formulario.querySelector('input[placeholder="precio..."]').value;
    const imagen = formulario.querySelector('input[placeholder="imagen..."]').value;

    // Validar que los campos no estén vacíos
    if (!nombre || !precio || !imagen) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    // Crear la estructura de una nueva tarjeta
    const nuevaTarjeta = document.createElement('div');
    nuevaTarjeta.classList.add('producto');

    nuevaTarjeta.innerHTML = `
      <img src="${imagen}" alt="${nombre}">
      <p>${nombre}</p>
      <span>$ ${precio}</span>
      <button class="eliminar">🗑️</button>
    `;

    // Agregar la nueva tarjeta al contenedor de galería
    galeria.appendChild(nuevaTarjeta);

    // Agregar funcionalidad al botón eliminar
    nuevaTarjeta.querySelector('.eliminar').addEventListener('click', () => {
      nuevaTarjeta.remove(); // Eliminar la tarjeta del DOM
    });

    // Limpiar los campos del formulario
    formulario.reset();
  });

