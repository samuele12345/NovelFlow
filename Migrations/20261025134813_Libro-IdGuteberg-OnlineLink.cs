using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AmbienteDiProva.Migrations
{
    /// <inheritdoc />
    public partial class LibroIdGutebergOnlineLink : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_libri",
                table: "libri");

            migrationBuilder.RenameTable(
                name: "libri",
                newName: "Libri");

            migrationBuilder.RenameColumn(
                name: "Link",
                table: "Libri",
                newName: "OnlineLink");

            migrationBuilder.AddColumn<string>(
                name: "DownloadLink",
                table: "Libri",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "IdGutenberg",
                table: "Libri",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Libri",
                table: "Libri",
                column: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Libri",
                table: "Libri");

            migrationBuilder.DropColumn(
                name: "DownloadLink",
                table: "Libri");

            migrationBuilder.DropColumn(
                name: "IdGutenberg",
                table: "Libri");

            migrationBuilder.RenameTable(
                name: "Libri",
                newName: "libri");

            migrationBuilder.RenameColumn(
                name: "OnlineLink",
                table: "libri",
                newName: "Link");

            migrationBuilder.AddPrimaryKey(
                name: "PK_libri",
                table: "libri",
                column: "Id");
        }
    }
}
