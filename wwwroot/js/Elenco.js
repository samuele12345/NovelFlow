const listL = document.querySelector(".lista-libri");
var libri = [];
var html = "";
var nPag = 1;
const pre = document.querySelector(".prec")
const su = document.querySelector(".suc")
const pag = document.querySelector(".n-pag")
const car = document.querySelector(".caricamento")
const contBut = document.querySelector(".cont-but")

async function navigazione(prog, inp) {
    

    console.log("input value: " + inp)

    if (inp === "") {
        contBut.classList.remove("d-flex");
        contBut.classList.add("d-none");
        listL.innerHTML = `
            
            <div id="6133" class="gap-2 cont-li0">
                <div class="cont-li mb-2">
                    <img src="https://www.gutenberg.org/cache/epub/6133/pg6133.cover.medium.jpg">
                    
                </div>

                <h6>The Extraordinary Adventures o...</h6>
            </div>
        
            <div id="76639" class="gap-2 cont-li0">
                <div class="cont-li mb-2">
                    <img src="https://www.gutenberg.org/cache/epub/76639/pg76639.cover.medium.jpg">
                    
                </div>

                <h6>Eloisa : $b or, A series of or...</h6>
            </div>
        
            <div id="2852" class="gap-2 cont-li0">
                <div class="cont-li mb-2">
                    <img src="https://www.gutenberg.org/cache/epub/2852/pg2852.cover.medium.jpg">
                    
                </div>

                <h6>The Hound of the Baskervilles</h6>
            </div>
        
            <div id="393" class="gap-2 cont-li0">
                <div class="cont-li mb-2">
                    <img src="https://www.gutenberg.org/cache/epub/393/pg393.cover.medium.jpg">
                    
                </div>

                <h6>The Blue Lagoon: A Romance</h6>
            </div>
        
            <div id="204" class="gap-2 cont-li0">
                <div class="cont-li mb-2">
                    <img src="https://www.gutenberg.org/cache/epub/204/pg204.cover.medium.jpg">
                    
                </div>

                <h6>The innocence of Father Brown</h6>
            </div>
        
            <div id="37106" class="gap-2 cont-li0">
                <div class="cont-li mb-2">
                    <img src="https://www.gutenberg.org/cache/epub/37106/pg37106.cover.medium.jpg">
                    
                </div>

                <h6>Little Women; Or, Meg, Jo, Bet...</h6>
            </div>
        
            <div id="2350" class="gap-2 cont-li0">
                <div class="cont-li mb-2">
                    <img src="https://www.gutenberg.org/cache/epub/2350/pg2350.cover.medium.jpg">
                    
                </div>

                <h6>His last bow : $b Some later r...</h6>
            </div>
        
            <div id="67979" class="gap-2 cont-li0">
                <div class="cont-li mb-2">
                    <img src="https://www.gutenberg.org/cache/epub/67979/pg67979.cover.medium.jpg">
                    
                </div>

                <h6>The Blue Castle: a novel</h6>
            </div>
        
            <div id="3070" class="gap-2 cont-li0">
                <div class="cont-li mb-2">
                    <img src="https://www.gutenberg.org/cache/epub/3070/pg3070.cover.medium.jpg">
                    
                </div>

                <h6>The Hound of the Baskervilles</h6>
            </div>
        
            <div id="3530" class="gap-2 cont-li0">
                <div class="cont-li mb-2">
                    <img src="https://www.gutenberg.org/cache/epub/3530/pg3530.cover.medium.jpg">
                    
                </div>

                <h6>Love-at-arms : $b being a narr...</h6>
            </div>
        
            <div id="16328" class="gap-2 cont-li0">
                <div class="cont-li mb-2">
                    <img src="https://www.gutenberg.org/cache/epub/16328/pg16328.cover.medium.jpg">
                    
                </div>

                <h6>Beowulf: An Anglo-Saxon Epic Poem</h6>
            </div>
        
            <div id="2813" class="gap-2 cont-li0">
                <div class="cont-li mb-2">
                    <img src="https://www.gutenberg.org/cache/epub/2813/pg2813.cover.medium.jpg">
                    
                </div>

                <h6>The Grand Babylon Hôtel</h6>
            </div>
        
            <div id="24739" class="gap-2 cont-li0">
                <div class="cont-li mb-2">
                    <img src="https://www.gutenberg.org/cache/epub/24739/pg24739.cover.medium.jpg">
                    
                </div>

                <h6>Bidwell's Travels, from Wall S...</h6>
            </div>
        
            <div id="2620" class="gap-2 cont-li0">
                <div class="cont-li mb-2">
                    <img src="https://www.gutenberg.org/cache/epub/2620/pg2620.cover.medium.jpg">
                    
                </div>

                <h6>The Home Book of Verse — Volume 2</h6>
            </div>
        
            <div id="10002" class="gap-2 cont-li0">
                <div class="cont-li mb-2">
                    <img src="https://www.gutenberg.org/cache/epub/10002/pg10002.cover.medium.jpg">
                    
                </div>

                <h6>The House on the Borderland</h6>
            </div>
        
            <div id="224" class="gap-2 cont-li0">
                <div class="cont-li mb-2">
                    <img src="https://www.gutenberg.org/cache/epub/224/pg224.cover.medium.jpg">
                    
                </div>

                <h6>A pair of blue eyes</h6>
            </div>
        
            <div id="12758" class="gap-2 cont-li0">
                <div class="cont-li mb-2">
                    <img src="https://www.gutenberg.org/cache/epub/12758/pg12758.cover.medium.jpg">
                    
                </div>

                <h6>Library of the World's Best My...</h6>
            </div>
        
            <div id="6635" class="gap-2 cont-li0">
                <div class="cont-li mb-2">
                    <img src="https://www.gutenberg.org/cache/epub/6635/pg6635.cover.medium.jpg">
                    
                </div>

                <h6>A Romance of Billy-Goat Hill</h6>
            </div>
        
            <div id="62383" class="gap-2 cont-li0">
                <div class="cont-li mb-2">
                    <img src="https://www.gutenberg.org/cache/epub/62383/pg62383.cover.medium.jpg">
                    
                </div>

                <h6>A Biblia Sagrada, Contendo o V...</h6>
            </div>
        
            <div id="24793" class="gap-2 cont-li0">
                <div class="cont-li mb-2">
                    <img src="https://www.gutenberg.org/cache/epub/24793/pg24793.cover.medium.jpg">
                    
                </div>

                <h6>Blow The Man Down: A Romance O...</h6>
            </div>
        
            <div id="22163" class="gap-2 cont-li0">
                <div class="cont-li mb-2">
                    <img src="https://www.gutenberg.org/cache/epub/22163/pg22163.cover.medium.jpg">
                    
                </div>

                <h6>The Rover Boys on the Farm; or...</h6>
            </div>
        
            <div id="77092" class="gap-2 cont-li0">
                <div class="cont-li mb-2">
                    <img src="https://www.gutenberg.org/cache/epub/77092/pg77092.cover.medium.jpg">
                    
                </div>

                <h6>She who sleeps : $b A romance ...</h6>
            </div>
        
            <div id="23599" class="gap-2 cont-li0">
                <div class="cont-li mb-2">
                    <img src="https://www.gutenberg.org/cache/epub/23599/pg23599.cover.medium.jpg">
                    
                </div>

                <h6>The Big Fix</h6>
            </div>
        
            <div id="28054" class="gap-2 cont-li0">
                <div class="cont-li mb-2">
                    <img src="https://www.gutenberg.org/cache/epub/28054/pg28054.cover.medium.jpg">
                    
                </div>

                <h6>The Brothers Karamazov</h6>
            </div>
        
            <div id="6081" class="gap-2 cont-li0">
                <div class="cont-li mb-2">
                    <img src="https://www.gutenberg.org/cache/epub/6081/pg6081.cover.medium.jpg">
                    
                </div>

                <h6>Biographia Literaria</h6>
            </div>
        
            <div id="28780" class="gap-2 cont-li0">
                <div class="cont-li mb-2">
                    <img src="https://www.gutenberg.org/cache/epub/28780/pg28780.cover.medium.jpg">
                    
                </div>

                <h6>Peter the Brazen: A Mystery St...</h6>
            </div>
        
            <div id="59828" class="gap-2 cont-li0">
                <div class="cont-li mb-2">
                    <img src="https://www.gutenberg.org/cache/epub/59828/pg59828.cover.medium.jpg">
                    
                </div>

                <h6>The String of Pearls; Or, The ...</h6>
            </div>
        
            <div id="34318" class="gap-2 cont-li0">
                <div class="cont-li mb-2">
                    <img src="https://www.gutenberg.org/cache/epub/34318/pg34318.cover.medium.jpg">
                    
                </div>

                <h6>Life Blood</h6>
            </div>
        
            <div id="78033" class="gap-2 cont-li0">
                <div class="cont-li mb-2">
                    <img src="https://www.gutenberg.org/cache/epub/78033/pg78033.cover.medium.jpg">
                    
                </div>

                <h6>The silent Baltic : $b or, Det...</h6>
            </div>
        
            <div id="51252" class="gap-2 cont-li0">
                <div class="cont-li mb-2">
                    <img src="https://www.gutenberg.org/cache/epub/51252/pg51252.cover.medium.jpg">
                    
                </div>

                <h6>The Book of the Thousand Night...</h6>
            </div>
        
            <div id="20203" class="gap-2 cont-li0">
                <div class="cont-li mb-2">
                    <img src="https://www.gutenberg.org/cache/epub/20203/pg20203.cover.medium.jpg">
                    
                </div>

                <h6>Autobiography of Benjamin Franklin</h6>
            </div>
        
            <div id="16" class="gap-2 cont-li0">
                <div class="cont-li mb-2">
                    <img src="https://www.gutenberg.org/cache/epub/16/pg16.cover.medium.jpg">
                    
                </div>

                <h6>Peter Pan : $b [Peter and Wendy]</h6>
            </div>
        
        `;
        car.textContent = "";
        return
    }

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

    if (libri[nPag - 1] === undefined) {
        const response = await fetch(`/Biblioteca/fetchElenco?input=${encodeURIComponent(inp.toString())}&nPag=${nPag}`);
        car.textContent = "Caricamento...";

        if (!response.ok) {
            car.textContent = "Nessun libro trovato...";
            throw new Error(`Error status: ${response.status}`);
        }

        const result = await response.json()

        console.log(typeof result.content, JSON.parse(result.content))

        const contenuto = JSON.parse(result.content)

        if (contenuto.results.length > 0) {
            libri[nPag - 1] = contenuto;

            contBut.classList.remove("d-none");
            contBut.classList.add("d-flex");

            console.log(libri[nPag - 1].results);
        } else if (contenuto.results.length === 0) {
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

    console.log(libri)
    console.log(libri.length)

    if (libri.length > 0) {
        libri[nPag - 1].results.forEach(elemento => {
            html += `
            <a class="link-lib" href="/Biblioteca/LibroInstance?id=${encodeURIComponent(elemento.id)}">
                <div id="${elemento.id}" class="gap-2 cont-li0">
                    <div class="cont-li mb-2">
                        <img src="${elemento.cover_image}" />
                    
                    </div>

                    <h6>${elemento.title.length < 35 ? elemento.title : elemento.title.substring(0, 30) + "..."}</h6>
                </div>
            </a>
        `
                /*< li id = "${elemento.id}" class="w-100 mt-2 mx-auto" mb - 4 > ${ elemento.title }</li >*/
        })
    } else if (libri.length === 0) {
        listL.innerHTML = "";
        car.textContent = "Nessun libro trovato...";
        contBut.classList.remove("d-flex");
        contBut.classList.add("d-none");
        return
    }
    
    car.textContent = "";
    listL.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector(".libro-input")
    const nav = document.querySelector(".navbar")

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