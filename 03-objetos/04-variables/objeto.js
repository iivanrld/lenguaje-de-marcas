class Animal {
    constructor(nombre, tipo, habitat, edad, color) {
      this.nombre = nombre;
      this.tipo = tipo;
      this.habitat = habitat;
      this.edad = edad;
      this.color = color;
    }
  
    getNombre() {
      return this.nombre;
    }
  
    getTipo() {
      return this.tipo;
    }
  
    getHabitat() {
      return this.habitat;
    }
  
    getEdad() {
      return this.edad;
    }
  
    getColor() {
      return this.color;
    }
  
    setNombre(nombre) {
      this.nombre = nombre;
    }
  
    setTipo(tipo) {
      this.tipo = tipo;
    }
  
    setHabitat(habitat) {
      this.habitat = habitat;
    }
  
    setEdad(edad) {
      this.edad = edad;
    }
  
    setColor(color) {
      this.color = color;
    }
  }
  
  const perro = new Animal('Firulais', 'Perro', 'Casa', 5, 'Negro y Marrón');
  console.log(perro.getNombre());
  console.log(perro.getTipo());
  console.log(perro.getHabitat());
  console.log(perro.getEdad());
  console.log(perro.getColor());