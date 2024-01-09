function toggleMode() {
    const body = document.body
    body.classList.toggle('light')

    
    //pegar a tag img .

    
    const img = document.querySelector("#profile img")
    
    //substituir a imagem
    if(body.classList.contains('light')) {
       //se tiver ligh mode adicionar a imagem light
       img.setAttribute('src', './assets/avatar-light.png')
       img.setAttribute('alt', "Foto de Navizera com óculos")
    }
    else{
        //se tiver sem ligh mode mantem a imagem normal
        img.setAttribute('src', './assets/avatar.png')
        img.setAttribute('alt', "Foto de Navizera sem óculos")
    }
   








}