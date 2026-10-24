using AmbienteDiProva.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.ClientModel.Primitives;
using System.Collections.Immutable;
using System.Reflection.Metadata.Ecma335;
using System.Runtime.InteropServices;
using System.Runtime.Intrinsics.Arm;
using static System.Net.WebRequestMethods;
using System.Text.Json.Nodes;

namespace AmbienteDiProva.Controllers
{
    public class BibliotecaController : Controller
    {
        private readonly IHttpClientFactory _httpClientFactory;
        private readonly IConfiguration _configuration;

        public BibliotecaController(IHttpClientFactory iHttpClientFactory, IConfiguration configuration)
        {
            _httpClientFactory = iHttpClientFactory;
            _configuration = configuration;
        }

        public IActionResult Elenco()
        {
            return View();
        }

        [HttpGet]
        public async Task<IActionResult> fetchElenco([FromQuery] string input, [FromQuery] int nPag)
        {
            if (string.IsNullOrWhiteSpace(input))
            {
                return BadRequest("inserire un titolo");
            }

            var apiKey = _configuration["Gutenberg:XRapidAPIKey:1"];

            if (string.IsNullOrWhiteSpace(apiKey))
            {
                return StatusCode(500, "Chiave non configurata");
            }

            var url = $"https://project-gutenberg-free-books-api1.p.rapidapi.com/books?title={Uri.EscapeDataString(input)}&page={nPag}";

            try
            {
                using var request = new HttpRequestMessage(HttpMethod.Get, url);

                request.Headers.Add("Host", "project-gutenberg-free-books-api1.p.rapidapi.com");
                request.Headers.Add("X-RapidAPI-Key", apiKey);

                var client = _httpClientFactory.CreateClient();

                using var response = await client.SendAsync(request);

                var result = await response.Content.ReadAsStringAsync();

                return Json(new
                {
                    status = (int)response.StatusCode,
                    contentType = "application/json",
                    content = result
                });
            }
            catch(Exception e)
            {
                Console.WriteLine(e);
            }

            return BadRequest("Errore");
        }


        
        [HttpGet]
        public async Task<IActionResult> LibroInstance([FromQuery] int id)
        {
            var apiKey = _configuration["Gutenberg:XRapidAPIKey:1"];

            if (string.IsNullOrWhiteSpace(apiKey))
            {
                return StatusCode(500, "Api key non configurata");
            }

            var url = $"https://project-gutenberg-free-books-api1.p.rapidapi.com/books/{Uri.EscapeDataString(id.ToString())}";

            try
            {
                using var request = new HttpRequestMessage(HttpMethod.Get, url);

                request.Headers.Add("Host", "project-gutenberg-free-books-api1.p.rapidapi.com");
                request.Headers.Add("X-RapidAPI-Key", apiKey);

                var client = _httpClientFactory.CreateClient();

                using var response = await client.SendAsync(request);

                var result = await response.Content.ReadAsStringAsync();

                var resJson = JsonNode.Parse(result);

                if(resJson == null)
                {
                    throw new Exception(" Errore: 400, Richiesta non valida");
                }

                Console.WriteLine(resJson);

                return View(new Libro
                {

                    Id = (int)resJson["results"][0]["id"],
                    Nome = (string)resJson["results"][0]["title"],
                    Img = (string)resJson["results"][0]["cover_image"],
                    OnlineLink = $"https://www.gutenberg.org/cache/epub/{(int)resJson["results"][0]["id"]}/pg{(int)resJson["results"][0]["id"]}-images.html",
                    DownloadLink = $"https://www.gutenberg.org/ebooks/{(int)resJson["results"][0]["id"]}.epub3.images"
                    /*
                    Resume =
                    Category =
                    Autore = 
                    */
                });
                
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

            return BadRequest("Errore");
        }

        
    }
}
