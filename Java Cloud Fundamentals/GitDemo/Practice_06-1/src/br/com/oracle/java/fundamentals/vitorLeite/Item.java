package br.com.oracle.java.fundamentals.vitorLeite;

public class Item {
	private int id, quantity;
	private String desc;
	private double price;
	
	
	public Item() {
		super();
	}
	public Item(String desc, double price) {
		super();
		this.desc = desc;
		this.price = price;
	}
	public Item(String desc) {
		super();
		this.desc = desc;
	}
	/**
	 * @return the id
	 */
	int getId() {
		return id;
	}
	/**
	 * @param id the id to set
	 */
	void setId(int id) {
		this.id = id;
	}
	/**
	 * @return the quantity
	 */
	int getQuantity() {
		return quantity;
	}
	/**
	 * @param quantity the quantity to set
	 */
	void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	/**
	 * @return the desc
	 */
	String getDesc() {
		return desc;
	}
	/**
	 * @param desc the desc to set
	 */
	void setDesc(String desc) {
		this.desc = desc;
	}
	/**
	 * @return the price
	 */
	double getPrice() {
		return price;
	}
	/**
	 * @param price the price to set
	 */
	void setPrice(double price) {
		this.price = price;
	}
}
