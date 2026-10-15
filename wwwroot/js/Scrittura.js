const form = document.querySelector(".scForm");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const appunto =
    {
        Titolo: document.querySelector("#tit").value,
        Testo: document.querySelector("#tex").value
    }

    try{
        const response = await fetch("/Scrittoio/ScritturaPost", {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body: JSON.stringify(appunto)
        })

        if(!response.ok){
            throw new Error(`Error status ${response.status}`)
        }

        const result = await response.json();

        console.log(`Aggiunto appunto ${result.titolo}!`);

        form.reset();
    }catch(error){
        console.error(error);
    }
})