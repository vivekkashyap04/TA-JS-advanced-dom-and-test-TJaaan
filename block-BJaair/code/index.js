let form = document.querySelector('form');
let input = document.getElementById('title');
let select = document.getElementById("select");
let ul = document.querySelector('ul');


console.log(select.value);

class Data{
    constructor(title,option){
        this.title = title;
        this.option = option;
    }
}

class ListofData{
    constructor(arr = []){
      this.arr = [];
    }
    add(title,option){
        let newArr = new Data(title,option);
        this.arr.push(newArr);
    }
}

function createUi(){
    let li = document.createElement('li');
    let container = document.createElement("div");
    let title = document.createElement("blockquote");
      title.innerText = input.value;
    let option = document.createElement("cite");
    for(var i=0; i < select.options.lenght; i++){
        return option.innerText = select.option[i].value;
    }
    container.append(title,option);
    li.append(container);
    ul.append(li);
}

function handle(event){
    ul.innerHTML = " ";
    event.preventDefault();
    createUi();
    input.value = " ";
    select.value = " ";
}


form.addEventListener("submit",handle);