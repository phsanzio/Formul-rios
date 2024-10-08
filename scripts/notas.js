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
        

        const newTask = document.createElement('div');
        
        newTask.classList.add('todo')


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


function searchNotes() {
    const searchValue = document.getElementById('search_input').value.toLowerCase();
    const notes = document.querySelectorAll('#gallery_tasks .note');

    notes.forEach(note => {
        const title = note.querySelector('#note_title').textContent.toLowerCase();
        const content = note.querySelector('#note_content').textContent.toLowerCase();

        if (title.includes(searchValue) || content.includes(searchValue)) {
            note.classList.remove('hidden'); 
        } else {
            note.classList.add('hidden');
        }
    });
}