
let addWork = document.querySelector('.addDay');
let item = document.querySelector('.item');
let homework = document.querySelector('.hw');
let comment = document.querySelector('.comment');
let todo = document.querySelector('.todo');

let allHomeWorks =[]; 

class Works {
    constructor(item, homework, comment) {
        this.item = item;
        this.homework = homework;
        this.comment = comment;
    }
};

function createTemlete (allHomeWorks, index) {
    return `
    <div class="row tasks">
        <div class="col">1</div>
        <div class="col"><input type="text" class="item" placeholder="Предмет">${Works.item}</div>
        <div class="col"><input type="text" class="hw" placeholder="Домашнее задание">${Works.homework}</div>
        <div class="col"><input type="text" class="comment" placeholder="Комментарий">${Works.comment}</div>
    </div>
    `
}

const fillHtmlList = () =>{
    // todo.innerHTML = ""; 
    if (allHomeWorks > 0) {
        allHomeWorks.forEach((index) => {
            todo.innerHTML += createTemlete();
        });
    }
}

const updateLocal = () => {
    localStorage.setItem('tasks', JSON.stringify(allHomeWorks))
    fillHtmlList();
};

addWork.addEventListener('click', ()=>{
    allHomeWorks.push(new Works(item.value, homework.value, comment.value));
        updateLocal();
        fillHtmlList();
    }
)
