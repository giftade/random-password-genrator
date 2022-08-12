
const characters = [...Array(95).keys()].map(i => String.fromCharCode(i+32));
let password1 = '' ;
let password2  = '';
let password3  = '';
let password4 = '';
let random, num, pass1El, pass2El, pass3El, pass4El;


function randomPass() {

    num = Math.floor(Math.random() * characters.length)
   
  random =  characters[num]
  return random
   
}

   for( var i = 0; i < 15; i++) {    
        password1 += randomPass();    
        password2 += randomPass();     
        password3 += randomPass();         
        password4 += randomPass();    
      
    }   




function displayPass() {
pass1El = document.getElementById('password1');
pass2El = document.getElementById('password2');
pass3El = document.getElementById('password3');
pass4El = document.getElementById('password4');

pass1El.textContent = password1;
pass2El.textContent = password2;
pass3El.textContent = password3;
pass4El.textContent = password4;
}


    const btnEl = document.getElementById("btn-el")
    btnEl.addEventListener("click", function(){
randomPass() 
displayPass()
    })
