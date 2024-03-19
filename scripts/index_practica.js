class ToDoList{
    constructor(){
        this.todolist = [];
    }

    gettodo(){
        return this.todolist;

    }

    addtodo(todo){
        this.todolist.push(todo)

    }

    deletetodo(todo){
        this.todolist.pop(todo)

    }
}




module.exports = ToDoList;