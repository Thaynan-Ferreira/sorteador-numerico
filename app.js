//pega os valores digitados e os adiciona em variaveis
let quantNum = parseInt(document.querySelector('#quantidade').value);
let inicio = parseInt(document.querySelector('#de').value);
let fim = parseInt(document.querySelector('#ate').value);
let numSorteados = [];
let numSorteado

//função que determina o sorteio dos numeros de acordo com os paramentros
function sortear(){
    for(i = 1; i <= quantNum; i++){

        if (inicio < fim){
            //formula que sorteia um numero dentro do intervalo especificado
            numSorteado = Math.floor(Math.random() * (fim - inicio + 1)) + inicio;

            console.log(numSorteado);
            numSorteados.push(numSorteado);
            numSorteado = 0;
        }
        else{
            console.log('Intervalo invalido')
        }
        
    }
    console.log(numSorteados)
}