function validateLogin(){
    let userName = document.getElementById("userName").value;
    let password = document.getElementById("password").value;

    if(userName === "aline" && password === "1234"){
        window.location.href = "agenda.html"
    }else{
        alert("Credenciais inválidas. Tente novamente!")
    }
}

document.addEventListener('keydown',
function (event){
    if(event.key === 'Enter'){
        validateLogin()
    }
});


