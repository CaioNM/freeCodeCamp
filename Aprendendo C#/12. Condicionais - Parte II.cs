using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

// Condicionais e Comparativos
class Program {  
  public static void Main (string[] args) {
    Console.WriteLine("O maior número é " + GetMax(200,200));
    Console.ReadLine();
  }

  //Criando uma função
  static int GetMax(int num, int num2){
    int resultado;
    if (num>num2){
      resultado = num;
    } else if(num2>num){
      resultado = num2;
    }else{
      resultado = num;
    }
    return resultado;
  }
}