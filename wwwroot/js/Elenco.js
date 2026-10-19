const listL = document.querySelector(".lista-libri");
var libri = [];
var html = "";
var nPag = 1;
const pre = document.querySelector(".prec")
const su = document.querySelector(".suc")
const pag = document.querySelector(".n-pag")

async function navigazione(prog, inp) {
    const contBut = document.querySelector(".cont-but")
    if (prog === true) {
        if (nPag === 1) {
            pre.disabled = false;
        }

        nPag++;
        pag.textContent = nPag;
    } else if(prog === false){
        nPag--;

        if (nPag === 1) {
            pre.disabled = true;
        }

        pag.textContent = nPag;
    }

    if (libri[nPag-1] === undefined) {
        const response = await fetch(`/Biblioteca/fetchElenco?input=${encodeURIComponent(inp.toString())}&nPag=${nPag}`)

        if (!response.ok) {
            throw new Error(`Error status: ${response.status}`)
        }

        const result = await response.json()

        console.log(typeof result.content, JSON.parse(result.content))

        const contenuto = JSON.parse(result.content)

        libri[nPag - 1] = contenuto;

        if (libri[nPag - 1].results.length !== 0) {
            contBut.classList.remove("d-none");
            contBut.classList.add("d-flex");
        } else {
            contBut.classList.remove("d-flex");
            contBut.classList.add("d-none");
        }

        console.log(libri[nPag-1].results);

        

        renderPage();
    } else {
        renderPage();
    }
}

function ricercaLibriDefault(inp) {
    nPag = 1;
    pre.disabled = true;
    libri = [];
    navigazione(null, inp)

    /*
    try {
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

    */
}

function renderPage() {
    /*
    html = "";
    num--;
    var inizio = (num * 32)
    var fine = inizio + 31;
    var dati2 = libri.slice(inizio, fine);
    */

    html = "";

    if (libri.length > 0) {
        libri[nPag-1].results.forEach(elemento => {
            html += `
            <li class="w-100">${elemento.title}</li>
        `
        })
    }
    

    listL.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector(".libro-input")

    input.addEventListener("keyup", () => {
        console.log(libri)
        ricercaLibriDefault(input.value)
    })

    su.addEventListener("click", () => {
        navigazione(true, input.value)
    })

    pre.addEventListener("click", () => {
        navigazione(false, input.value)
    })

})