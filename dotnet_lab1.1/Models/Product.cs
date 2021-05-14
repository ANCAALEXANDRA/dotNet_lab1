using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace dotnet_lab1._1.Models
{
    public class Product
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [MinLength(3)]
        public string Type { get; set; }

        [Range(10, Double.MaxValue)]
        public double Price { get; set; }
        public Boolean WithBoots { get; set; }
    }
}
