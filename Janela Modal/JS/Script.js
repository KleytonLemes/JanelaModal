function abrirModal(){
    const modal = document.getElementById('contModal')
    modal.classList.add('mostrar')

    modal.addEventListener('click', (e) =>{
        if (e.target.id == 'contModal' || e.target.id == "fechar"){
            modal.classList.remove('mostrar')
            localStorage.fechaModal = 'contModal'
        }
    })
}