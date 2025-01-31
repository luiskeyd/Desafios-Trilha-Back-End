let numero;

while (numero != 5) {
  numero = prompt('Digite um número');
  if (numero == 5) {
    console.log('Acertou miserável');
    break;
  }
  else {
    console.log('Esse não');
  }
}