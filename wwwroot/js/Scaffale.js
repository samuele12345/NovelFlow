const listL = document.querySelector(".lista-libri");
var libri = [];
var html = "";
var nPag = 1;
const pre = document.querySelector(".prec")
const su = document.querySelector(".suc")
const pag = document.querySelector(".n-pag")
const car = document.querySelector(".caricamento")
const contBut = document.querySelector(".cont-but")
var elResult;
ricercaLibriDefault("")

async function navigazione(prog, inp) {


    console.log("input value: " + inp)

    if (prog === true) {
        if (nPag === 1) {
            pre.disabled = false;
        }

        nPag++;
        pag.textContent = nPag;
    } else if (prog === false) {
        nPag--;

        if (nPag === 1) {
            pre.disabled = true;
        }

        pag.textContent = nPag;
    }


    if (libri[nPag - 1] === undefined) {
        const response = await fetch(`/AreaPersonale/LibriScaffale`);
        car.textContent = "Caricamento...";

        if (!response.ok) {
            car.textContent = "Nessun libro trovato...";
            throw new Error(`Error status: ${response.status}`);
        }

        elResult = await response.json()

        console.log(elResult);

        if (inp !== "") {
            elResult.body = elResult.body.filter((el) => el.nome.toLowerCase().includes(inp.toLowerCase()))

            console.log("body: " + elResult.body)
        }

        

        if (elResult.body.length > 0) {
            libri[nPag - 1] = elResult.body.slice(0 + ((nPag - 1) * 32), 32 + ((nPag - 1) * 32));

            console.log(elResult.body.at(1 + ((nPag) * 32)))

            console.log(libri)
            contBut.classList.remove("d-none");
            contBut.classList.add("d-flex");

            console.log(libri[nPag - 1]);
        } else if (elResult.body.length === 0) {
            contBut.classList.remove("d-flex");
            contBut.classList.add("d-none");
            listL.innerHTML = "";
            car.textContent = "Nessun libro trovato...";
        }

        renderPage();
    } else {
        renderPage();
    }
}

function ricercaLibriDefault(inp = "") {
    nPag = 1;
    pre.disabled = true;
    libri = [];
    navigazione(null, inp)

}

function renderPage() {
    html = "";

    if (libri[nPag - 1] === undefined || libri[nPag - 1].length < 32) {
        su.disabled = true;
        pre.disabled = true;
    } else {
        if (nPag - 1 == 0) {
            pre.disabled = true;
        }
        su.disabled = false;
    }

    console.log(libri)
    console.log(libri.length)

    if (libri.length > 0) {
        libri[nPag - 1].forEach(elemento => {
            html += `
            <a class="link-lib" href="/Biblioteca/LibroInstance?id=${encodeURIComponent(elemento.id)}">
                <div id="${elemento.id}" class="gap-2 cont-li0">
                    <div class="cont-li mb-2">
                        <img src="${elemento.img}" />
                    
                    </div>

                    <h6>
                        ${elemento.nome}
                    </h6>
                </div>
            </a>
        `
            /*< li id = "${elemento.id}" class="w-100 mt-2 mx-auto" mb - 4 > ${ elemento.title }</li >*/
        })


        if (elResult.body.slice(0, elResult.body.length).length < 33 && libri.length == 1) {
            contBut.classList.remove("d-flex");
            contBut.classList.add("d-none");
        }
    } else if (libri.length === 0) {
        listL.innerHTML = "";
        car.textContent = "Nessun libro trovato...";
        contBut.classList.remove("d-flex");
        contBut.classList.add("d-none");
        return
    }

    car.textContent = "";
    listL.innerHTML = html;

    if ((nPag - 1) > 0) {
        pre.disabled = false;
    }

    if (elResult.body.at(0 + ((nPag) * 32)) === undefined) {
        su.disabled = true;
    } else {
        su.disabled = false;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector(".libro-input")
    const nav = document.querySelector(".navbar")

    window.addEventListener('pageshow', function (event) {
        
        if (event.persisted) { // controlla se la pagina era già stata caricata in bfcache o no 
            window.location.reload(); // Ricarica la pagina direttamente dal server, no bfcache
            return;
        }
    });
    

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

    if (pre || su) {

        pre.addEventListener("click", () => {
            nav.scrollIntoView({ behavior: 'smooth' });
        })

        su.addEventListener("click", () => {
            nav.scrollIntoView({ behavior: 'smooth' });
        })
    }

})