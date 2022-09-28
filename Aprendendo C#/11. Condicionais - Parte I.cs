using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

// Condicionais
class Program {  
  public static void Main (string[] args) {
    bool isMale = true;
    // Basicamente é igual a maioria das condicionais das outras linguagens de programação
    if (isMale){
      Console.WriteLine("Você é um homem");
    }else{
      Console.WriteLine("Você não é um homem");
    }

    //Criando uma condição mais complexa
      // Aproveitando pra usar o and e or
    bool isTall = true;
    if(isMale && isTall){
      Console.WriteLine("Você é um homem e mede mais de 1,77m");
    // Esse é diferente, o "!" antes da variável é o "Not" em C#
    }else if (isMale && !isTall){
      Console.WriteLine("Você é homem mas, não é alto")
    } else {
      Console.WriteLine("Você não é homem e/ou não é alto");
    }
    
    Console.ReadLine();
  }
}