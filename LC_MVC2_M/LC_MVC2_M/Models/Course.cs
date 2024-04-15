using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace LC_MVC2_M.Models;

public partial class Course
{
    [Key]
    public string Id { get; set; } = null!;

    public string Name { get; set; } = null!;

    public int CreditHours { get; set; }

    public string Created { get; set; } = null!;

    [InverseProperty("Course")]
    public virtual ICollection<Enrollment> Enrollments { get; set; } = new List<Enrollment>();
}
