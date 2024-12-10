import AgedBrie from "../src/AgedBrie";
import Inventory from "../src/Inventory";
import Item from "../src/Item";

describe("Gilded-rose", () => {
  test("Aged brie is instance of Item", () => {
    const agedBrie = new AgedBrie();

    expect(agedBrie instanceof Item).toBe(true);
  });
  
  test("Aged brie should have a quality property", () => {
    const agedBrie = new AgedBrie();

    expect(agedBrie).toHaveProperty("quality");
  });
  
  test("Aged brie quality should be 10", () => {
    const agedBrie = new AgedBrie();

    expect(agedBrie.quality).toBe(10);
  });
  
  test("Inventory should have one item", () => {
    const agedBrie = new AgedBrie();
    const inventory = new Inventory()

    inventory.addItem(agedBrie)

    console.log('items', inventory.items)
    expect(inventory.items.length).toBe(1);
  });
});
