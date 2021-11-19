let addWork = document.querySelector('.addDay');
let item = document.querySelector('.item');
let homework = document.querySelector('.hw');
let comment = document.querySelector('.comment');
let todo = document.querySelector('.todo');

let allHomeWorks;
!localStorage.allHomeWorks ? allHomeWorks = [] : allHomeWorks = JSON.parse(localStorage.getItem('tasks')) 


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
        <div class="col"></div>
        <div class="col"><p>${item.value} </p></div>
        <div class="col"><p>${homework.value}</p></div>
        <div class="col"><p>${comment.value}</p></div>
    </div>
    `
}

const fillHtmlList = () =>{
    todo.innerHTML = ""; 
    if (allHomeWorks.length ) {
        allHomeWorks.forEach((index,item) => {
            todo.innerHTML += createTemlete(index,item);
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
    updateLocal();
}