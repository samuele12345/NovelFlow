const inpId = document.querySelector(".mod-id");
const inp = document.querySelector(".title");
const tAr = document.querySelector(".tex");
const tDel = document.querySelector(".del");

async function modifica(type) {
    const data = {
        Id: inpId.value,
        Titolo: inp.value,
        Testo: tAr.value
    }

    const response = await fetch(`/Scrittoio/AppuntoModify?type=${encodeURIComponent(type)}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    if (!response.ok) {
        throw new Error(`Error status: ${response.status}`)
    }

    const result = await response.json();

    console.log(result);
}

document.addEventListener("DOMContentLoaded", () => {
    inp.addEventListener("keyup", () => {
        modifica("title")
    })

    tAr.addEventListener("keyup", () => {
        modifica("tex")
    })
})

tDel.addEventListener("click", async () => {
    const data = {
        Id: inpId.value,
        Titolo: inp.value,
        Testo: tAr.value
    }

    try {
        const response = await fetch("/Scrittoio/AppuntoDelete/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

        if (!response.ok) {
            throw new Error(`Error status: ${response.status}`)
        }

        const result = response.json();

        console.log(response);

        window.location.href = "/Scrittoio/Archivio"
    } catch (error) {
        console.log(error)
    }
})
