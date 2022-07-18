using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


class Program {
  public static void Main (string[] args) {
    // Print simples, uma constante, pra ser string, so colocar entre aspas duplas ("")
    Console.Write("Caio Nunes de Moura");
    Console.Write("\n--------------------------------\n");
    
    // Quebra de linha padrão, como na maioria das linguagens, só colocar o "\n"
    Console.Write("Caio\nMoura");
    Console.Write("\n--------------------------------\n");

    // Para colocar as aspas em algum texto sem quebrar a formatação, basta colocar uma contra barra(\)
    Console.Write("Caio \"Moura\"");
    Console.Write("\n--------------------------------\n");

    // Definindo variavel
    string nomeCompleto = "Caio Nunes de Moura";
    Console.Write(nomeCompleto);
    Console.Write("\n--------------------------------\n");

    // Contatenação simples
    Console.Write(nomeCompleto + "eh mt gatao");
    Console.Write("\n--------------------------------\n");

    // Alguns métodos
    Console.Write(nomeCompleto.Length);
    Console.Write(nomeCompleto.ToUpper());
    Console.Write(nomeCompleto.ToLower());
    Console.Write("\n--------------------------------\n");

    // Encontra se tem alguma coisa na lista e é case sensitive
    Console.Write(nomeCompleto.Contains("Nunes"));
    Console.Write("\n--------------------------------\n");

    // Mostra o caractere pela indentação, contagem começa em 0
    Console.Write(nomeCompleto[0]);
      // Obs.: Esse metodo ignora os espaços, o caractere 5 é um espaço mas ele printa N
    Console.Write(nomeCompleto[5]);
    Console.Write("\n--------------------------------\n");

    // Mostra o index do caractere
    Console.Write(nomeCompleto.IndexOf("de"));
      // Se não houver o caractere em questão na string, ele printa "-1"
    Console.Write(nomeCompleto.IndexOf("z"));
    Console.Write("\n--------------------------------\n");

    // Mostra até o final da substring começando pelo index especificado, também é possível delimitar a quantidade de caracteres colocando uma virgula depois e o número
    Console.Write(nomeCompleto.Substring(14,3));
    Console.ReadLine();
  }
}
