using Microsoft.AspNetCore.Mvc;
using AmbienteDiProva.Models;
using AmbienteDiProva.Data;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using Microsoft.EntityFrameworkCore;

namespace AmbienteDiProva.Controllers
{
    public class AreaPersonaleController : Controller
    {
        private readonly AmbienteProvaContext _context;

        public AreaPersonaleController(AmbienteProvaContext context)
        {
            _context = context;
        }

        public IActionResult ScaffalePersonale()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> PostLibro([FromBody] Libro book)
        {

            try
            {
                _context.Libri.Add(book);

                await _context.SaveChangesAsync();

                return Json(
                    new{
                        status = 200,
                        body = book
                    }
                );
            }
            catch(Exception e)
            {
                Console.WriteLine(e);
            }
            return StatusCode(500, "Server error");
        }

        [HttpGet]
        public async Task<IActionResult> ContainsLibro([FromQuery] int idGutenberg)
        {
            try
            {
                var presente = await _context.Libri.AnyAsync(li => li.IdGutenberg == idGutenberg);

                return Json(new
                {
                    presente = presente
                });
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

            return StatusCode(500, "Server error");
        }

        [HttpGet]
        public async Task<IActionResult> LibriScaffale()
        {
            try
            {
                var listaLibri = await _context.Libri.ToListAsync();

                return Json(
                    new
                    {
                        status = 200,
                        body = listaLibri
                    }
                );
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }

            return StatusCode(500, "Server error");
        }

        [HttpGet]
        public IActionResult LibroInstance([FromQuery] int id)
        {
            var libro = _context.Libri.Find(id);

            return View(libro);
        }
    }
}
