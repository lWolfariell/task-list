const listElement = document.querySelector('ul')
const tarefaInput = document.querySelector('input');
const botaoInserir = document.querySelector('button');

const tarefas = JSON.parse(localStorage.getItem('list_tarefa')) || [];

window.addEventListener('load', mostrarTarefa);

function mostrarTarefa () {
    listElement.innerHTML = ''
    for (item of tarefas) {
        const itemList = document.createElement('li');
        const itemText = document.createTextNode(item);

        itemList.setAttribute('class', 'mdl-list__item');

        const linkElement = document.createElement('a');
        linkElement.setAttribute('class', 'material-icons');

        const linkText = document.createTextNode('delete');
        linkElement.appendChild(linkText);

        const pos = tarefas.indexOf(item);
        linkElement.setAttribute('onclick', `removeTarefa(${pos})`);
        
        itemList.appendChild(itemText);
        itemList.appendChild(linkElement);

        listElement.appendChild(itemList);
        
    }
    
}

function addTarefa() {
    const tarefa = tarefaInput.value;
    tarefas.push(tarefa);
    tarefaInput.value = '';
    mostrarTarefa();
    salvarLocalStorage ()

}

botaoInserir.setAttribute('onclick', 'addTarefa()');

function removeTarefa (pos) {
   tarefas.splice(pos, 1)
    /* tarefas.splice(pos, 1) */ // remove o item da posição, segundo argumento define quantos excluir
    mostrarTarefa()
    salvarLocalStorage ()
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        addTarefa();
        } else if (event.key === 'Delete'){
            removeTarefa();
        }
}

tarefaInput.addEventListener('keydown', handleKeyPress);

function salvarLocalStorage () {
    localStorage.setItem('list_tarefa', JSON.stringify(tarefas))
}
