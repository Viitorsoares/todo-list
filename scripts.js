const input = document.querySelector('.input')
const listTask = document.querySelector('.list-task')

let listaItens = []

const button = document.querySelector('.btn').addEventListener('click', () => {
    listaItens.push(input.value)

    campoDeTarefas()
})

function campoDeTarefas() {

        let novaLi = ''

        campoDeTarefas.forEach(tarefa => {
            
            novaLi = novaLi + `
            <li class="task">
                <img src="img/check.png" alt="check-na-tarefa">
                <p>${tarefa}</p>
                <img src="img/excluir.png" alt="excluir-tarefa">
            </li>
            `

        });
}