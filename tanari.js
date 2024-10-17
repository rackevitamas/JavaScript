$(document).ready(function () {
    $.ajax({
        url: 'http://10.0.13.100/rest-api/todo/todo.php',
        method: 'GET'
    })
    .done(function(data) {
        let todoList = JSON.parse(data); 

        let html = '<ul>';
        todoList.forEach(function(todo) {
            let completedClass = todo.completed === "true" ? 'completed' : '';
            html += `<li class="${completedClass}">${todo.task}</li>`;
        });
        html += '</ul>'; 

        $('div').html(html);
    })
    .fail(function(error) {
        console.error('Hiba történt a GET kérésnél:', error);
    });
});
