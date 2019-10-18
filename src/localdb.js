const dbPrueba19 = "todoDB"
var request = window.indexedDB.open(dbPrueba19, 5);
var db;

request.onerror = (event) => {
    alert('Recuerda que tus tareas no se guardarán si no concediste permisos a esta App')
}

request.onsuccess = (event) => {
    db = event.target.result;
}
request.onupgradeneeded = (event) => {
    var db = event.target.result;

    var items = [
        {id: 1, tarea: "hola"},
        {id: 2, tarea: "adios"}
    ]

    var objectStore = db.createObjectStore("todos", {autoIncrement: true})

    items.forEach((item) => {
        objectStore.add(item)
    })
    
}