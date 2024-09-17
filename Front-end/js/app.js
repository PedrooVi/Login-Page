document.addEventListener('DOMContentLoaded', () => {
    let check = document.getElementById('check')
    let password = document.getElementById('senha')

    
    function mostrarSenha(){
        if(check.checked){
            password.setAttribute('type', 'text')
        }else{
            password.setAttribute('type', 'password')   
        }
    }

    check.addEventListener('change', mostrarSenha);
})