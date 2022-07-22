using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


class Program {
  public static void Main (string[] args) {

    string cor, plural, algo;

    Console.Write("Insira uma cor: ");
    cor = Console.ReadLine();

    Console.Write("Insira um nome no plural: ");
    plural = Console.ReadLine();

    Console.Write("Insira algo que você ama: ");
    algo = Console.ReadLine();

    Console.WriteLine("\n----------------------------\n");
    Console.WriteLine("Rosas são " + cor + "s");
    Console.WriteLine(plural + " são azuis");
    Console.WriteLine("Eu amo " + algo);
    
    Console.ReadLine();
  }
}
