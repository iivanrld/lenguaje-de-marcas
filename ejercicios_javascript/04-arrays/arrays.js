// Crear una lista de diez (10) animales
let animales = ['Perro', 'Gato', 'Elefante', 'León', 'Cebra', 'Pipito feliz', 'Pipito triste', 'Conejo', 'Oso', 'Caballo'];

// Enviar a la consola del navegador todos los valores del array
console.log('Todos los animales:', animales);

// Enviar a la consola el elemento indexado como 0, 4, 6 y 11
console.log('Elemento indexado como 0:', animales[0]);
console.log('Elemento indexado como 4:', animales[4]);
console.log('Elemento indexado como 6:', animales[6]);
console.log('Elemento indexado como 11:', animales[11]);

// Realizar un cambio del elemento cinco (5) del array por el animal “Pipito feliz”
animales[4] = 'Pipito feliz';

// Añadir un nuevo elemento al array, animal “Pipito triste”
animales.push('Pipito triste');

// Comprobar el tipo del array (typeof)
console.log('Tipo del array:', typeof animales);

// Mostrar el tamaño del array en consola
console.log('Tamaño del array:', animales.length);