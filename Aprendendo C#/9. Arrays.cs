using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


class Program {
  public static void Main (string[] args) {

    //Criando Listas ou Arrays
    //Criando um Array de números inteiros
      // Primeiro, define-se o tipo de dados que serão armazenados, seguido de colchetes ("[]"), pelo nome que a lista terá e finalmente, seus valores dentro de chaves ("{}")
    int [] numerosSorte = {1, 2, 3, 5, 7, 11, 13};

    // Obs.: Não foi mostrado no tutorial, mas essa é uma das maneiras de mostrar todos os elementos de uma lista
    Console.WriteLine("[{0}]", string.Join(", ", numerosSorte));
    // Mostrando um item pelo seu index, lembrando que a contagem começa em 0
    Console.WriteLine(numerosSorte[5]);

    // Alterando valores, com base no index
    Console.WriteLine(numerosSorte[2]);
    numerosSorte[2] = 2;
    Console.WriteLine(numerosSorte[2]);

    // Criando Arrays do tipo String:
      // Segue o mesmo raciocínio
        // E se nao soubermos quantos elementos serão armazenados? Nesse caso, a lista é definida por uma igualdade chamada "new string" (nesse caso, por ser de string), seguido do número de elementos que esse array suportará entre colchetes, como abaixo:
    string[] amigos = new string[5];
    amigos[0] = "Bebel";
    amigos[1] = "Rafael";
    Console.Write(amigos[0]);
    Console.WriteLine("[{0}]", string.Join(", ", amigos));
    
    
    
    Console.ReadLine();
  }
}
