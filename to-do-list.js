const todoList=[
    {name:'todo1',
    duedate: '6-6-2024'},
    {name:'todo2',
    duedate: '6-6-2024'}];


function rendertodoList(){
    let todoListHTML = '';
    for (i = 0; i<todoList.length;i++){
        const todoObject = todoList[i];
        const name = todoObject.name;
        const duedate = todoObject.duedate;
        const html = `
        <div>${name}</div>
        <div>${duedate}</div>
        <button class = "js-button-slice" onClick = "todoList.splice(${i},1)
        rendertodoList()" >Delete
        </button>`
        
        
        todoListHTML+=html;
        
    }

    document.querySelector(".js-todo-list").innerHTML=todoListHTML;}
rendertodoList()

// const todoList = [];
function addToDo(){
    const inputElement = document.querySelector(".js-name-input");
    const name = inputElement.value;
    const dateinputElement = document.querySelector('.js-due-date-input');
    const duedate = dateinputElement.value;
    // console.log(name);
    todoList.push({name: name, duedate:duedate});
    
    inputElement.value = '';
    rendertodoList();

};
