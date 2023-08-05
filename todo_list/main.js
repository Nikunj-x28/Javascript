const todoList = JSON.parse(localStorage.getItem("ourList")) ||[];
displayList();
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
        onclick="
        todoList.splice(${i},1);
        displayList();
        updatelocal();
        ">Delete</button></div>`;
    }
    document.querySelector('.js-list').innerHTML=showlist;
}
function updatelocal(){
    localStorage.setItem("ourList",JSON.stringify(todoList));
}
