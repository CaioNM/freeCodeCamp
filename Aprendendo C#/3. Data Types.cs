using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


class Program {
  public static void Main (string[] args) {

    /* Settando variaveis */
      /* Dentre os tipos de variaveis em C#, temos o "String" que armazena conjuntos de letras ou palavras, tendo que ser definida por aspas duplas ("") e o "Char", que armazena um único caractere, sendo definido por aspas simples (''). */
    string frase = "Caio Moura";
    char nota = 'S';

      /* "int", como sempre, são números inteiros */
    int idade = 19;

      /* Em C# existem 3 formas de se representar números decimais, sendo elas, "Float", "Double" e "Decimal", sendo Float o menos preciso e Decimal, o mais, usado em situações que a precisao com os números decimais importa muito porém, em grande parte dos casos, o Double é o suficiente.
        ex.:
    float, double, decimal pi = 3.14; */
    double pi = 3.14;

      /* Para definir um valor booleano, usasse "bool", definindo "true" ou "false", sem letra maiuscula */
    bool masculino = true;

    
    Console.ReadLine();
  }
}
