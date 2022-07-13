using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


class Program {
  public static void Main (string[] args) {
    /* Criando a primeira variavel em C# para alterar os valores*/
    /* Variavel string pro nome */
      /* Strings precisam ser decladaradas com aspas duplas (""), simples não funcionam ('')*/
    string nomePersonagem = "Elias";

    /* Variavel int pra idade */
      /* Existem esses dois modos, declarar na hora e depois */
    int idadePersonagem;
    idadePersonagem = 24;
    
    /*Criando uma histórinha*/
    Console.WriteLine("Havia um homem chamado Hananias");
    Console.WriteLine("Ele tinha 70 anos");
    Console.WriteLine("Ele gostava muito do nome Hananias");
    Console.WriteLine("Mas não gostava de ter 70 anos");

    Console.WriteLine("-------------------------------------------------");
    
    /*Aplicando as variaveis na história*/
    Console.WriteLine("Havia um homem chamado " + nomePersonagem);
    Console.WriteLine("Ele tinha " + idadePersonagem + " anos");

    /* Mudando o nome no meio da execução */
    nomePersonagem = "Rafael";
    
    Console.WriteLine("Ele gostava muito do nome " + nomePersonagem);
    Console.WriteLine("Mas não gostava de ter " + idadePersonagem + " anos");
    Console.ReadLine();
    /* Estudo pausado em "Data Types" - 30:06 */ 
    
  }
}
