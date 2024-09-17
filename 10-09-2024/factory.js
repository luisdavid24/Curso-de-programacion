function VehiculoFactory(tipo, opciones) {
    if (tipo === 'coche') {
      return new Coche(opciones);
    } else if (tipo === 'moto') {
      return new Moto(opciones);
    } else {
      throw new Error("Tipo de vehículo no soportado");
    }
}
  
  // Clases de Vehículos
function Coche({ marca, modelo, puertas }) {
    this.marca = marca;
    this.modelo = modelo;
    this.puertas = puertas;
    this.mover = function () {
      console.log(`${this.marca} ${this.modelo} está en movimiento.`);
    };
  }
function Moto({ marca, modelo, cilindrada }) {
    this.marca = marca;
    this.modelo = modelo;
    this.cilindrada = cilindrada;
    this.mover = function () {
      console.log(`${this.marca} ${this.modelo} está acelerando.`);
    };
  }
  
  // Crear vehículos con la fábrica
const miCoche = VehiculoFactory('coche', { marca: 'Toyota', modelo: 'Corolla', puertas: 4 });
const miMoto = VehiculoFactory('moto', { marca: 'Yamaha', modelo: 'R1', cilindrada: 1000 });
miCoche.mover(); // Toyota Corolla está en movimiento.
miMoto.mover();  // Yamaha R1 está acelerando.