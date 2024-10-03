function on_off() {
    
    const input_choco = document.querySelector('input[value="chocolate"]');

    const torras_div = document.getElementById('torras');
    
    if (input_choco.checked) {
        torras_div.style.display = 'none';
    } else {
        torras_div.style.display = 'block';
    }
}

function selected_one(clickedCheck) {
    const checkboxes = document.querySelectorAll('input[type="checkbox"][name="bebida"]');

    // Desmarcar todos os checkboxes, exceto o clicado
    checkboxes.forEach(checkbox => {
        if (checkbox !== clickedCheck) {
            checkbox.checked = false;
        }
    });

    on_off();
}

document.addEventListener('DOMContentLoaded', () => {
    const input_choco = document.querySelector('input[value="chocolate"]');
    input_choco.addEventListener('change', on_off);
});