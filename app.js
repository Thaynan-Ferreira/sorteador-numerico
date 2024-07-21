//função que determina o sorteio dos numeros de acordo com os paramentros
function sortear(){

    //pega os valores digitados e os adiciona em variaveis
    let quantNum = parseInt(document.querySelector('#quantidade').value);
    let inicio = parseInt(document.querySelector('#de').value);
    let fim = parseInt(document.querySelector('#ate').value);

    //variaveis necessarias para guardar os numeros sorteados
    let numSorteados = [];
    let numSorteado

    //Variavel para mandar o resultado para o Front
    let resultado = document.querySelector('#resultado')

    //for que percorre a quantidade de numeros a sere sorteados
    for(i = 1; i <= quantNum; i++){

        if (inicio < fim){
            //formula que sorteia um numero dentro do intervalo especificado
            numSorteado = Math.floor(Math.random() * (fim - inicio + 1)) + inicio;

            console.log(numSorteado);
            numSorteados.push(numSorteado);
            numSorteado = 0;
        }
        else{
            resultado.innerHTML = '<label class="texto__paragrafo">Intervalo invalido</label>'
        }
        
    }
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${numSorteados} </label>`
}