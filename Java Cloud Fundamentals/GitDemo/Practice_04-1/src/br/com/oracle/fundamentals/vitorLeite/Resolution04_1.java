package br.com.oracle.fundamentals.vitorLeite;

public class Resolution04_1 {

	public static void main(String[] args) {
		//Strings Section (04-1)
		String str = "Vítor Leite is writing this code\n\n\n",
				custName = "John Myers", 
				str2 = " wanna buy this ",
				itemDesc = "blue shirt";
		String msg = new String();
		msg = custName+str2+itemDesc;
		System.out.println(str+msg);
		
		//Numbers Section (04-2)
		double price = 14.33, tax = 8.7, total;
		int quantity = 7;
		str2 = " wanna buy theese ";
		msg = custName+str2+quantity+" "+itemDesc+"s";
		System.out.println(msg);
		total = (quantity * price) * (1-(tax/100));
		System.out.println("Total cost with tax is US$ "+(float) total);
		
	}

}
