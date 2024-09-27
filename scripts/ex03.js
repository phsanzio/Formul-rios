function mudarCor() {
    
    const select = document.querySelector('select[name="cor"]');

    const valorSelecionado = select.value;

    const cores = {
        1: 'red',
        2: 'green',
        3: 'blue',
        4: '#F3D500',
        5: 'purple'
    };

    if (valorSelecionado in cores) {
        document.body.style.color = cores[valorSelecionado];
        document.getElementById('seletor').style.color = cores[valorSelecionado];
    } else {
        document.body.style.color = '';
        document.getElementById('seletor').style.color = '';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const select = document.querySelector('select[name="cor"]');
    select.addEventListener('change', mudarCor);
});