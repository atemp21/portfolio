
$(document).ready(function(){
   
get_json_data();

})

function get_json_data(){
    $.getJSON('https://api.github.com/users/atemp21/repos', function(data){
        $.each(data, function(key, val){
            $(".project-container").append('<div class="project-card"><div class="project-header-cont"><i class="fas fa-project-diagram"></i><a target="_blank" style="float:right;" href="'+val.html_url+'"><i class="fas fa-external-link-square-alt"></i></a></div><h3 class="project-header">'+val.name+'</h3> <p class="project-desc">'+val.description+'</p><ul class="project-tools"><li>'+val.language+'</li></ul></div></div>');

        })
    });

    $.getJSON('./work.json', function(data){
        var i = 0;
        $.each(data, function(key, val){
            $("#recent-work").append('<div class="work-card"><h3 class="work-header">'+val.title+'</h3><p class="work-desc">'+val.desc+'</p><div class="work-preview"><a href="'+val.url+'" target="_blank"><img src="'+val.photo+'" alt=""></a></div><ul id="tool-'+i+'" class="work-tools">');
            $.when($.each(val.lang, function(k,v){
                $("#tool-"+i).append('<li>'+v+'</li>');
            })).done(function(){
                $("#recent-work").append('</ul></div>');
            })
            i++;
        })
    });
}


