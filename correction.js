// // on crée une boucle pour génerer 8 * 8 ( 64 ) cases
// let invader = document.getElementById('invader');

//  function generateTable(nbPixel) {

//      for (let i = 0; i < nbPixel; i++) {

//         let row = document.createElement('div')
//         invader.appendChild(row)

//              for (let y = 0; y < nbPixel; y++) {

//                  let newCase = document.createElement('div');
//                  newCase.classList.add('case');
//                  row.appendChild(newCase);
//              }

//      }
//  }

// // on crée le formulaire
// let form = document.querySelector('.configuration')

// let sizePixel = document.createElement('input');
// sizePixel.id = "sizePixel";
// form.appendChild(sizePixel);

// let submit = document.createElement('button');
// submit.type = 'button';
// submit.textContent = 'Valider';
// form.appendChild(submit);

// // création de notre notre matrice Pixel

// submit.addEventListener('click', function() {

//     invader.textContent = '';
//     generateTable(sizePixel.value);

// })

// // Quand on click sur le bouton on veut changer la class de chaque pixel ( background color )

// invader.addEventListener('click', function (event) {

//     event.target.classList.toggle('black');

// })
