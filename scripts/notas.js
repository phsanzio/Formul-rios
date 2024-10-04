let style;

function clear_input(){
    const hiddenDiv = document.getElementById('hidden_div');
    hiddenDiv.style.display = 'none';
    hiddenDiv.textContent = '';
    
    const input = document.getElementById('write_task');
    input.value = '';
}


function save_task(){
    const newTaskContent = document.getElementById('write_task');
    const hiddenDiv = document.getElementById('hidden_div');

    if (newTaskContent.value == ''){
        hiddenDiv.textContent = 'Insira a tarefa por favor!';
        hiddenDiv.style.display = 'block';
    } else{
        hiddenDiv.style.display = 'none';
        hiddenDiv.textContent = '';
        
        const priority = document.querySelector('input[name="priority"]:checked').value;

        const newTask = document.createElement('div');
        
        newTask.classList.add('todo')

        if (priority == 'alta'){
            newTask.id = 'task_high';
        } else {
            newTask.id = 'task_low';
        }

        const newCheckbox = document.createElement('input');
        newCheckbox.type = 'checkbox';

        const newLabel = document.createElement('label');
        newLabel.textContent = newTaskContent.value;

        
        newCheckbox.addEventListener('change', function() {
            if (this.checked) {
                newLabel.style.textDecoration = 'line-through';
                newTask.classList.remove('todo');
                newTask.classList.add('done'); 
            } else {
                newLabel.style.textDecoration = 'none';  
                newTask.classList.remove('done');
                newTask.classList.add('todo'); 
            }
        });

        newTask.appendChild(newCheckbox);
        newTask.appendChild(newLabel);

        document.getElementById('gallery_tasks').appendChild(newTask);
        newTaskContent.value = '';
    }
}

function view_lowTasks(){
    
    if (style) {
        document.head.removeChild(style);
        style = null;
    }

    style = document.createElement('style');
    style.innerHTML = '#task_high {display: none !important;}';
    document.head.appendChild(style);

}

function view_highTasks(){
    if (style) {
        document.head.removeChild(style);
        style = null;
    }

    style = document.createElement('style');
    style.innerHTML = '#task_low {display: none !important;}';
    document.head.appendChild(style);
}

function view_doneTasks(){
    if (style) {
        document.head.removeChild(style);
        style = null;
    }

    style = document.createElement('style');
    style.innerHTML = '.todo {display: none !important;}';
    document.head.appendChild(style);
}

function view_todoTasks(){
    if (style) {
        document.head.removeChild(style);
        style = null;
    }

    style = document.createElement('style');
    style.innerHTML = '.done {display: none !important;}';
    document.head.appendChild(style);
}

function view_allTasks(){
    if (style) {
        document.head.removeChild(style);
        style = null;
    }
}
