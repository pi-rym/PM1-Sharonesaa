const{  Activity, Repository} = require("../scripts/index");

describe("Activity y Repository son clases", function () {
    it("El constructor de Activity debe recibir parámetros", function () {
        expect(Activity).toBeDefined(); // Verifica que Activity esté definida
        expect(Activity.prototype.constructor.length).toBeGreaterThan(3);
    });

    it("Repository debe ser una clase", function () {
        expect(Repository).toBeDefined(); // Verifica que Repository esté definida
        expect(typeof Repository.prototype.constructor).toBe("function");
    });

    it("Debe existir un metodo getAllActivities()", function () {
      const repository = new Repository();
      expect(repository.getAllActivities).toBeDefined();
    });

    it("El metodo getAllActivities() debe retornar un array", function () {
      const repository = new Repository();
      expect(Array.isArray(repository.getAllActivities())).toBeTrue();
    });
    
  });

    


    