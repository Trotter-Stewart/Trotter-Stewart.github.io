using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace LC_MVC2_M.Models;

public partial class Student
{
    [Key]
    public string Id { get; set; } = null!;

    public string Name { get; set; } = null!;

    [Column("DOB")]
    public string Dob { get; set; } = null!;

    [Column("favPlace")]
    public string FavPlace { get; set; } = null!;

    [Column("lon")]
    public double Lon { get; set; }

    [Column("lat")]
    public double Lat { get; set; }

    [InverseProperty("Student")]
    public virtual ICollection<Enrollment> Enrollments { get; set; } = new List<Enrollment>();

    [InverseProperty("Student")]
    public virtual Profile? Profile { get; set; }
}
