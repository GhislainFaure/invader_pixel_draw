// on crée une boucle pour génerer 8 * 8 ( 32 ) cases 
let invader = document.getElementById('invader');



for (let i = 0; i < 64; i++) {
    let newCase = document.createElement('div');
    newCase.classList.add('case');

    invader.appendChild(newCase);
    

}

let pixel = document.getElementsByClassName('case');
console.log(pixel);
invader.addEventListener('click', function(event){
    //console.log(event);
   console.log(event.target); 
   //event.target.style.backgroundColor = 'white';
   event.target.classList.toggle('black')

})



 