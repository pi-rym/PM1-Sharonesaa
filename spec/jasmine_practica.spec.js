
// const ToDoList = require("../scripts/index_practica");

// describe("Es una clase ToDoList", function () {
//   it("Debe ser una clase", function () {
//     expect(typeof ToDoList.prototype.constructor).toBe("function");
//   });

//     it("Debe tener un metodo gettodo()", function () {
//       const lista = new ToDoList();
//       expect(lista.gettodo).toBeDefined();
//     });

//     it("Debe agregar un elemento a la lista", function () {
//       const lista = new ToDoList();
//       expect(lista.addtodo).toBeDefined();
//     });

//     it("Debe tener el método eliminar ", function () {
//       const lista = new ToDoList();
//       expect(lista.deletetodo).toBeDefined();
//     });

//     it("El metodo gettodo() debe retornar un array", function () {
//       const lista = new ToDoList();
//       expect(Array.isArray(lista.gettodo())).toBeTrue();
//     });

//     it("El metodo addtodo() debe agregar un elemento a la lista", function () {
//       const lista = new ToDoList();
//       lista.addtodo("Esto es una practica");
//       expect(lista.gettodo()).toContain("Esto es una practica");
//     });

//     it("El metodo deletetodo() debe eliminar la ultima tarea ", function () {
//       const lista = new ToDoList();
//       lista.addtodo("Juan");
//       lista.addtodo("Pablo");
//       lista.addtodo("Maria");
//       lista.deletetodo();
//       expect(lista.gettodo()).toContain("Juan");
//       expect(lista.gettodo()).toContain("Pablo");
//       expect(lista.gettodo()).not.toContain("Maria");
//     });




// });
