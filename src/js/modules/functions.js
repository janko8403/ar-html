export default function funTab() {

    // open
    $("body").on("click","#ad",function(){      
        $("#modal-ad").modal("show");
        $(".modals").addClass("after_modal_appended");
        $('.modal-backdrop').appendTo('.modals'); 
        $('body').removeClass("modal-open")
        $('body').css("padding-right","");    
    });
    
    $("body").on("click","#pds",function(){      
        $("#modal-pds").modal("show");
        $(".modals").addClass("after_modal_appended");
        $('.modal-backdrop').appendTo('.modals');   
        $('body').removeClass("modal-open")
        $('body').css("padding-right","");    
    });

    $("body").on("click","#mnm",function(){      
        $("#modal-mnm").modal("show");
        $(".modals").addClass("after_modal_appended");
        $('.modal-backdrop').appendTo('.modals');   
        $('body').removeClass("modal-open")
        $('body').css("padding-right","");    
    });

    $("body").on("click","#a",function(){      
        $("#modal-a").modal("show");
        $(".modals").addClass("after_modal_appended");
        $('.modal-backdrop').appendTo('.modals');   
        $('body').removeClass("modal-open")
        $('body').css("padding-right","");    
    });



    // next
    $("body").on("click","#n-pds",function(){  
        $("#modal-ad").modal("hide");
        $("#modal-pds").modal("show");
        $(".modals").addClass("after_modal_appended");
        $('.modal-backdrop').appendTo('.modals');   
        $('body').removeClass("modal-open")
        $('body').css("padding-right","");    
    });

    $("body").on("click","#n-mnm",function(){      
        $("#modal-pds").modal("hide");
        $("#modal-mnm").modal("show");
        $(".modals").addClass("after_modal_appended");
        $('.modal-backdrop').appendTo('.modals');   
        $('body').removeClass("modal-open")
        $('body').css("padding-right","");    
    });

    $("body").on("click","#n-a",function(){      
        $("#modal-mnm").modal("hide");
        $("#modal-a").modal("show");
        $(".modals").addClass("after_modal_appended");
        $('.modal-backdrop').appendTo('.modals');   
        $('body').removeClass("modal-open")
        $('body').css("padding-right","");    
    });

    // $("body").on("click","#p-mnm",function(){      
    //     $("#modal-a").modal("hide");
    //     $("#modal-mnm").modal("show");
    //     $(".modals").addClass("after_modal_appended");
    //     $('.modal-backdrop').appendTo('.modals');   
    //     $('body').removeClass("modal-open")
    //     $('body').css("padding-right","");    
    // });




    // close
    $("body").on("click","#c-ad",function(){      
        $(".fade-scale").removeClass("in");
        $('body').removeClass("modal-open");
        setTimeout(function(){ 
            $('#modal-ad').modal('hide');   
         }, 100);
    });

    $("body").on("click","#c-pds",function(){      
        $(".fade-scale").removeClass("in");
        $('body').removeClass("modal-open");
        setTimeout(function(){ 
            $('#modal-pds').modal('hide');   
         }, 100);
    });

    $("body").on("click","#c-mnm",function(){      
        $(".fade-scale").removeClass("in");
        $('body').removeClass("modal-open");
        setTimeout(function(){ 
            $('#modal-mnm').modal('hide');   
         }, 100);
    });

    $("body").on("click","#c-a",function(){      
        $(".fade-scale").removeClass("in");
        $('body').removeClass("modal-open");
        setTimeout(function(){ 
            $('#modal-a').modal('hide');   
         }, 100);
    });
    
}