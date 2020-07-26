//check off specific todos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

//click on trash button to delete todo's
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text'").keypress(function(event){
    if(event.which === 13){
        //grab new todos
        let newTodo = $(this).val();
        //empty the input for new todo
        $(this).val("");
        //create a new li and add to ul list
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + newTodo +  "</li>");
    } 
})

$(".fa-plus").click(function(){
    $("input[type='text'").fadeToggle();
})