using AmbienteDiProva.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.ClientModel.Primitives;
using System.Reflection.Metadata.Ecma335;
using System.Runtime.InteropServices;
using System.Runtime.Intrinsics.Arm;
using static System.Net.WebRequestMethods;

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

            var url = $"https://project-gutenberg-free-books-api1.p.rapidapi.com/id?";

            try
            {
                


            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

            return View();
        }

        
    }
}
