using Microsoft.EntityFrameworkCore;

namespace AmbienteDiProva.Models
{
    public class Libro
    {
        public int Id { get; set; }
        public string? Nome { get; set; }
        public string? Img { get; set; }
        public string? OnlineLink { get; set; }
        public string? DownloadLink { get; set; }
        public string? Resume { get; set; }
        public string? Category { get; set; }
        public string? Autore { get; set; }
    }
}
