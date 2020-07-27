function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')

    var res = document.querySelector('div#res')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 4 && hora < 12) {
        // bom dia          
        res.innerHTML = "Bom dia!"
        img.src = 'public/assets/morning.jpeg' 
        document.body.style.background = '#ebbb60'     
    } else if (hora >= 12 && hora < 18) {
    // boa tarde
        res.innerHTML = 'Boa tarde!'
        img.src = 'public/assets/afternoon.jpeg'
        document.body.style.background = '#f8b88e'     
    } else {
        // boa noite
        res.innerHTML = 'Boa noite!'
        img.src = 'public/assets/evening.jpeg'
        document.body.style.background = '#0f131a'     
    }
}
