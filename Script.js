
let Btn = document.getElementById('addBtn')

let todoinput = document.getElementById('todoInput')

let message = document.getElementById('todoList')

let string = " "

function addtask(){

     string = todoinput.value

     let listItem = document.createElement('li')

     listItem.innerHTML = string
 
   todoList.appendChild(listItem)

    todoinput.value = ' '
 
    

}





Btn.addEventListener('click' , addtask)


