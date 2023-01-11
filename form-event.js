function save(){
    event.preventDefault()
    var name = document.querySelector("input[name='name']").value
    var programmingLang = document.querySelector("select[name='programming-lang']").value
    alert("Nome: " +name+ "\nLinguagem de programação: " +programmingLang)
}
