const prompt = require('prompt-sync')();

let saldo = 10000
let input
do{
    input = prompt(`
        escolha uma das opcões
        1- ver saldo
        2- depositar
        3- sacar 
        4- sair
        `)
        switch (input){
            case 1:
                console.log(`seu saldo é ${saldo}`)
                break

            case 2: let entrada = prompt(`qual valor voce quer depositar?`)
            if(!Number.isInteger(entrada)){
                console.log("o valor inserido é invalido")
                break
            }
            saldo += parseInt(entrada)
            break


            case 3: 
            let saida = prompt(`qual valor voce quer sacar `)
            if(!Number.isInteger(saida)){
                console.log("o valor inserido é invalido")
                break
            }
            saldo -= saida
            break


            case 4: console.log(`voce esta saindo do menu`)
            break


            default: 
            console.log(`voce saiu do menu`)
            break

        }
        console.log(`voce selecionou ${input}`)

} while (input != '4')

