const res = document.querySelector(".resume");
const tex = document.querySelector(".lib-res");
const but = document.querySelector(".but-sav")

async function statusDefault() {
    const idGuten = document.querySelector(".lib-id").textContent;

    try {
        const response = await fetch(`/AreaPersonale/ContainsLibro?idGutenberg=${encodeURIComponent(idGuten)}`);

        const result = await response.json();

        console.log(result);

        if (result.presente) {
            but.disabled = true;
            but.textContent = "Salvato";
        }
    } catch (error) {
        console.log(error);
    }
}

async function salvaLibro(){
    try{
        const libro = {
            IdGutenberg: document.querySelector(".lib-id").textContent,
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
    }catch(error)
    {
        console.log(error);
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
})
