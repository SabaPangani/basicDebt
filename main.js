

const cursor = document.querySelector(".cursor")
const cursorDrag = document.querySelector(".cursor-drag")
const heroDiv = document.querySelector(".hero")
const carousel = document.querySelector(".owl-carousel")
const reel = document.querySelector(".play-reel")
var mouseDown = false;

document.body.addEventListener("mousemove",function(e){
    console.log(e.pageY)
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
    if (e.pageY < 1350 && e.pageY > 107){
        cursor.classList.add("active");
        reel.style.opacity = "0"
        heroDiv.style.cursor = "none"
    }else{
        cursor.classList.remove("active");
        reel.style.opacity = "1"
        heroDiv.style.cursor = "default"
    }
    cursorDrag.style.left = e.pageX + "px";
    cursorDrag.style.top = e.pageY + "px";
    if (e.pageY > 3941 && e.pageY < 4353){
        cursorDrag.classList.add("active");
        carousel.style.cursor = "none"
    }else{
        cursorDrag.classList.remove("active");
        carousel.style.cursor = "default"
    }
    
    carousel.addEventListener("mousedown",function(){
        mouseDown = true;
        console.log("down")
    
        if(mouseDown == true){
            $(".drag-text").css("opacity","0")
            cursorDrag.style.opacity = ".8"
            cursorDrag.style.width = "120px"
            cursorDrag.style.height = "120px"

        }
    })
    carousel.addEventListener("mouseup",function(){
        mouseDown = false;
        console.log("up")
        if (mouseDown == false){
            $(".drag-text").css("opacity","1")
            cursorDrag.style.opacity = "1"
            cursorDrag.style.width = "160px"
            cursorDrag.style.height = "160px"
        }
    })
    
    
});


$(window).scroll(function(){
    console.log(scrollY)
    if (scrollY >= 4230 && scrollY <= 5860){
        $("body").css("background-color","var(--black)")
        $("*").css("color","var(--pink)")
    }else{
        $("body").css("background-color","rgb(234, 234, 234)")
        $("*").css("color","var(--black)")
        $(".navbar-link").css("color","white")
    }
})