using Microsoft.AspNetCore.Mvc.ModelBinding;
using System.ComponentModel.DataAnnotations;

namespace AmbienteDiProva.ViewModels
{
    public class LoginViewModel
    {
        [EmailAddress]
        [Required(ErrorMessage = "Email richiesta!")]
        public string? Email { get; set; }

        [Required(ErrorMessage = "Password richiesta!")]
        [DataType(DataType.Password)]
        public string? Password { get; set; }
    }
}
