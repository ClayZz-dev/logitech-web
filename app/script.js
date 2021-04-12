const signInBtn = document.querySelector(".special")
const fadeElement = document.querySelectorAll(".anim")

//animation on scroll
//root property (user window)
let options = {
    rootMargin : "0px 0px -70px 0px" //bottom margin only
 }

observer = new IntersectionObserver(function(entries, observer) {

    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return
        } else {
            if (entry.target.classList.contains("anim-left")){
                entry.target.classList.add("fadeInLeft")
            } else if (entry.target.classList.contains("anim-in")) {
                entry.target.classList.add("fadeIn")
            }else {
                entry.target.classList.add("fade")
            }
        observer.unobserve(entry.target)
        }
    })
})

fadeElement.forEach(element => {
    observer.observe(element)
})

//corousel/slide show script

//arrow for navigation
const arrowLeft = document.querySelector("#arrow-left")
const arrowRight = document.querySelector("#arrow-right")

let slideIndex = 1;

// function slideFunction(index){
//     let i;
//     const 
// }

