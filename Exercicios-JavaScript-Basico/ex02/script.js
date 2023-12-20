/* const boletoPago = false;

if (boletoPago) {
    alert('O boleto está pago.');
} else if (boletoPago == false) {
    alert('O boleto não está pagp');
} */

//-----------------------------------------------------------------

const condicaoDoBoleto = prompt('O boleto está pago? [S/N]: ').toUpperCase();

//const condicaoDoBoleto = boleto;
//console.log(condicaoDoBoleto);

if (condicaoDoBoleto === 'S') {
    alert('O boleto está pago.');
} else {
    alert('O boleto não etá pagp.')
}
