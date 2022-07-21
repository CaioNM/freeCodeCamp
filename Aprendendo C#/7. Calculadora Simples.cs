using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


class Program {
  public static void Main (string[] args) {

    // Convertendo String em um Int
    int num = Convert.ToInt32("45");
    Console.Write(num + 10);

    Console.Write("Insira o primeiro número: ");
    int num1 = Convert.ToInt32(Console.ReadLine());
    Console.Write("Insira o segundo número: ");
    int num2 = Convert.ToInt32(Console.ReadLine());
    Console.WriteLine("----------------------------------");
    Console.WriteLine("Soma dos números: " + (num1+num2));
    Console.WriteLine("----------------------------------");

    Console.Write("Insira o primeiro número: ");
    double num3 = Convert.ToDouble(Console.ReadLine());
    Console.Write("Insira o segundo número: ");
    double num4 = Convert.ToDouble(Console.ReadLine());
    Console.WriteLine("----------------------------------");
    Console.WriteLine("Soma dos números: " + (num3+num4));
    Console.WriteLine("----------------------------------");
    
    Console.ReadLine();
  }
}
