package br.com.oracle.java.fundamentals.vitorLeite;

public class ShoppingCart {
	
	public static void main(String[] args) {
		Item itemA = new Item("Thor's Hammer Collectables Ed");
		Item itemB = new Item("Hullk's Gaunglets Collectables Ed");
//		itemA = itemB;
		System.out.println("Item A: "+itemA.getDesc()
				+"\nItem B: "+itemB.getDesc());
	}
}
