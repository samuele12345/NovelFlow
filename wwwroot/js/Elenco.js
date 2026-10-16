const listL = document.querySelector(".lista-libri");
var libri = [];
var html = "";

document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector(".libro-input")

    input.addEventListener("keyup", () => {
        ricercaLibri(input)
    })

})

async function ricercaLibri(inp){
    try{
        const contBut = document.querySelector(".cont-but")
        
        if(inp.value === null || inp.value === ""){
            html = "";
            listL.innerHTML = html;
            contBut.classList.remove("d-flex")
            contBut.classList.add("d-none")
        }else{
            console.log(inp);
            var url = `https://project-gutenberg-free-books-api1.p.rapidapi.com/books?title=${encodeURIComponent(inp.value)}`
            const pageNum = 0;
            var index = 0;
            const buts = document.querySelectorAll(".btn-pag")
            
            
            while(url){

                if(index == 5){
                    break;
                }

                const response = await fetch(url, {
                    method: "GET",
                    headers: {
                        "Host": "project-gutenberg-free-books-api1.p.rapidapi.com",
                        "X-RapidAPI-Key": ""
                    }
                })

                const results = await response.json();

                if(((results.results).length === 0)){
                    contBut.classList.remove("d-flex")
                    contBut.classList.add("d-none")
                    listL.innerHTML = "";
                    break;
                }else{
                    contBut.classList.remove("d-none")
                    contBut.classList.add("d-flex")
                }

                buts[index].disabled = false;

                console.log(results);
                console.log(results.results);

                libri.push(...results.results)
                
                if(index === 0){
                    renderPage(1);
                }
                index++;

                url = results.next;
            }

            
        }


    }catch(error){
        console.log(error)
    }
}

function renderPage(num){
    html = "";
    num--;
    var inizio = (num * 32)
    var fine = inizio + 31;
    var dati2 = libri.slice(inizio, fine);

    dati2.forEach(elemento => {
        html += `
            <li class="w-100">${elemento.title}</li>
        `
    })

    listL.innerHTML = html;
}