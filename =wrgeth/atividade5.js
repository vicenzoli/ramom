const alunos = ['ramom', 'mateus', 'diego', 'ramom', 'joao', 'ramom', 'joao']
const contagem ={}

for(let aluno of alunos){
    if (contagem[aluno]){
        contagem[aluno]+= 1
    } else {
        contagem[aluno] = 1
    }
    
}
for(let cont in contagem){
    console.log(`o aluno ${cont} foi repetido ${contagem[cont]} vezes`)
}