const dotsbox = document.getElementById("dots");
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
let counter = 0;

function cheangeSlide() {
    counter++;
    if (counter >= 4) {
        counter = 0;
    }
    console.log(counter)

    slides.forEach(function (item) {
        console.log(item)
        if (item.classList[1] == "s-active") {
            console.log("trues-active")
            item.classList.remove("s-active")
        }
        else{
            console.log("false-active")
        }
    })
    dots.forEach(function (item) {
        if (item.classList[1] == "d-active") {
            item.classList.remove("d-active")
        }
    })

    slides[counter].classList.add("s-active");
    dots[counter].classList.add("d-active");
}