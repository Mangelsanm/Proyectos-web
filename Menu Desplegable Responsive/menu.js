$(".submenu").click(function(){
    $(this).children("ul").slideToggle();
})

$("ul").click(function(param){
    param.stopPropagation();
})