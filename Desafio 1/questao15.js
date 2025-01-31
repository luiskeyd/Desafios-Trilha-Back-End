// é criada uma função que retorna a soma de dois valores passados por parâmetro
function realizar_Soma(primeiro_numero, segundo_numero) {
  
  return primeiro_numero + segundo_numero;

}

// a primeira variável recebe o valor 10
let primeiro_numero = 10;

// a segunda variável recebe o valor 20
let segundo_numero = 20;

// a variável soma recebe a função que realiza a soma
let soma = realizar_Soma(primeiro_numero, segundo_numero);

// imprimimos na tela a variável soma, que contém o valor da soma do primeiro com o segundo valor
console.log(soma);