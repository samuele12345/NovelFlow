using AmbienteDiProva.Data;
using AmbienteDiProva.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Microsoft.EntityFrameworkCore;
using AmbienteDiProva.Models;
using AmbienteDiProva.Data;

namespace AmbienteDiProva.Controllers
{
    public class ScrittoioController : Controller
    {
        private readonly AmbienteProvaContext _context;

        public ScrittoioController(AmbienteProvaContext context)
        {
            _context = context;
        }

        public IActionResult Scrittura()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> ScritturaPost([FromBody] Appunto model)
        {

            _context.Appunti.Add(model);

            await _context.SaveChangesAsync();

            return Json(model);
        }

        public IActionResult Archivio()
        {
            return View();
        }

        [HttpGet]
        public async Task<IActionResult> ArchivioPost(string searchStr)
        {
            try
            {
                var query = _context.Appunti.AsQueryable();

                if (!string.IsNullOrWhiteSpace(searchStr))
                {
                    query = query.Where(ap => ap.Titolo.Contains(searchStr) || ap.Testo.Contains(searchStr));
                }

                return Json(await query.ToListAsync());
            }
            catch (Exception error)
            {
                Console.WriteLine(error);
            }

            return View();
            
        }

        public IActionResult AppuntoInstance(int id)
        {
            var appuntoInst = _context.Appunti.Find(id);
            return View(appuntoInst);
        }

        [HttpPost]
        public async Task<IActionResult> AppuntoModify([FromBody] Appunto model, [FromQuery] string type)
        {
            if (type == "title")
            {
                _context.Appunti.Attach(model);

                _context.Entry(model).Property(a => a.Titolo).IsModified = true;

                return Json(await _context.SaveChangesAsync());

            } else if (type == "tex")
            {
                _context.Appunti.Attach(model);

                _context.Entry(model).Property(a => a.Testo).IsModified = true;

                return Json(await _context.SaveChangesAsync());

            }

            return View();
        }

        [HttpPost]
        public async Task<IActionResult> AppuntoDelete([FromBody] Appunto model)
        {
            var res = await _context.Appunti.AnyAsync(ap => ap.Id == model.Id);

            if (res)
            {
                _context.Appunti.Remove(model);

                return Json(await _context.SaveChangesAsync());
            }

            return View();
        }
    }
}
