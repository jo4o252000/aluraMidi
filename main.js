const listaTecla = document.querySelectorAll('.tecla')

for(let i = 0 ; i <= listaTecla.length; i++){
    let teclaSom = listaTecla[i].classList[1]
    
    listaTecla[i].addEventListener('click', () => {
        document.querySelector(`#som_${teclaSom}`).play()
    })
    
    listaTecla[i].onKeyDown = function (event){
        if(event.code === 'Space' || event.code === "Enter"){
            listaTecla[i].classList.add("ativa")
        }
    }
    listaTecla[i].onKeyUp = function(event){
        listaTecla[i].classList.remove('ativa')
    }
} 