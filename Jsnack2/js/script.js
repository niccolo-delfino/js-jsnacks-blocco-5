// Jsnack2 - Creare un array che contiene 10 oggetti che rappresentano una zucchina,
// indicandone per ognuno varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.

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

var pesoTotale = 0;

for (var i = 0; i < zucchine.length; i++) {
  pesoTotale += zucchine[i].peso;
}

console.log('Il peso di tutte le zucchine è ' + pesoTotale + ' grammi');
