let ul = document.querySelector('ul');
function loadData(max =3){
    document.addEventListener("DOMContentLoaded", () => {
        alert("DOM ready!");
      });
    let i =0;
    while(i < max){
        quotes.forEach(data => {
            let li = document.createElement('li');
            let p = document.createElement("p");
            p.innerText = data.quoteText;
            let h2 = document.createElement('h2');
            h2.innerText = data.quoteAuthor;
            li.append(p,h2);
            ul.append(li);
        })
            
      i++;  
    }
}

loadData();

window.addEventListener('scroll',()=>{
    console.log(window.scrollY) //scrolled from top
    console.log(window.innerHeight) //visible part of screen
    let scrollTop = document.documentElement.scrollTop;
      let scrollHeight = document.documentElement.scrollHeight;
      let clientHeight = document.documentElement.clientHeight;
      if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight){
        loadData();
    }
})