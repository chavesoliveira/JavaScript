function tabuada(){
    let num = document.getElementById('txtn')//recebe o id n
    let tab = document.getElementById('seltab')//recebe o id seltab
    if (num.value.length == 0) { //se o número for igual a 0
        alert('Por favor, digite um número!') // dá o alerta!
    } else {//se não for 0 então
        let n = Number(num.value)// n recebe o valor 
        let c = 1 // c de contador começa sempre em 1
        tab.innerHTML = '' //essa linha limpa o texto que está no option
        while (c <= 10) {//então cria a tabela
            let item = document.createElement('option')//createElement cria
            item.text = `${n} x ${c} = ${n*c}`// faz o calculo d multiplicão
            item.value = `tab${c}` 
            tab.appendChild(item) 
            c++ //conta o número de c com +1
        }
    }
}