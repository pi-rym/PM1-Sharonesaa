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
    return (this.activities);
  }

  createActivity(id, title, description, img){
    let activity = new Activity(
      id,
      title,
      description,
      img,
    );
    
    this.activities.push(activity);
  }

  buttonHandler() {
    const id = this.id++;
    const inputTitle = document.getElementById('title').value;
    const inputDescription = document.getElementById('description').value;
    const inputImg = document.getElementById('imgUrl').value;

    if (!inputTitle || !inputDescription || !inputImg) {
      alert('Por favor completa todos los campos.');
      return; // Detener la ejecución de la función si falta algún campo
    }

    this.createActivity(id, inputTitle, inputDescription, inputImg);
   
    this.transformActivities(); // Refrescar

    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
    document.getElementById('imgUrl').value = '';

    openPopup(document.querySelectorAll('.carousel-item').length - 1);

    // alert(`Actividad agregada:\n${JSON.stringify(activity)}`);
  }

  createTags(activity) {

    const {id, title, description, imgUrl} = activity;
    
    // Usar map() para crear las tarjetas de actividad
    const card = document.createElement('div');
    card.classList.add('carousel-item');
    card.classList.add('activity-card');
    card.id = `activity-${id}`; // Asignar un ID único a cada tarjeta de actividad

    const titleHtml = document.createElement('h3');
    titleHtml.innerHTML = title;

    const descriptionHtml = document.createElement('p');
    descriptionHtml.innerHTML = description;

    const imageHtml = document.createElement('img');
    imageHtml.src = imgUrl;
    imageHtml.alt = title;

    // Botón de eliminar
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Eliminar';
    deleteBtn.classList.add('delete_id');
    deleteBtn.type = 'button';
    deleteBtn.onclick = () => this.deleteActivity(id); // Llamar a deleteActivity con el ID de la actividad
    
    // Agregar elementos a la tarjeta
    card.appendChild(titleHtml);
    card.appendChild(descriptionHtml);
    card.appendChild(imageHtml);
    card.appendChild(deleteBtn);
    
    return card;
  }

  transformActivities(){
    
    const container = document.getElementById('activityCardsContainer');
    container.innerHTML = ''; // Limpiar el contenedor antes de agregar las tarjetas

    this.activities.map(activity => {
      container.append(this.createTags(activity));
    });

  }

  deleteActivity(id) {
    const index = this.activities.findIndex(activity => activity.id === id);

    if (index !== -1) {
      const deletedActivity = this.activities.splice(index, 1)[0];
      const activityElement = document.getElementById(`activity-${id}`);
      if (activityElement) {
        activityElement.remove();
        alert("Actividad eliminada:", deletedActivity);
      }
    } else {
      alert("No se encontró ninguna actividad con el ID especificado.");
    }
  };

}

const repository = new Repository();

// Disparador de buttonHandler al hacer click en el boton del form
document.getElementById('btn_form').addEventListener('click', () => {
  repository.buttonHandler()
});

// Codigo para Popup en adelante
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

// module.exports = { Activity, Repository};
