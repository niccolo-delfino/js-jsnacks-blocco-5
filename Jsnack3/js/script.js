// Jsnack3 - Creare  un array che contiene 10 oggetti che rappresentano una zucchina.
// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.

var zucchine = [
  {
    varieta : 'Nero di Milano',
    peso : 50,
    lunghezza : 20
  },
  {
    varieta : 'Alberello di Sarzana',
    peso : 100,
    lunghezza : 10
  },
  {
    varieta : 'Bolognese',
    peso : 50,
    lunghezza : 30
  },
  {
    varieta : 'Melissa',
    peso : 300,
    lunghezza : 25
  },
  {
    varieta : 'Ortano',
    peso : 400,
    lunghezza : 15
  },
  {
    varieta : 'Graffiti',
    peso : 150,
    lunghezza : 20
  },
  {
    varieta : 'Striato d′Italia',
    peso : 250,
    lunghezza : 30
  },
  {
    varieta : 'Lungo bianco',
    peso : 300,
    lunghezza : 10
  },
  {
    varieta : 'Lungo fiorentino',
    peso : 350,
    lunghezza : 25
  },
  {
    varieta : 'Romanesco',
    peso : 450,
    lunghezza : 10
  }
];
var zucchineCorte = [];
var zucchineLunghe = [];

for (var i = 0; i < zucchine.length; i++) {
  if (zucchine[i].lunghezza <= 15) {
    zucchineCorte.push(zucchine[i])
  } else {
    zucchineLunghe.push(zucchine[i])
  }
}

console.log(zucchineCorte);
console.log(zucchineLunghe);

var pesoCorte = 0;

for (var i = 0; i < zucchineCorte.length; i++) {
  pesoCorte += zucchineCorte[i].peso;
}

console.log('Il peso di tutte le zucchine Corte è ' + pesoCorte + ' grammi');

var pesoLunghe = 0;

for (var i = 0; i < zucchineLunghe.length; i++) {
  pesoLunghe += zucchineLunghe[i].peso;
}

console.log('Il peso di tutte le zucchine Lunghe è ' + pesoLunghe + ' grammi');
