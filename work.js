
$(document).ready(function(){
   
get_json_data();

})

function get_json_data(){
    $.getJSON('https://api.github.com/users/atemp21/repos', function(data){
        $.each(data, function(key, val){
            $("#project-container").append('<div class="project-card"><div class="project-header-cont"></div><h3 class="project-header">'+val.name+'</h3> <p class="project-desc">'+val.description+'</p><div class="text-center"><a class="btn btn-outline-info text-center" href="'+val.html_url+'">See on Github</a></div><ul class="project-tools"><li>'+val.language+'</li></ul></div></div>');

        })
    });

    $.getJSON('./work.json', function(data){
        var i = 0;
        $.each(data, function(key, val){
            $("#recent-work").append('<div class="work-card"><h3 class="work-header">'+val.title+'</h3><p class="work-desc">'+val.desc+'<br><a href="'+val.code+'">code</a><a href="'+val.url+'">project</a></p><div class="work-preview"><a href="'+val.url+'" target="_blank"><img src="'+val.photo+'" alt=""></a></div><ul id="tool-'+i+'" class="work-tools">');
            $.when($.each(val.lang, function(k,v){
                $("#tool-"+i).append('<li>'+v+'</li>');
            })).done(function(){
                $("#recent-work").append('</ul></div>');
            })
            i++;
        })
    });
}


