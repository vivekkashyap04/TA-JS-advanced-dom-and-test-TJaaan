let ul =document.querySelector('ul');

let max = 3;
let index =0;


function dataLoad(){
     for(var i=0; i<max; i++){
         let li = document.createElement('li');
         let blockqoute = document.createElement('blockquote');
         let cite = document.createElement('cite');
         blockqoute.innerText = quotes[index].quoteText;
         cite.innerText = quotes[index].quoteAuthor;
         li.append(blockqoute,cite);
         ul.append(li);
         index++;
     }
}


document.addEventListener('scroll', () => {
    let clientHeight = document.documentElement.clientHeight;
    let scrollTop = document.documentElement.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight;
    if(clientHeight + scrollTop  >= scrollHeight  && index < quotes.length){
        dataLoad();
    }
})

window.addEventListener('DOMContentLoaded', () =>{
    alert("Dom is loaded");
    dataLoad();
})