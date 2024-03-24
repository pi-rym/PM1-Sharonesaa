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

    if (!inputTitle.value || !inputDescription.value || !inputImg.value) {
      alert('Por favor completa todos los campos.');
      return; // Detener la ejecución de la función si falta algún campo
    }

    this.createActivity(id, inputTitle.value, inputDescription.value, inputImg.value);
   
    this.transformActivities(); // Refrescar

    inputTitle.value = '';
    inputDescription.value = '';
    inputImg.value = '';

    openPopup(Array.from(activityCardsContainer.children).length - 1);
  }

  transformActivities(){
    // Limpiar el contenedor antes de agregar las tarjetas
    activityCardsContainer.innerHTML = '';

    this.activities.map(activity => {
      activityCardsContainer.append(createTags(activity));
    });

  }
}

const repository = new Repository();

module.exports = {Activity, Repository};
