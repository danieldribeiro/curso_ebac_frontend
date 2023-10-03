const alunos = [
    {nome: "Daniel", nota: 10},
    {nome: "João", nota: 6},
    {nome: "Maria", nota: 8},
    {nome: "Rafaela", nota: 4},
    {nome: "Diego", nota: 3}
];

const aprovados = alunos.filter((i)=>{
    return i.nota >= 6;
})

console.log(aprovados)