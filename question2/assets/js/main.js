$(document).ready(function(){
    $(".accordion h1").click(function(){
        var id = this.id;  
    
        
        $(".accordion-content").each(function(){
    
            if($("#"+id).next()[0].id != this.id){
                $(this).slideUp();
            }
    
        });
    
        $(this).next().toggle();  /* Selecting div after h1 */
    });
    });