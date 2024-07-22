//Variavel para alterar o Botão reiniciar
let reinicio = document.querySelector('#btn-reiniciar')

//Variavel para mandar o resultado para o Front
let resultado = document.querySelector('#resultado')

//função que limpa os campos e desativa novamente o botão de reinicio
function limpaCampo(){
    document.querySelector('#quantidade').value = '';
    document.querySelector('#de').value = '';
    document.querySelector('#ate').value = '';

    resultado.innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'

    reinicio.style.cssText = 'background: #6f6f70;' + 'cursor: not-allowed;'
}

//função que determina o sorteio dos numeros de acordo com os paramentros
function sortear(){

    //pega os valores digitados e os adiciona em variaveis
    let quantNum = parseInt(document.querySelector('#quantidade').value);
    let inicio = parseInt(document.querySelector('#de').value);
    let fim = parseInt(document.querySelector('#ate').value);

    //variaveis necessarias para guardar os numeros sorteados
    let numSorteados = [];
    let numSorteado

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
    //exibe o resultado na tela
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${numSorteados} </label>`

    //ativa o botão reiniciar 
    reinicio.style.cssText = 'background: #1875E8;' + 'cursor: pointer;'

}

//função que reinicia o jogo
function reiniciar() {
    limpaCampo();
    
}