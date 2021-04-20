package com.stefanini.stefaninihackaton.java.vitorleite.exercicio04;

import java.util.Scanner;

class Exercicio04VitorLeite {

	public static void main(String[] args) {
		/*Crie um algortimo utilizando os recursos que aprendemos nas
		 * aulas anteriores para dizer se uma determinada palavra
		 * � um palindromo ou n�o.*/
		
		Scanner sc = new Scanner(System.in);
        
        System.out.println("Digite uma palavra ou frase para teste do palindromo: ");
        String entrada = sc.nextLine();
        System.out.println("Voc� digitou: "+entrada
        		+"\npara o teste do palindromo.");
        sc.close();
        
        
        StringBuilder palindromo = new StringBuilder();
        palindromo.append(entrada.replaceAll(" ", "").toLowerCase());
        palindromo.reverse();
        
        if(entrada.replaceAll(" ", "").toLowerCase().equals(palindromo.toString())) {
          System.out.println("Que � um pal�ndromo!");
        }
        else {
          System.out.println("Que n�o � um pal�ndromo! ");
          
        }
        

	}

}
