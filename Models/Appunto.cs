using Microsoft.AspNetCore.Mvc.ModelBinding;
using System.ComponentModel.DataAnnotations;

namespace AmbienteDiProva.Models
{
    public class Appunto
    {
        public int Id { get; set; }
        [Required(ErrorMessage = "Il titolo è richiesto")]
        public string? Titolo { get; set; }

        [Required(ErrorMessage = "Il testo è richiesto")]
        public string? Testo { get; set; }
        
    }
}
