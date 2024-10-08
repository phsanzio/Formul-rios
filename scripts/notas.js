
function clear_input(){
    const hiddenDiv = document.getElementById('hidden_div');
    hiddenDiv.style.display = 'none';
    hiddenDiv.textContent = '';
    
    const newNoteTitle = document.getElementById('write_title');
    const newNoteContent = document.getElementById('write_content');
    newNoteTitle.value = '';
    newNoteContent.value = '';
}


function save_note(){
    const newNoteTitle = document.getElementById('write_title');
    const newNoteContent = document.getElementById('write_content');
    const hiddenDiv = document.getElementById('hidden_div');

    if (newNoteContent.value == '' || newNoteTitle.value == ''){
        hiddenDiv.textContent = 'Insira a tarefa por favor!';
        hiddenDiv.style.display = 'block';
    } else{
        hiddenDiv.style.display = 'none';
        hiddenDiv.textContent = '';
        

        const newNote = document.createElement('div');
        
        newNote.classList.add('note');


        const newTitle = document.createElement('label');
        newTitle.textContent = newNoteTitle.value;
        newTitle.id = 'note_title';

        const newContent = document.createElement('label');
        newContent.textContent = newNoteContent.value;
        newContent.id = 'note_content';
        

        newNote.appendChild(newTitle);
        newNote.appendChild(newContent);

        document.getElementById('gallery_notes').appendChild(newNote);
        newNoteTitle.value = '';
        newNoteContent.value = '';
    }
}


function searchNotes() {
    const searchValue = document.getElementById('search_input').value.toLowerCase();
    const notes = document.querySelectorAll('#gallery_notes .note');

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