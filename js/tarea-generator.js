function randomInRange(a, b) {
    return a + Math.floor(Math.random() * (b - a));
}

function createTarea(title, daysSince, contents, startDate, endDate) {
    // Crea una tarea a partir de una plantilla, y luego la retorna.

    let base = `
    <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">{%title%}</h5>
        <small>{%days-since%} days ago</small>
    </div>
    <small>{%contents%}</small>

    <div class="row justify-content-center">
        <div class="col-4 mb-3">
            <small>Fecha de Inicio:</small>
            <span>{%start-date%}</span>
        </div>
        <div class="col-4 form-floating mb-3">
            <small>Fecha de T&eacute;rmino:</small>
            <span>{%end-date%}</span>
        </div>
    </div>`;

    base = base.replace("{%title%}", title);
    base = base.replace("{%days-since%}", daysSince);
    base = base.replace("{%contents%}", contents);
    base = base.replace("{%start-date%}", startDate);
    base = base.replace("{%end-date%}", endDate);

    let $tarea = jQuery('<a>', { "class": "list-group-item list-group-item-action" });
    $tarea.html(base);
    return $tarea;
}

jQuery(function () {
    let $tareaContainer = $("#tareas");
    console.log($tareaContainer);

    if ($tareaContainer) {
        let tareaCount = randomInRange(5, 10);
        let lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem error voluptas repellat consequatur, nam natus, soluta cum, et repellendus nisi perferendis debitis voluptatum sint accusamus obcaecati iure. Maxime, voluptatibus voluptatem?";

        for (let i = 0; i < tareaCount; ++i) {
            $tareaContainer.append(createTarea(`Titulo de la Tarea ${i + 1}`, (i + 2).toString(), lorem, "03/10/2023", "05/10/2023"));
        }
        console.log($tareaContainer);
    }
});
