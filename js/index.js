let addWork = document.querySelector('.addDay');
let item = document.querySelector('.item');
let homework = document.querySelector('.hw');
let comment = document.querySelector('.comment');
let todo = document.querySelector('.todo');

let allHomeWorks = [];

class Works {
    constructor( item, homework, comment) {
        this.item = item;
        this.homework = homework;
        this.comment = comment;
    }
};

function createTemlete (homeWork) {
    return `
    <div class="row tasks">
        <div class="col"><p></p></div>
        <div class="col"><p>${homeWork.item} </p></div>
        <div class="col"><p>${homeWork.homework}</p></div>
        <div class="col"><p>${homeWork.comment}</p></div>
    </div>
    `
}

const fillHtmlList = () =>{
    todo.innerHTML = ""; 
    if (allHomeWorks.length > 0 ) {
        allHomeWorks.forEach((homeWork) => {
            todo.innerHTML += createTemlete(homeWork);
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

if (localStorage.getItem('tasks')){
    allHomeWorks = JSON.parse(localStorage.getItem('tasks'));
    fillHtmlList();
}