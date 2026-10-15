loadApp();

document.addEventListener("DOMContentLoaded", () => {
    const inp = document.querySelector(".inp");

    inp.addEventListener("keyup", () => {
        const cont = inp.value;
        loadApp(cont);
    })
})

async function loadApp(inpString= ""){
    var html = "";
    const list = document.querySelector(".elApp");
    const car = document.querySelector(".mess");

    try{
        const response = await fetch(`/Scrittoio/ArchivioPost/?searchStr=${encodeURIComponent(inpString)}`)

        if(!response.ok){
            throw new Error(`Error status: ${response.status}`)
        }

        const results = await response.json();

        const escapeHtml = s => String(s)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');

        results.forEach(result => {
            const slicedTitle = result.titolo.length >= 100 ? `${result.titolo.substring(0, 100)}...` : result.titolo;
            const slicedText = result.testo.length >= 100 ? `${result.testo.substring(0, 100)}...` : result.testo;

            html += `
                <li class="mb-1">
                    <a href="/Scrittoio/AppuntoInstance?id=${encodeURIComponent(result.id)}">
                        <div class="ps-2 pt-2">
                            <h4> <b> ${escapeHtml(slicedTitle)} </b> </h4>
                            <p class="opacity-50"> ${escapeHtml(slicedText)} </p>
                        </div>
                    </a>
                </li>
            `
        })

        list.innerHTML = html;

        

    }catch(error){
        console.error(error);
    }

    car.textContent = "";
}

