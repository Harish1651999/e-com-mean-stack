let navToggle = document.querySelector(".nav-toggle");
let linkItem = document.querySelector(".links");

navToggle.addEventListener('click', function(){
 linkItem.classList.toggle('links');
 console.log("clicked");
});

// $(document).ready(function(){
//     $(window).scroll(function(){
//         var pageScroll = $(window).scrollTop();
//         if(pageScroll > 250){
//             $("#header").addClass("active-header");
//             $(".sticky-logo").addClass("active-logo");
//             $(".btm-nav-br").addClass("active-btm-nav");

//         }else{
//             $("#header").removeClass("active-header");
//             $(".sticky-logo").removeClass("active-logo");
//             $(".btm-nav-br").removeClass("active-btm-nav");
//         }
       
//     })

//     $("#hdrcart").mouseenter(function(){
//         $(".hdr-crt-lst").slideDown(500);
//     });
//     $("#hdrcart").mouseleave(function(){
//         $(".hdr-crt-lst").slideUp(500);        
//     });
// });

    $(document).ready(function(){
        $("#hdrcart").mouseenter(function(){
            $(".hdr-crt-lst").slideDown(500);
        });
        $("#hdrcart").mouseleave(function(){
            $(".hdr-crt-lst").slideUp(500);
        });
    })