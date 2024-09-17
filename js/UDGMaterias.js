function toggleMenu(menuId) {
    var menu = document.getElementById(menuId);
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

function showTask(taskId) {
    var taskDescriptions = {
        taskMa1: "Descripción de la Tarea Math 1",
        taskMa2: "Descripción de la Tarea Math 2",
        taskPro1: "Descripción de la Tarea Pro 1",
        taskPro2: "Descripción de la Tarea Pro 2",
        taskIng1: "Descripción de la Tarea Ing 1",
        taskIng2: "Descripción de la Tarea Ing 2",
        taskEL1: "Descripción de la Tarea EL 1",
        taskEL2: "Descripción de la Tarea EL 2",
        taskPre1: "Descripción de la Tarea Pre 1",
        taskPre2: "Descripción de la Tarea Pre 2",
        taskFi1: "Descripción de la Tarea Fi 1",
        taskFi2: "Descripción de la Tarea Fi 2",
    };
    var description = taskDescriptions[taskId] || "No hay descripción para esta tarea.";
    document.getElementById("description").innerText = description;
}
function showWork(workId) {
    var workDescriptions = {
        workMa1: "Descripción del Trabajo Math 1",
        workMa2: "Descripción del Trabajo Math 2",
        workPro1: "Descripción del Trabajo Pro 1",
        workPro2: "Descripción del Trabajo Pro 2",
        workIng1: "Descripción del Trabajo Ing 1",
        workIng2: "Descripción del Trabajo Ing 2",
        workEL1: "Descripción del Trabajo EL 1",
        workEL2: "Descripción del Trabajo EL 2",
        workPre1: "Descripción del Trabajo Pre 1",
        workPre2: "Descripción del Trabajo Pre 2",
        workFi1: "Descripción del Trabajo Fi 1",
        workFi2: "Descripción del Trabajo Fi 2",
    };
    var description = workDescriptions[workId] || "No hay descripción para este trabajo.";
    document.getElementById("description").innerText = description;
}

function showResource(resourceId) {
    var resourceDescriptions = {
        resourceMa1: "Descripción del Recurso Math 1",
        resourceMa2: "Descripción del Recurso Math 2",
        resourcePro1: "Descripción del Recurso Pro 1",
        resourcePro2: "Descripción del Recurso Pro 2",
        resourceIng1: "Descripción del Recurso Ing 1",
        resourceIng2: "Descripción del Recurso Ing 2",
        resourceEL1: "Descripción del Recurso EL 1",
        resourceEL2: "Descripción del Recurso EL 2",
        resourcePre1: "Descripción del Recurso Pre 1",
        resourcePre2: "Descripción del Recurso Pre 2",
        resourceFi1: "Descripción del Recurso Fi 1",
        resourceFi2: "Descripción del Recurso Fi 2",
    };
    var description = resourceDescriptions[resourceId] || "No hay descripción para este recurso.";
    document.getElementById("description").innerText = description;
}

