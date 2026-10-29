using System.ComponentModel.DataAnnotations;

namespace AmbienteDiProva.ViewModels
{
    public class RegisterViewModel
    {
        [EmailAddress]
        [Required(ErrorMessage = "Email richiesta!")]
        public string? Email { get; set; }
        [Required(ErrorMessage = "Nome richiesto!")]
        [RegularExpression(@"^[a-zA-Z\s]+$", ErrorMessage = "Il nome deve contenere solo lettere!")]
        public string? Name { get; set; }

        [Required(ErrorMessage = "Cognome richiesto!")]
        [RegularExpression(@"^[a-zA-Z\s]+$", ErrorMessage = "Il cognome deve contenere solo lettere!")]
        public string? Surname { get; set; }

        [Required(ErrorMessage = "Indirizzo richiesto!")]
        [RegularExpression(@"^[a-zA-Z0-9\s]+$", ErrorMessage = "L'indirizzo deve contenere solo lettere e numeri!")]
        public string? Address { get; set; }

        [DataType(DataType.Password)]
        [StringLength(100, MinimumLength = 8, ErrorMessage = "Lunghezza minima: 8 caratteri!")]
        [RegularExpression(@"^(?=.*[a-zA-Z0-9])(?=.*[^a-zA-Z0-9].*$)", ErrorMessage = "Password inadeguata!")]
        public string? Password { get; set; }

        [DataType(DataType.Password)]
        [Compare("Password", ErrorMessage = "Le password sono differenti!")]
        [RegularExpression(@"^(?=.*[a-zA-Z0-9])(?=.*[^a-zA-Z0-9]).+$")]
        public string? RepeatPassword { get; set; }
    }
}
