
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Identity;
namespace AmbienteDiProva.Models
{
    public class ApplicationUser : IdentityUser
    {
        public string? FullName { get; set; }
        public string? Address { get; set; }

        public ICollection<Libro>? Libri { get; set; }
    }
}
