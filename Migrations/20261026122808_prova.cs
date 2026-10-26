using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AmbienteDiProva.Migrations
{
    /// <inheritdoc />
    public partial class prova : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "GutenbergId",
                table: "Libri",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "GutenbergId",
                table: "Libri");
        }
    }
}
