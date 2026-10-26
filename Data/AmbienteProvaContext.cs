using AmbienteDiProva.Models;
using Microsoft.EntityFrameworkCore;
using System.Reflection.Emit;

namespace AmbienteDiProva.Data
{
    public class AmbienteProvaContext : DbContext
    {
        public AmbienteProvaContext(DbContextOptions options) : base(options)
        {
            
        }

        protected override void OnModelCreating(ModelBuilder modelbuilder)
        {

            base.OnModelCreating(modelbuilder);
        }

        public DbSet<Appunto> Appunti { get; set; }

        public DbSet<Libro> Libri { get; set; }
    }
}
