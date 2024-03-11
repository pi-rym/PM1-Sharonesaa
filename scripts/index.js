nextActivityId = 1;
class Activity {
    constructor(title, description, impUrl,id) {
        this.title = title;
        this.description = description;
        this.impUrl = impUrl;
        this.id = nextActivityId++;
    }
};

class Repository {
    constructor() {
        this.activities = [];
    };

    getAllActivities() {
        alert(this.activities);
        console.log(this.activities);
    }

    createActivity() {

        let activity = new Activity(
            document.getElementById('title').value,
            document.getElementById('description').value,
            document.getElementById('impUrl').value,
            document.getElementById('id').value,
            );
    
        this.activities.push(activity);

    alert(`Actividad agregada:\n${JSON.stringify(activity)}`);
    }
    
    deleteActivity() {
        
        const deleteId = parseInt(document.getElementById('id').value);
        const index = this.activities.findIndex(activity => activity.id === deleteId);
      
        if (index !== -1) {
          const deletedActivity = this.activities.splice(index, 1)[0];
          alert("Actividad eliminada:", deletedActivity);
        } else {
          alert("No se encontró ninguna actividad con el ID especificado.");
        }
      }
    }

const repository = new Repository();
