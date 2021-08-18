const addtodo = document.querySelector('.todo-add');
const list = document.querySelector('.mylist');
const search = document.querySelector('.search input');

const gentem = addcon => {
    
    const html = `<li class="list-group-item d-flex justify-content-between"><span>${addcon}</span><i class="fas fa-trash-alt delete"></i></li>`;

    list.innerHTML += html;

};


addtodo.addEventListener('submit', e => {
    
    e.preventDefault();

    const addcon = addtodo.todoadd.value.trim();
    
   if(addcon){
    gentem(addcon);
    addtodo.reset();
   }
    

});


list.addEventListener('click', e => {

    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }

})


const filtodo = (term) => {
    Array.from(list.children)
        .filter(
            (todo) => !todo.textContent.toLowerCase().includes(term)
        )
        .forEach(
            (todo) => todo.classList.add('d-none')
        );

    Array.from(list.children)
        .filter(
            (todo) => todo.textContent.toLowerCase().includes(term)
        )
        .forEach(
            (todo) => todo.classList.remove('d-none')
        );
     

};



search.addEventListener('keyup' , () => {

    const term = search.value.trim().toLowerCase();

    filtodo(term);
    

});



















