console.log('hello!')

const tarefaInput = document.getElementById('tarefa-escrita');
const botaoInserir = document.getElementById('inserir-tarefa');
const listaTarefa = document.getElementById('list');
let contador = 0


botaoInserir.addEventListener('click', adcionarTarefa)
tarefaInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        adcionarTarefa();
    }
})


function adcionarTarefa () {
    const tarefaTexto = tarefaInput.value;

    //verifique se o texto digitado está vazio;
    if (tarefaTexto.trim() !== '') {
        ++contador; 

        const novaTarefa = document.createElement('li');
        novaTarefa.id = 'item' + contador
        novaTarefa.innerHTML = `        
        <a href ='#' id='${contador}' 
        class="tarefa" onclick='marcarItem(${contador})'> 
        ${tarefaTexto}
        </a>     
        
        <button onclick='deletarItem(${contador})' class="excluir">Excluir</button>
        
        <div class="line"></div>`;
        listaTarefa.appendChild(novaTarefa);
        tarefaInput.value ='';
    }


}

function marcarItem(id) {
    const tarefa = document.getElementById(id);
    const classe = tarefa.getAttribute('class');
    console.log(tarefa);
    
    if (classe == 'tarefa') {
        tarefa.classList.add ('marcar');
    } else {
        tarefa.classList.remove('marcar');
    }
}



function deletarItem(id) {     
    const item = document.getElementById('item' + id)
    item.parentNode.removeChild(item);
   
}


