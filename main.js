//Obtniene el array gurdado de localstorage
const taskLocalStorage = JSON.parse(localStorage.getItem('taskLocalStorage') || '[]');

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

//Agrega las tareas de Local al DOM
const readTasks = taskLocalStorage.forEach(element => {
 const taskContainer = document.getElementById('taskContainer');
 const taskParagraph = document.createElement('p');
 taskParagraph.textContent = element.text;
 taskContainer.appendChild(taskParagraph);
});

//Agrega un boton para eliminar cada tarea por individual
//agrega un boton a cada contenedor de las tareas
//ha ese boton le vas a colocar un escuchadore de eventos 
//vas a recuperar la lista de tareas del local y filtrar por ID
//Ahora remuve el item