using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


class Program {
  public static void Main (string[] args) {

    // Pegando informaçoes do usuario
      // Nesse caso, é usado "Console.Write" pois o "WriteLine", pula uma linha quando a mensagem é enviada, esse deixa no final da mensagem
    Console.Write("Insira seu nome, por favor: ");
    string nome = Console.ReadLine();
    Console.Write("Agora sua idade, por favor: ");
    string idade = Console.ReadLine();
    Console.WriteLine("Opa " + nome + ", tudo certo? Então você tem " + idade + " anos, certo?");
    
    
    Console.WriteLine("Insira seu nome, por favor: ");
    string nome2 = Console.ReadLine();
    Console.WriteLine("Opa " + nome2 + ", tudo certo?");
    
    Console.ReadLine();
  }
}
