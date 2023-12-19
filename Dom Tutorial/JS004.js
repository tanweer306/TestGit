const todoform = document.querySelector(".form-todo");
const todoinput = document.querySelector(".form-todo input[type='text'");
const todoList = document.querySelector(".todo-list");

todoform.addEventListener('submit', (e)=> {
    
    e.preventDefault();
    const newtodotext = todoinput.value;
    const newli = document.createElement("li");
    const newLiInnerHtml = `<span class="text">${newtodotext} </span>
    <div class="todo-buttons">
      <button class="todo-btn done">Done</button>
      <button class="todo-btn remove">Remove</button>
    </div>`
 newli.innerHTML = newLiInnerHtml;
 todoList.append(newli)
    todoinput.value="";

})

todoList.addEventListener('click',(e)=>{
if(e.target.classList.contains('done')) {
    console.log("done clicked")
    const liSpan = e.target.parentNode.previousElementSibling;
    liSpan.style.textDecoration= "line-through"

} else if (e.target.classList.contains('remove')) {
    const targetedLi = e.target.parentNode.parentNode;
    targetedLi.remove();

}
})