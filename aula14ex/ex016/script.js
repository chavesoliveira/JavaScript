function contar() {
    let ini = document.getElementById('txti')//recebe o id do inicio
    let fim = document.getElementById('txtf')//recebe o id do fim
    let passo = document.getElementById('txtp')//recebe o id do passo
    let res = document.getElementById('res')//recebe res (preparando a cont..)
    // usando LET no lugar de VAR
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) { // se valor do ini é igual a 0
            // se o valor do fim é igual a 0
            // se o valor do passo é igual a 0
            // alert('[ERRO] Faltam dados!') vai dar o alerta !
        res.innerHTML = 'Impossível contar!'
    } else { // se não for 0 então 
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value) // variavel i recebe o valor do ini
        let f = Number(fim.value) // variavel f recebe o valor do fim
        let p = Number(passo.value) // variavel p recebe o valor do passo
        if (p <= 0){ // se o valor de p é igual ou menor que 0
            alert('Passo inválido! Considerando PASSO = 1') // erro dá o alert
            p = 1 // passa considerar passo = 1
        }
        if (i < f){ // se p valor de p é 1 ou maior 
            // Contagem crescente
            for (let c = i; c <= f; c+= p) {    //contar é igual a inicio
                                                // contar é menor q fim
                                                // contar soma com passo
                res.innerHTML += `${c} \u{1f449}`
            }
        } else { // se não for 1 positivo, se for negativo -1 ou menor -2 -3 
            // Contagem regressiva
            for (let c = i; c >= f; c -= p) {   // contar é igual a inicio
                                                // contar é menor q fim
                                                // contar soma com passo
                res.innerHTML += `${c} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1f3c1}`
    }
}