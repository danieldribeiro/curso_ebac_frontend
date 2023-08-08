$('#btnAddTask').click((e) => {
    addNewTask()
    $('#inputTask').val('')
    e.preventDefault();
});

function addNewTask(){
    let newTask =   '<div class="task-description">' +
                        '<input type="checkbox" name="" id="">' +
                        '<span>' + $('#inputTask').val() + '</span>' +
                    '</div>' +
                    '<div class="task-actions">' +
                        '<i class="bi bi-pen"></i>' +
                        '<i class="bi bi-trash3"></i>' +
                    '</div>'

    
    $('#task-list').append('<li class="task">' + newTask + '</li>')
}

$(document).click((e) => {
    if(e.target.classList.contains('bi-trash3')){
        $(e).closest('ul').remove()
        console.log($(e))
    }
})

$(document).on('click','input[type="checkbox"]',function(){
    if ($(this).siblings().css('text-decoration-line') == "none"){
        $(this).siblings().css('text-decoration-line', 'line-through');
        $(this).siblings().css('color', 'gray');
    }
    else{
        $(this).siblings().css('text-decoration-line', 'none');
        $(this).siblings().css('color', '#fff');
    }
})

function removeTask(e){
    e.parent().css({
        'background-color': 'red'
    })
}