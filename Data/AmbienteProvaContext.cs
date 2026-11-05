using AmbienteDiProva.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace AmbienteDiProva.Data
{
    public class AmbienteProvaContext : IdentityDbContext<ApplicationUser>
    {
        public AmbienteProvaContext(
            DbContextOptions<AmbienteProvaContext> options) : base(options)
        {
            
        }

        protected override void OnModelCreating(ModelBuilder modelbuilder)
        {
            base.OnModelCreating(modelbuilder);

            modelbuilder.Entity<Libro>()
                .HasOne(u => u.User)
                .WithMany(l => l.Libri)
                .HasForeignKey(ui => ui.UserId);


        }

        public DbSet<Appunto> Appunti { get; set; }

        public DbSet<Libro> Libri { get; set; }
    }
}
