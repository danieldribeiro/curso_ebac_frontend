$(document).ready(() => {
    $('#inputTask').focus()
})

$('#btnAddTask').click((e) => {
    addNewTask()
    $('#inputTask').val('')
    $('#inputTask').focus()
    e.preventDefault();
});

// Add new task
function addNewTask(){
    if($('#inputTask').val() == ''){
        $('input[type="text"]').addClass('invalidTask')
        setTimeout(() => {
            $('input[type="text"]').removeClass('invalidTask')
        }, 500)
        return
    }

    let newTask =   '<div class="task-description">' +
                        '<input type="checkbox" name="" id="">' +
                        '<span>' + $('#inputTask').val() + '</span>' +
                    '</div>' +
                    '<div class="task-actions">' +
                        '<i class="bi bi-trash3"></i>' +
                    '</div>'

    
    $('#task-list').append('<li class="task">' + newTask + '</li>')
}

// Remove Task
$(document).click((e) => {
    if(e.target.classList.contains('bi-trash3')){
        $(e.target).parent('.task-actions').parent('li').remove()
    }
})

// Complete Task
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