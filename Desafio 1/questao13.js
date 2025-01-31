function areaDoCirculo(raio) {
  pi = 3.14;
  area = pi * (raio**2);
  return area;
}

raio = 5;
let areaCirculo = areaDoCirculo(raio);
console.log(areaCirculo);