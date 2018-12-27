
$(document).ready(function(){
   
get_json_data();

$(document).on('click', '.card', function(){
    window.open($(this).data('url'));
})

})

function get_json_data(){
    $.getJSON('https://api.github.com/users/atemp21/repos', function(data){
        $.each(data, function(key, val){
            $(".flex-work").append('<div class="card" style="width: 18rem;" data-url="'+val.html_url+'"><div class="card-body"><h5 class="card-title">'+val.name+'</h5><h6 class="card-subtitle mb-2 text-muted">'+val.language+'</h6> <p class="card-text">'+val.description+'</p></div></div>');

        })
    });

    $.getJSON('./assets/work.json', function(data){
        $.each(data, function(key, val){
            $(".flex-work").append("<div class='card' style='width: 18rem;' data-url='"+val.url+"'><div class='card-body'><h5 class='card-title'>"+val.title+"</h5><h6 class='card-subtitle mb-2 text-muted'>"+val.code+"</h6> <p class='card-text'>"+val.desc+"</p></div></div>");
        })
    });
}


