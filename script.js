document.addEventListener("DOMContentLoaded", () => {
  const myCarousel = document.querySelector('#haloCarousel');
  if (myCarousel) {
    new bootstrap.Carousel(myCarousel, {
      interval: 6000,
      ride: 'carousel'
    });
  }

  const container = document.getElementById("articulos");
  if (container) {
    fetch("data.json")
      .then(response => response.json())
      .then(articulos => {
        container.innerHTML = "";
        articulos.forEach(post => {
          const card = document.createElement("div");
          card.classList.add("card", "mb-4", "shadow", "bg-dark", "text-light");
          card.innerHTML = `
            <img src="${post.imagen}" class="card-img-top" alt="${post.titulo}">
            <div class="card-body">
              <h5 class="card-title">${post.titulo}</h5>
              <p class="card-text">${post.descripcion}</p>
              <p><span class="badge bg-primary">${post.categoria}</span></p>
              <a href="post.html?id=${post.id}" class="btn btn-outline-info">Leer más</a>
            </div>
            <div class="card-footer text-muted">Publicado el ${post.fecha}</div>
          `;
          container.appendChild(card);
        });
      })
      .catch(err => console.error("Error al cargar los artículos:", err));
  }
});
