const listL = document.querySelector(".lista-libri");

document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector(".libro-input")

    input.addEventListener("keyup", () => {
        ricercaLibri(input.value)
    })

})

async function ricercaLibri(inp){
    try{
        
        if(inp == null || inp == ""){
            var html = "";
        }else{
            console.log(inp);
            var html = "";
            const response = await fetch(`https://project-gutenberg-free-books-api1.p.rapidapi.com/books?title=${encodeURIComponent(inp)}`, {
                method: "GET",
                headers: {
                    "Host": "project-gutenberg-free-books-api1.p.rapidapi.com",
                    "X-RapidAPI-Key": ""
                }
            })

            const results = await response.json();

            console.log(results.results);

            const elementi = results.results;

            elementi.forEach(elemento => {
                html += `
                    <li class="w-100">${elemento.title}</li>
                `
            })
        }

        listL.innerHTML = html;

    }catch(error){
        console.log(error)
    }
}

