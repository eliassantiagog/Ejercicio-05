let miListaDePendientes = [
    "Oppenheimer", 
    "Dune", 
    "Mi nombre es Sam", 
    "Efecto Mariposa"];

console.log(`Lista original: ${miListaDePendientes}`); //Consulta: de esta forma el listado o de la siguiente?

console.log("\nLista original:", miListaDePendientes);

miListaDePendientes.push("El pacto");

console.log("\nLista después de agregar una película:" , miListaDePendientes);

miListaDePendientes[1] = "Harry Potter y el prisionero de Azkaban";

console.log("\nLista final actualizada:" , miListaDePendientes);