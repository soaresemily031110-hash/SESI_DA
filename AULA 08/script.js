//const nome = localStorage.getItem('nome');

//alert(nome);

//localStorage.setItem("nome", "amor da minha vida");

//alert(localStorage.getItem("nome"));

//localStorage.removeItem("nome");
function login(){
   const local_usuario = localStorage.getItem("usuario");
   const local_senha = localStorage.getItem("senha");
  
   const campo_usuario = document.getElementById("usuario");
   const campo_senha = document.getElementById("senha");

   if(campo_usuario == local_usuario && campo_senha == local_senha){
    alert("Login realizado com sucesso!");
   }else{
    alert("Usuário inválido ou senha inválido!");
   }
   alert (valor_usuario.value + " " + valor_senha.value);

}
