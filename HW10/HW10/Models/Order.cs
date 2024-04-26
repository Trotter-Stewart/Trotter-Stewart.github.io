using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace HW10.Models;

public partial class Order
{
    [Key]
    [Column("ID")]
    public string Id { get; set; } = null!;

    [Column("nCogs")]
    public int NCogs { get; set; }

    [Column("nGears")]
    public int NGears { get; set; }

    [Column("subtotal")]
    public double Subtotal { get; set; }

    [Column("level")]
    public int Level { get; set; }
    
    public double CalSubtotal()
    {
        Subtotal = 100 * this.NCogs + 200 * this.NGears;
        return Subtotal;
    }

    public int CalSubtotalLevel()
    {
        if(this.Subtotal>1000)
        {
            this.Level = 1;
        }
        else if(this.Subtotal>=5000)
        {
            this.Level= 2;
        }
        else
        {
            this.Level = 3;
        }
        return this.Level;
    }
}
