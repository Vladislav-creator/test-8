import {fetch_coctailsByName} from './fetch-gallery'
import {createCocktailCards} from './render-cocktails'
const galleryCoctails = document.querySelector('.gallery-list')

const searchForm = document.getElementById('search-form');
 searchForm.addEventListener('submit', onSearchForm);
 console.log(fetch_coctailsByName('g'));

 function onSearchForm(e) {
    e.preventDefault();
   let query = e.currentTarget.elements.searchQuery.value.trim();
    galleryCoctails.innerHTML = '';
console.log(query);
    fetch_coctailsByName(query).then(resp => {
        console.log(resp);
         createCocktailCards(resp, galleryCoctails);
    })
}


//     async function makeMarkup(query) {
//       try {
//         const data = await fetch_coctailsByName(query);
//         console.log(data);
//         if (data === 0) {
//           console.log('no');
//         } else {
//           createCocktailCards(data, galleryCoctails);
//           }
//         }
//        catch {
//         console.log(error);
//       } finally {
//         searchForm.reset();
//       }
//       makeMarkup(query)
//     }
   
  
  

//       let render =  fetch_coctailsByName(query);
//       createCocktailCards(render, galleryCoctails )
  
// }


// fetchCocktailByName(query).then(resp => {
//     console.log(resp);
//     createCocktailCards(resp, galleryEl);
// })