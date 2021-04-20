package com.stefanini.stefaninihackaton.java.vitorleite.exercicio04;

import java.util.Scanner;

class Exercicio04VitorLeite {

	public static void main(String[] args) {
		/*Crie um algortimo utilizando os recursos que aprendemos nas
		 * aulas anteriores para dizer se uma determinada palavra
		 * é um palindromo ou não.*/
		
		Scanner sc = new Scanner(System.in);
        
        System.out.println("Digite uma palavra ou frase para teste do palindromo: ");
        String entrada = sc.nextLine();
        System.out.println("Você digitou: "+entrada
        		+"\npara o teste do palindromo.");
        sc.close();
        
        
        StringBuilder palindromo = new StringBuilder();
        palindromo.append(entrada.replaceAll(" ", "").toLowerCase());
        palindromo.reverse();
        
        if(entrada.replaceAll(" ", "").toLowerCase().equals(palindromo.toString())) {
          System.out.println("Que é um palíndromo!");
        }
        else {
          System.out.println("Que não é um palíndromo! ");
          
        }
        

	}

}
