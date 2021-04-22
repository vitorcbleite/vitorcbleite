package br.com.oracle.java.fundamentals.vitorLeite;

public class Resolution05_1 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		String str = "Vítor Leite is writing this code\n\n\n",
				custName = "John Myers", 
				str2 = " wanna buy this ",
				itemDesc = "blue shirt";
		
		String msg = new String();
		msg = custName+str2+itemDesc;
		System.out.println(str+msg);
		str2 = " wanna buy this ";
		double price = 04.33, tax = 4.3, total;
		
		//Conditionals Section (05-1)
		int quantity = 5, stock = 13;
		if(quantity<=stock) {
			if(quantity>1) {
				str2 = " wanna buy theese ";
				itemDesc += "s";
				msg = custName+str2+quantity+" "+itemDesc;
				System.out.println("\n"+msg);
				total = (quantity * price) * (1-(tax/100));
				System.out.println("Total cost with tax is US$ "+ total);
			}
		} else {
			System.out.println("\nWe're sorry to inform that\nThe product "+itemDesc+" is out of stock."+(stock>0?"\nThere are only "+stock+" available":"" ));
		}
		
		
	}

}
