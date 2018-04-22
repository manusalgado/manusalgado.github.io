const square = function(x) {
  return x * x;
}

const porMismoNumero = (x) => x * x;

console.log(square(8));
console.log('Resultado de musltiplicar por el mismo numero: ', porMismoNumero());

const getFistName = (fullName) => fullName.split(' ')[0];
console.log('Solo se mostrara tu primer nombre ', getFistName('Salgado Manuel'));
