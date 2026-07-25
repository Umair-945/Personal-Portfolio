let close_btn = document.querySelector("#close");
let side = document.getElementById("sidebar");
let menu = document.getElementById("ham_burger");



side.style.transition = "0.6s"


menu.addEventListener("click" , function() { 
  if (window.innerWidth <= 425) {
        sidebar.style.width = "70%";
    } else {
        sidebar.style.width = "40%";
    }

  


});

close_btn.addEventListener("click" , function(){

side.style.width = "0";

})