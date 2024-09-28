function on_off() {
    
    const input_choco = document.querySelector('input[value="chocolate"]');

    const torras_div = document.getElementById('torras');
        
    if (input_choco.checked) {
        torras_div.style.display = 'none';
    } else {
        torras_div.style.display = 'block';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const input_choco = document.querySelector('input[value="chocolate"]');
    input_choco.addEventListener('change', on_off);
});