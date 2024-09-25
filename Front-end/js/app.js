document.addEventListener('DOMContentLoaded', () => {

    let check = document.getElementById('check');
    let password = document.getElementById('senha');

    function mostrarSenha() {
        if (check.checked) {
            password.setAttribute('type', 'text');
        } else {
            password.setAttribute('type', 'password');
        }
    }

    check.addEventListener('change', mostrarSenha);

    let btnRegistrar = document.getElementById('btn-registrar');
    let telaCadastro = document.getElementById('registrar');
    let telaLogin = document.querySelector('.container');

    function abrirRegistro(event) {
        event.preventDefault();
        telaCadastro.classList.remove('oculto'); 
        telaLogin.classList.add('ocultar-login'); 
    }

    btnRegistrar.addEventListener('click', abrirRegistro);

    let btnVoltar = document.getElementById('btn-voltar');

    function voltarParaLogin(event) {
        event.preventDefault();
        telaCadastro.classList.add('oculto'); 
        telaLogin.classList.remove('ocultar-login'); 
    }

    btnVoltar.addEventListener('click', voltarParaLogin);

    function verificarDados() {
        let cxRegistro = document.getElementById('register-email');
        let cxRegistroValor = cxRegistro.value; 
        
        let cxConfirmarEmail = document.getElementById('confirm-email');
        let cxConfirmarEmailValor = cxConfirmarEmail.value;

        let cxRegistroSenha = document.getElementById('password-register');
        let cxcxRegistroSenhaValor = cxRegistroSenha.value;

        let cxConfirmarSenha = document.getElementById('password-confirm');
        let cxConfirmarSenhaValor = cxConfirmarSenha.value;

        if (cxRegistroValor != cxConfirmarEmailValor && cxcxRegistroSenhaValor != cxConfirmarSenhaValor ){
            alert("Os dados inseridos não conferem")
        }
         else if(cxRegistroValor != cxConfirmarEmailValor) {
            alert("Os emails não conferem!")
        } else if(cxcxRegistroSenhaValor != cxConfirmarSenhaValor) {
            alert("As senhas não conferem!")
        }
    }
    
    let btnCadastrar = document.getElementById('btn-cadastrar');
    btnCadastrar.addEventListener('click', verificarDados);
});
