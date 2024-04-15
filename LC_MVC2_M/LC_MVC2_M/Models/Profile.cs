using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace LC_MVC2_M.Models;

[Index("StudentId", Name = "IX_Profiles_StudentId", IsUnique = true)]
public partial class Profile
{
    [Key]
    public int Id { get; set; }

    public string StudentId { get; set; } = null!;

    [Column("fcolor")]
    public string Fcolor { get; set; } = null!;

    [Column("address")]
    public string Address { get; set; } = null!;

    [Column("lon")]
    public double Lon { get; set; }

    [Column("lat")]
    public double Lat { get; set; }

    [Column("height")]
    public double Height { get; set; }

    [Column("weight")]
    public double Weight { get; set; }

    [Column("created")]
    public string Created { get; set; } = null!;

    [ForeignKey("StudentId")]
    [InverseProperty("Profile")]
    public virtual Student Student { get; set; } = null!;
}
