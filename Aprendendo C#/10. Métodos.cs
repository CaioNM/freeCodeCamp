using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


class Program {  
  public static void Main (string[] args) {
    // Chamando método
    DizerOi("Caio", 20);
    Console.ReadLine();
  }

  // Criando métodos em C#:
    // Primeiro, para criar um método, é necessario escrever "static" e depois o tipo de retorno da informação:
  static void DizerOi(string nome, int age){
    Console.WriteLine("Oi, " + nome + "você tem " + age + "anos");
  }
}
