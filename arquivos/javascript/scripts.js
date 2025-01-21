
function showhide(nomeItem){
    var itens = document.getElementById(nomeItem)
    if (itens.style.display == 'block'){
        itens.style.display = 'none'
    } else {
        itens.style.display = 'block'
    }
}
function mudar(x) {
    x.classList.toggle("change");
}
function sidemenu(smenu){
    if (smenu.style.display == 'flex') {
        smenu.style.display = 'none'
    } else {
        smenu.style.display = 'flex'
    }
}
function ModoNoturno(){
    var element = document.body;
    element.classList.toggle("dark-mode");
}