class Activity {
  constructor(id, title, description, imgUrl) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.imgUrl = imgUrl;

  }
};

class Repository {
  constructor() {
    this.activities = [];
    this.id = 1;
  };

  getAllActivities() {
    alert(this.activities);
    return (this.activities);
  }

  createActivity() {
    const id = this.id++;

    let activity = new Activity(
      id,
      document.getElementById('title').value,
      document.getElementById('description').value,
      document.getElementById('imgUrl').value,
    );

    if (!title || !description || !imgUrl) {
      alert('Por favor completa todos los campos.');
      return; // Detener la ejecución de la función si falta algún campo
    }


    this.activities.push(activity);

    this.displayActivities(); // Llamar a la función para mostrar las tarjetas de actividad

    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
    document.getElementById('imgUrl').value = '';

    // alert(`Actividad agregada:\n${JSON.stringify(activity)}`);
  }

  displayActivities() {
    const container = document.getElementById('activityCardsContainer');
    container.innerHTML = ''; // Limpiar el contenedor antes de agregar las tarjetas

    // Usar map() para crear las tarjetas de actividad
    const activityCards = this.activities.map(activity => {
      const card = document.createElement('div');
      card.classList.add('carousel-item');
      card.classList.add('activity-card');
      const activityId = activity.id; // Obtener el ID de la actividad
      card.id = `activity-${activityId}`; // Asignar un ID único a cada tarjeta de actividad

      const title = document.createElement('h3');
      title.textContent = activity.title;

      const description = document.createElement('p');
      description.textContent = activity.description;

      const image = document.createElement('img');
      image.src = activity.imgUrl;
      image.alt = activity.title;

      // Agregar elementos a la tarjeta
      card.appendChild(title);
      card.appendChild(description);
      card.appendChild(image);
      // Botón de eliminar
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Eliminar';
      deleteBtn.classList.add('delete_id');
      deleteBtn.type = 'button';
      deleteBtn.onclick = () => this.deleteActivity(activityId); // Llamar a deleteActivity con el ID de la actividad
      card.appendChild(deleteBtn);

      return card;// Devolver la tarjeta como resultado del mapeo
    });


    // Appendear todos los elementos HTML mapeados al contenedor
    activityCards.forEach(card => {
      container.appendChild(card);
    });

    openPopup(document.querySelectorAll('.carousel-item').length - 1);

  }

  deleteActivity(activityId) {
    const index = this.activities.findIndex(activity => activity.id === activityId);

    if (index !== -1) {
      const deletedActivity = this.activities.splice(index, 1)[0];
      const activityElement = document.getElementById(`activity-${activityId}`);
      if (activityElement) {
        activityElement.remove();
        alert("Actividad eliminada:", deletedActivity);
      }
    } else {
      alert("No se encontró ninguna actividad con el ID especificado.");
    }
  }
};

const repository = new Repository();

var currentIndex = 0;
let keydownListener;

function openPopup(index) {
  // Obtiene el elemento popup
  var popup = document.getElementById('popup');
  // Obtiene el elemento overlay
  var overlay = document.getElementById('overlay');

  // Muestra el popup y el overlay
  popup.style.display = 'block';
  overlay.style.display = 'block';
  
  keydownListener = function(event) {
    if (event.key === 'ArrowLeft') {
      prevSlide();
    } else if (event.key === 'ArrowRight') {
      prevSlide();
    }
  };

  document.addEventListener('keydown', keydownListener);

  // Inicializa el carrusel al abrir el popup
  showCarouselItem(index);
}

// Función para cerrar el popup
function closePopup() {
  // Obtiene el elemento popup
  var popup = document.getElementById('popup');
  // Obtiene el elemento overlay
  var overlay = document.getElementById('overlay');

  document.removeEventListener('keydown', keydownListener);
  
  popup.style.display = 'none';
  overlay.style.display = 'none';
}

// Función para mostrar el elemento del carrusel según el índice
function showCarouselItem(index) {
  document.querySelectorAll('.carousel-item').forEach(function(item, i) {
    if (i === index) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
  currentIndex = index; // Actualizar currentIndex
}

// Función para avanzar en el carrusel
function nextSlide() {
  currentIndex++;
  if (currentIndex >= document.querySelectorAll('.carousel-item').length) {
    currentIndex = 0;
  }
  showCarouselItem(currentIndex);
}

// Función para retroceder en el carrusel
function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = document.querySelectorAll('.carousel-item').length - 1;
  }
  showCarouselItem(currentIndex);
}
