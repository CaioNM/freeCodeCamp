using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


class Program {
  public static void Main (string[] args) {

    // Trabalhando com números:
      // Imprimindo na tela um númro simples
    Console.WriteLine(-9.5715);

      // Operações matemáticas básicas
    Console.WriteLine(5+8);
    Console.WriteLine(5-8);
    Console.WriteLine(5*8);
    Console.WriteLine(5/8);

      // Equações:
    // C# Segue o padrão de prioridade de uma equação, mas também pode ser manipulado com parenteses, chaves etc.
    Console.WriteLine(4+2*3);
    Console.WriteLine((4+2)*3);

    // Usando números decimais
    Console.WriteLine(5.0 + 8.1);
    Console.WriteLine(5 + 8.1);

    // Mesmo que o resultado não seja um número inteiro, C# vai passar o resultado com o mesmo tipo dos parametros, ou seja, resultado decimal, com calculo em decimais, para ambos, usa-se o double
    Console.WriteLine(5/8);
    Console.WriteLine(5/8.0);

  // Declarando variável
    int num = 6;
    Console.WriteLine(num);

  // Aumentando e Diminuindo 1
    num++;
    num--;

  // Teste Booleando (True ou False)
    Console.WriteLine(num<9);

  // Bibliotecas
    // Modulo do numero (Valor absoluto)
    Console.WriteLine(Math.Abs(-40));

    // Potencia, nesse caso 3^2
    Console.WriteLine(Math.Pow(3,2));

    // Raiz Quadrada
    Console.WriteLine(Math.Sqrt(49));

    // Maior e Menor, comparativo entre números
    Console.WriteLine(Math.Max(4, 145));
    Console.WriteLine(Math.Min(5,9));

    // Aproximação
    Console.WriteLine(Math.Round(2.8175));
    
    Console.ReadLine();
  }
}
