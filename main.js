//Obtniene el array gurdado de localstorage
let taskLocalStorage = JSON.parse(localStorage.getItem('taskLocalStorage') || '[]');

//Capturar el evento del boton y guarda las tareas en local,
document.getElementById('addTask').addEventListener('click', function() {
 let inputText = document.getElementById('textIn');
 let task = inputText.value;
 if(task != ''){
    const arrTasks = {
        id: taskLocalStorage.length + 1,
        text: task,
        status: false
    }
    taskLocalStorage.push(arrTasks);
    localStorage.setItem('taskLocalStorage', JSON.stringify(taskLocalStorage));
    location.reload();
 }else{
    window.alert('Ingresa una tarea')
 }
 task.value = '';
});

//Agrega las tareas de Local al DOM / agrega la funcion de elmiminar
const readTasks = taskLocalStorage.forEach(element => {
//Crea los elementos
 const taskContainer = document.getElementById('taskContainer');
 const taskParagraph = document.createElement('p');
 const containerBtn =  document.createElement('div');
 //Agrega un id dinamico
 taskParagraph.id = `task-${element.id}`;
 //Crea un elemento boton
 const btnDelete = document.createElement('button');
 //agrega el texto 'Eliminar' al boton
 btnDelete.textContent = 'Eliminar';
 //Agrega el id ha cada boton
 btnDelete.dataset.taskId = element.id;
 //Agrega el evento click 
 btnDelete.addEventListener('click', function(event){
//se recupera el ID
 const taskId = event.currentTarget.dataset.taskId;
  // Filtramos la tarea que queremos eliminar
 taskLocalStorage = taskLocalStorage.filter(task => task.id != taskId);
  // Guardamos el array actualizado
 localStorage.setItem('taskLocalStorage', JSON.stringify(taskLocalStorage));
 // Eliminamos el elemento del DOM
  const taskElement = event.currentTarget.parentNode;
  taskElement.remove();
 });
//Agrega el contenido al dom
 taskParagraph.textContent = element.text;
 taskContainer.appendChild(containerBtn);
 containerBtn.appendChild(taskParagraph);
 containerBtn.appendChild(btnDelete);
});

