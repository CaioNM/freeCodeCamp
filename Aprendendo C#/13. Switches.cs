using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

// Aprendendo Switches
class Program {  
  public static void Main (string[] args) {
    //Chamando a fução
    Console.WriteLine(Semana(1));
    Console.ReadLine();
  }

  //Criando a função
    // Essa função recebe um dia e troca um número por um nome e retorna esse nome
      // Nome corresponde ao dia da semana
        // a Contagem tecnicamente começa de 0 mas, eu coloquei um "-1" para que domingo seja o dia 1, ao invez do dia 0
  static string Semana(int dia){
    string nome;
    
    switch(dia-1){
      case 0:
        nome = "Domingo";
        break;
      case 1:
        nome = "Segunda";
        break;
      case 2:
        nome = "Terça";
        break;
      case 3:
        nome = "Quarta";
        break;
      case 4:
        nome = "Quinta";
        break;
      case 5:
        nome = "Sexta";
        break;
      case 6:
        nome = "Sábado";
        break;
      default:
        nome = "Número inválido";
        break;
    }
  
    return nome;
  }
  
}