const todoList = JSON.parse(localStorage.getItem("ourList")) ||[];
displayList();
document.querySelector('.todo-button').
    addEventListener('click',() =>{
        addTodo();
    })
function addTodo(){
    let task=document.querySelector('.js-task');
    let taskDate=document.querySelector('.js-date');
    todoList.push({ name:task.value,
                    dueDate:taskDate.value});
    task.value='';
    taskDate.value='';
    displayList();
    updatelocal();
}
function displayList(){
    let showlist='';
    for(let i =0;i<todoList.length; i++){
        listElm = todoList[i];
        showlist+=`
        <div>${listElm.name} </div>
        <div>${listElm.dueDate} </div>
        <div> <button class="delete-button"
        >Delete</button></div>`;
    }
    document.querySelector('.js-list').innerHTML=showlist;
    document.querySelectorAll('.delete-button').forEach((deleteButton, index) =>{
        deleteButton.addEventListener('click',() =>{
            todoList.splice(index,1);
            displayList();
            updatelocal();
        })
    })
}
function updatelocal(){
    localStorage.setItem("ourList",JSON.stringify(todoList));
}
