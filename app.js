function onReady() {
  const toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  let id = 0;

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) { return; }

    toDos.push({

      title: newToDoText.value,
      complete: false,
      id: id,




    });
    id++;
    newToDoText.value = '';

    renderTheUI();



  }





  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });




  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";

      const delButton = document.getElementById('button');
      delButton.textContent = "X";

      delButton.addEventListener('click', event => {
      delToDo(toDo.id); ///write function next?
      });




      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(delbutton);
  });

}};
window.onload = function() {
  onReady();
};
