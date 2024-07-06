let todoList = [] //variable
 
// variables to connect variables from here to the ones from html
const form = document.querySelector(".form") 
const input = document.querySelector(".form_input")
const ol = document.querySelector(".todoList")


form.addEventListener('submit', event => { // listens for when submit is clicked. event is just a thing that happens 

    event.preventDefault() // page will reload by default. so this stops it from reloading

    addTodo(input.value) // take the value put into input and add it to Todo

    input.value = '' // after the value is added to toDo clear the input
})

ol.addEventListener('click', event => { //listens for an event(click on the page) on the list

    const domElement = event.target // domElement is defined in the function as whatever was clicked

    if (false === domElement.matches(".todoList li")){
        return
    } //"domElement matches something on the list? no it doesnt." ok then return nothing. 

    removeTodo(domElement) // if it does match then plug in domElement into removetodo function 
})


function addTodo(todoText)
{
    const id = "todo_" + Date.now();  // we're gonna assign a unique id to each input value. the date.now() makes it super unique so that even if the value is the same, the time doesnt match anything else.
    
    todoList.push({ // pushing the unique id and the actual text into array
        id: id,
        todoText: todoText,
    })
    
    const li = document.createElement('li') // making a new element to keep the text
    li.innerText = todoText // the element (li) will have the input text in it
    li.setAttribute("class", "item") // giving it a class name to change the css
    li.setAttribute("data-id", id) // give this new element the same unique id we made before to match

    ol.appendChild(li) // put the li into the ol 
}

function removeTodo(domElement) // function to remove clicked element
{
    const id = domElement.getAttribute("data-id") // find the id of where we clicked. 

    todoList = todoList.filter(item => item.id !== id) // update the todolist by filtering any items of which the id matches to the dom element id
    domElement.remove()  //  now actually remove the clicked domElement from the html

}