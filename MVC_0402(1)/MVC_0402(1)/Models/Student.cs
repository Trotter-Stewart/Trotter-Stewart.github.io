using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace MVC_0402_1_.Models;

[Table("students")]
public partial class Student
{
    [Key]
    public string Id { get; set; } = null!;

    public string Name { get; set; } = null!;

    public int Age { get; set; }

    public double Grade { get; set; }

    public string LetterGrade { get; set; } = null!;
}
