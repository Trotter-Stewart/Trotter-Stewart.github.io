using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace LC_MVC2_M.Models;

[Index("CourseId", Name = "IX_Enrollments_CourseId")]
[Index("StudentId", Name = "IX_Enrollments_StudentId")]
public partial class Enrollment
{
    [Key]
    public int Id { get; set; }

    public string CourseId { get; set; } = null!;

    public string StudentId { get; set; } = null!;

    public double Grade { get; set; }

    public string LetterGrade { get; set; } = null!;

    public string Created { get; set; } = null!;

    [ForeignKey("CourseId")]
    [InverseProperty("Enrollments")]
    public virtual Course Course { get; set; } = null!;

    [ForeignKey("StudentId")]
    [InverseProperty("Enrollments")]
    public virtual Student Student { get; set; } = null!;
}
