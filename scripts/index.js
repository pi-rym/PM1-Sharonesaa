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
        return(this.activities);
    }

    createActivity(title, description, imgUrl) {
        const id = this.id++;

        let activity = new Activity(
            id,
            title = document.getElementById('title').value,
            description = document.getElementById('description').value,
            imgUrl =document.getElementById('imgUrl').value,
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

    alert(`Actividad agregada:\n${JSON.stringify(activity)}`);
    }

    displayActivities() {
        const container = document.getElementById('activityCardsContainer');
        container.innerHTML = ''; // Limpiar el contenedor antes de agregar las tarjetas

        // Usar map() para crear las tarjetas de actividad
        const activityCards = this.activities.map(activity => {
            const card = document.createElement('div');
            const activityId = activity.id; // Obtener el ID de la actividad
            card.id = `activity-${activityId}`; // Asignar un ID único a cada tarjeta de actividad
            card.classList.add('activity-card');

                
            const title = document.createElement('h3');
            title.textContent = activity.title;
            
            const description = document.createElement('p');
            description.textContent = activity.description;
            
            const image = document.createElement('img');
            image.src = activity.impUrl;
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
    }
    
    deleteActivity(activityId) {
        const index = this.activities.findIndex(activity => activity.id === activityId);
      
        if (index !== -1) {
            const deletedActivity = this.activities.splice(index, 1)[0];
            const activityElement = document.getElementById(`activity-${activityId}`);
            if (activityElement) {
                activityElement.remove();
            }
            alert("Actividad eliminada:", deletedActivity);
        } else {
            alert("No se encontró ninguna actividad con el ID especificado.");
        }
    }
    }

const repository = new Repository();
