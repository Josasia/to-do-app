
function onReady() {
    const addToDoForm = document.getElementById('addToDoForm');
    const newToDoText = document.getElementById('newToDoText');
    const toDoList = document.getElementById('toDoList');

   addToDoForm.addEventListener('submit', event => {
     event.preventDefault();

  let title = newToDoText.value;

  let newLi = document.createElement('li');

  let checkbox = document.createElement('input');

  let deleteBut = document.createElement('button');

   checkbox.type = "checkbox";

   deleteBut.textContent = "x";

   newLi.textContent = title;

   newLi.appendChild(checkbox);

   toDoList.appendChild(newLi);

   toDoList.appendChild(deleteBut);

   newToDoText.value = '';





   deleteBut.addEventListener('click', event => {
     toDoList.removeChild(newLi);
     toDoList.removeChild(deleteBut);
   });



});
}


window.onload = function() {

  onReady();
};
