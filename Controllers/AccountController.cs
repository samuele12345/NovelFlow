using AmbienteDiProva.Models;
using AmbienteDiProva.ViewModels;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

namespace AmbienteDiProva.Controllers
{
    public class AccountController : Controller
    {
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly UserManager<ApplicationUser> _userManager;

        public AccountController(SignInManager<ApplicationUser> signInManager, UserManager<ApplicationUser> userManager)
        {
            _signInManager = signInManager;
            _userManager = userManager;
        }
        public IActionResult Register()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Register(RegisterViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return View(model);
            }

            if (string.IsNullOrWhiteSpace(model.Email))
            {
                ModelState.AddModelError("Email", "Inserire l'email!");
                return View(model);
            }

            var norEmail = model.Email.Trim().ToLower();

            bool exists = await _userManager.Users.AnyAsync(e => e.Email == norEmail);
            Console.WriteLine(exists);

            if (exists)
            {
                ModelState.AddModelError("Email", "Email già registrata!");
                return View(model);
            }

            ApplicationUser appUser = new ApplicationUser
            {
                Email = norEmail,
                UserName = norEmail,
                FullName = $"{model.Name?.Trim()} {model.Surname?.Trim()}",
                Address = model.Address
            };

            var result = await _userManager.CreateAsync(appUser, model.Password);

            if (result.Succeeded)
            {
                await _signInManager.SignInAsync(appUser, isPersistent: false);
                return RedirectToAction("Index", "Home");
            }

            foreach(var error in result.Errors)
            {
                ModelState.AddModelError(string.Empty, error.Description);
            }

            return View(model);
        }

        [HttpPost]
        public async Task<IActionResult> Logout()
        {
            await _signInManager.SignOutAsync();
            return RedirectToAction("Index", "Home");
        }

        public IActionResult Login()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Login(LoginViewModel model)
        {
            if (ModelState.IsValid)
            {
                if (string.IsNullOrWhiteSpace(model.Email))
                {
                    ModelState.AddModelError("Email", "Email Richiesta!");
                    return View(model);
                }

                var norEmail = model.Email.ToLower().Trim();

                var result = await _signInManager.PasswordSignInAsync(norEmail, model.Password, false, false);

                if (result.Succeeded)
                {
                    return RedirectToAction("Index", "Home");
                }
                else
                {
                    ModelState.AddModelError("", "Email o password errate!");
                    return View(model);
                }
            }

            return View(model);
        }


    }
}
