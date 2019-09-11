//adding new todo
const addForm=document.querySelector('.add');
//reference to ul
const list=document.querySelector('.todos') //ul 
//search reference
const search=document.querySelector('.search input')


//creating a function which writes to html plate
//resusablitiy issue 
const generateTemplate=todo=>{
//template string
const html=`<li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
            </li>`;
list.innerHTML+=html;
};



addForm.addEventListener('submit',e=>{
e.preventDefault();
const todo=addForm.add.value.trim(); //trim is used to delete unnecesarry spaces.
console.log(todo);
if(todo.length) //after removing unnecessary spaces we are checking length.
{
    generateTemplate(todo);
    addForm.reset(); //it resets the all input field to empty after clicking enter 
}
});

//TRASH CAN
//setting trashcran-using event deligation.
//we will set up event listener to whole ul
//if target element is trash can, then we delete.
// if click is not on  trash can we 
list.addEventListener('click',e=>{
if(e.target.classList.contains('delete'))//contains use to check for specific class
    {
        //we are getting parent of e.target
        e.target.parentElement.remove();
    }
})


//function resusability, so we are defining it here.

const filterTodos=term=>{
// console.log(list.children);
    //list.children gives HTML COLLECTION So we convert into ARray and use foreach();
// console.log(Array.from(list.children));
    //this above gives array
Array.from(list.children)
.filter((todo)=>{
    //here  we will apply logic that which doesnot match we will apply hide class to them.
    return !todo.textContent.toLowerCase().includes(term);
    //todo.textContent.includes(term) gives a list which are in the list, and we apply ! negation that shows which do not contain the term
}).forEach((todo)=>{todo.classList.add('filtered')})

//to unmatch
Array.from(list.children)
.filter((todo)=>{
   
    return todo.textContent.toLowerCase().includes(term);
   
}).forEach((todo)=>{todo.classList.remove('filtered')})

};

//searchBar
///using filter method.
//not only filter, there are more than 101 ways. 
//we will hide.
//keyupevent
search.addEventListener('keyup',()=>{
    const term=search.value.trim().toLowerCase();
    filterTodos(term);
})