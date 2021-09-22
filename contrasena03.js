
function ir(event){
  event.preventDefault();
  let c = "101";
  if(document.form.password.value === c){
    window.location="OnePage01.html";
  }else{
    alert("Contrasenha incorreta");
  }
}


window.addEventListener('DOMContentLoaded', function(event){
  document.querySelector('form').addEventListener('submit', ir)
})




// let password = document.getElementById("password")
// function ir(){
// let c=108;
//        if(password.value == c){
//           window.location="OnePage.html";}
//       else{
//           alert('Contrasena incorreta');
//       }
// }

// const entrada = document.getElementById('btn')

// window.addEventListener('DOMContentLoaded', function(event){

//   entrada.addEventListener('click', ir)
// })

// password.addEventListener("keypress", entrarConEnter(event))

// function entrarConEnter(e){
//   if(e.key == "Enter")
//   ir()
// }

  
