using System.ComponentModel.DataAnnotations;

namespace AmbienteDiProva.ViewModels
{
    public class RegisterViewModel
    {
        [EmailAddress(ErrorMessage = "Formato email non valido!")]
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

        [Required(ErrorMessage = "Password richiesta!")]
        [MinLength(8, ErrorMessage = "Lunghezza minima: 8 caratteri!")]
        [RegularExpression(
            @"^(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).+$",
            ErrorMessage = "La password deve contenere almeno una maiuscola, un numero e un carattere speciale.")]
        [DataType(DataType.Password)]
        public string? Password { get; set; }

        [DataType(DataType.Password)]
        [Compare("Password", ErrorMessage = "Le password sono differenti!")]
        public string? RepeatPassword { get; set; }
    }
}
