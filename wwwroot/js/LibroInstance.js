const res = document.querySelector(".resume");
const tex = document.querySelector(".lib-res");
const but = document.querySelector(".but-sav")

function salvaLibro(){
    try{

    }catch()
    {
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if(tex.textContent.trim() === ""){
        res.classList.add("d-none");
    }

    but.addEventListener("click", () => {
        slavaLibro();
    });
})
