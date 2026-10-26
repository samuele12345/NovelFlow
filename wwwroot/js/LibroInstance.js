const res = document.querySelector(".resume");
const tex = document.querySelector(".lib-res");
const but = document.querySelector(".but-sav");
const del = document.querySelector(".but-del");

async function statusDefault() {
    const id = document.querySelector(".lib-id-main").textContent;

    try {
        const response = await fetch(`/AreaPersonale/ContainsLibro?id=${encodeURIComponent(id)}`);

        const result = await response.json();

        console.log(result);

        if (result.presente) {
            but.disabled = true;
            but.textContent = "Salvato";
            del.classList.remove("invisible");
            del.disabled = false;
        }
    } catch (error) {
        console.log(error);
    }
}

async function salvaLibro(){
    try{
        const libro = {
            GutenbergId: document.querySelector(".lib-id-main").textContent,
            Nome: document.querySelector(".lib-nome").textContent,
            Img: document.querySelector(".lib-img").src,
            OnlineLink: document.querySelector(".link-online").href,
            DownloadLink: document.querySelector(".link-download").href,
            Resume: document.querySelector(".lib-res").textContent,
            Category: document.querySelector(".lib-categs").textContent,
            Autore: document.querySelector(".lib-aut").textContent
        }

        console.log(libro);

        const response = await fetch(`/AreaPersonale/PostLibro`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(libro)
        })

        if (!response.ok) {
            throw new Error(`Error status: ${response.status}`)
        }

        const result = response.json();

        console.log(result);

        but.disabled = true;
        but.textContent = "Salvato";
        del.classList.remove("invisible");
        del.disabled = false;
    }catch(error)
    {
        console.log(error);
    }
}

async function eliminaLibro(id) {
    try {
        const response = await fetch(`/Biblioteca/LibroDelete?id=${encodeURIComponent(id)}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }
        })

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const result = await response.json();

        console.log(`${result} modifica eseguita`);

        del.classList.add("invisible");
        del.disabled = true;
        but.disabled = false;
        but.textContent = "Salva";
        
    } catch (error)
    {
        console.log(error)
    }
}

document.addEventListener("DOMContentLoaded", () => {
    statusDefault();

    if(tex.textContent.trim() === ""){
        res.classList.add("d-none");
    }

    but.addEventListener("click", () => {
        salvaLibro();
    });

    del.addEventListener("click", () => {
        const lId = document.querySelector(".lib-id-main").textContent;
        eliminaLibro(lId);
    })
})
