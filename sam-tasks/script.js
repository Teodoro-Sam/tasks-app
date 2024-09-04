// Seleciona os elementos do DOM
const taskInput = document.getElementById('new-task');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Função para adicionar uma nova tarefa
function addTask() {
    const taskText = taskInput.value;

    if (taskText === '') {
        alert('Por favor, insira uma tarefa.');
        return;
    }

    // Cria um novo item da lista
    const li = document.createElement('li');
    li.innerText = taskText;

    // Botão de deletar
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Deletar';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.onclick = function() {
        taskList.removeChild(li);
    };

    // Adiciona o botão de deletar ao item da lista
    li.appendChild(deleteBtn);

    // Adiciona o item na lista de tarefas
    taskList.appendChild(li);

    // Limpa o campo de entrada
    taskInput.value = '';
}

// Evento de clique no botão "Adicionar"
addTaskBtn.addEventListener('click', addTask);

// Evento de "Enter" no campo de texto
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
