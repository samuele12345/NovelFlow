using Microsoft.AspNetCore.Mvc;

namespace AmbienteDiProva.Controllers
{
    public class BibliotecaController : Controller
    {
        public IActionResult Elenco()
        {
            return View();
        }
    }
}
