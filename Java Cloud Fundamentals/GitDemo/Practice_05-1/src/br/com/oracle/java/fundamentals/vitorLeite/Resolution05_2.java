package br.com.oracle.java.fundamentals.vitorLeite;

public class Resolution05_2 {
	boolean isEligible;
	public static void main(String[] args) {
		Resolution05_2 obj = new Resolution05_2();
		System.out.println(obj.isEligible);
		String msg = "The client wanna purchase", strItem=" Item";
		String[] itensDesc = {"shirt","jeans","shoe","backpack"};
//		String[] itensDesc = {"shirt"};
		if(itensDesc.length>1) {
			strItem=" Items";
			msg +=" "+itensDesc.length+strItem;
		} else {msg +=" 1"+strItem; ;}
		System.out.println(msg+"\n"+strItem+" Purchased:");
		for(String item : itensDesc) {
			System.out.println(item);
		}
		System.out.println("If you try to put the array at index 4 it will cause an exception of "
				+ "ArrayOutOfBounds cause the index 4 is the fifth position of the array \nwhich "
				+ "was created with only 4 members, so without a 5th member, i=4 throws ArrayOutOfBounds...");
		
		
		int a = 10, b = 14;
		System.out.println(a+b);
		System.out.println(""+a+b);
		
	}
}
