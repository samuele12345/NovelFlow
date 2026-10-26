using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AmbienteDiProva.Migrations
{
    /// <inheritdoc />
    public partial class EliminazioneidGutenberglibro : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Libri_IdGutenberg",
                table: "Libri");

            migrationBuilder.DropColumn(
                name: "IdGutenberg",
                table: "Libri");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "IdGutenberg",
                table: "Libri",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Libri_IdGutenberg",
                table: "Libri",
                column: "IdGutenberg");
        }
    }
}
