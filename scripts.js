const input = document.querySelector('.input')
const listTask = document.querySelector('.list-task')

let itemsList = []

const button = document.querySelector('.btn').addEventListener('click', () => {
    itemsList.push({
        listTasks: input.value,
        completed: false
    })

    input.value = ''

    taskFields()
})

function taskFields() {

    let newList = ''

    itemsList.forEach((tasks, index) => {
        newList = newList + `
            <li class="task ${tasks.completed && "done"}">
                <img src="img/check.png" alt="check-na-tarefa" onclick="talkCompleted(${index})">
                <p>${tasks.listTasks}</p>
                <img src="img/excluir.png" alt="excluir-tarefa" onclick="deleteItems(${index})">
            </li>
            `
    });

    listTask.innerHTML = newList

    localStorage.setItem('list', JSON.stringify(itemsList))
}

function talkCompleted(index) {
    itemsList[index].completed = !itemsList[index].completed

    taskFields()
}

function deleteItems(index) {
    itemsList.splice(index, 1)

    taskFields()
}

function reloadTask() {
    const localStorageTasks = localStorage.getItem('list')

    if(localStorageTasks) {
    itemsList = JSON.parse(localStorageTasks)
    }

    taskFields()
}

reloadTask()
