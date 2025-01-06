const input = document.querySelector('.input')
const listTask = document.querySelector('.list-task')

let itemsList = []

const button = document.querySelector('.btn').addEventListener('click', () => {
    itemsList.push(input.value)

    input.value = ''

    taskFields()
})

function taskFields() {

    let newList = ''

    itemsList.forEach((tasks, index) => {
        newList = newList + `
            <li class="task">
                <img src="img/check.png" alt="check-na-tarefa">
                <p>${tasks}</p>
                <img src="img/excluir.png" alt="excluir-tarefa" class="delete-items">
            </li>
            `
    });

    listTask.innerHTML = newList
}
