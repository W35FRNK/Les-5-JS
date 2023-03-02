


const getal1 = prompt('Noteer een getal', 'Getal');
const getal2 = prompt('Noteer nog een getal', 'Getal' );
const som = parseInt(getal1) + parseInt(getal2);
const tekst = 'De som van uw gegeven getallen, namelijk ' + getal1 + ' en ' + getal2 + ' is ';

function optellenSom(getal1, getal2) {
  alert(tekst + som);
  
}

optellenSom(som);