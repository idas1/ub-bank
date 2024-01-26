$(document).ready(function () {

    $('.classer').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:2
            }
        }
    })


    $('.axo').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })

    // $(".half-left-bl").on("click",function(){
    //     console.log("a")
    //     $(this).parent().css("display","block")
    // })

    // $(".close_side-bar").on("click",function(){
    //     console.log("a")
    //     $(this).parent().css("display","none")
    // })

});

// function closeNav (){
    
//     document.querySelector(".side-bar").style.width ="0px";
// }
// function openSideBar(){
//     let opS =document.querySelector(".side-bar");
//     opS.style.width="256px";
    
// }

function closeNav (){
    
    document.querySelector(".side-bar").style.display ="none";
}
function openSideBar(){
    let opS =document.querySelector(".side-bar");
    opS.style.display="block";
    
}

function LearningBanked(){
    window.location.href ='learning.html'
}
function Home(){
    window.location.href = 'home.html'
}
