//Sintaxe e Operadores.

function comparaNumero(n1, n2){
    const primeiraFrase =criaFrase1(n1, n2);
    const segundaFrase = criaFrase2(n1, n2);
    return`${primeiraFrase} ${segundaFrase}`;
}

function criaFrase1(n1, n2){
    let saoIguais = '';
    if(n1 !== n2){
        saoIguais ='não';
    }
    return`Os números ${n1}e ${n2} ${saoIguais} são iguais.`;
}

function criaFrase2(n1, n2){
    const soma = n1 + n2;

    let resultado10 = 'menor';
    let resultado20 = 'menor';

    const compara10 = soma >10;
    const compara20 = soma > 20;
}
if(compara10){
    resultado10 = 'maior';
}
if(compara20){
    compara20 = 'maior';
    return`Sua soma é ${soma}, que é  ${resultado10} que 10 e ${resultado20} que 20.`;
}
console.log(comparaNumero(5,6));