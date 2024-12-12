import AgedBrie from "../src/AgedBrie";
import Inventory from "../src/Inventory";
import Item from "../src/Item";
import moment from "moment";
import Sulphuras from "../src/Sulphuras";
import Chocolate from "../src/Chocolate";

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
    const inventory = new Inventory();

    inventory.addItem(agedBrie);

    expect(inventory.items.length).toBe(1);
  });

  test("Inventory should have zero items after expired", () => {
    const agedBrie = new AgedBrie();
    const inventory = new Inventory();

    inventory.addItem(agedBrie);

    inventory.currentDate = moment().add(101, "days").format("YYYY-MM-DD");

    inventory.removeExpiredItems();

    expect(inventory.items.length).toBe(0);
  });

  test("Inventory should have one items before expires", () => {
    const agedBrie = new AgedBrie();
    const inventory = new Inventory();

    inventory.addItem(agedBrie);

    inventory.currentDate = moment().add(99, "days").format("YYYY-MM-DD");

    inventory.removeExpiredItems();

    expect(inventory.items.length).toBe(1);
  });

  test("Sulphuras should have 100 quality", () => {
    const agedBrie = new AgedBrie();
    const sulphuras = new Sulphuras();

    expect(sulphuras.quality).toBe(1000);
  });

  test("Sulphuras should have legendary rarity", () => {
    const sulphuras = new Sulphuras();

    expect(sulphuras.rarity).toBe("legendary");
  });

  test("Inventory should have zero items after expired", () => {
    const agedBrie = new AgedBrie();
    const sulphuras = new Sulphuras();
    const inventory = new Inventory();

    inventory.addItem(agedBrie);
    inventory.addItem(sulphuras);

    inventory.currentDate = moment().add(100, "days").format("YYYY-MM-DD");

    inventory.removeExpiredItems();

    expect(inventory.items.length).toBe(1);
    expect(inventory.items[0] instanceof Sulphuras).toBe(true);
  });

  test("Aged Brie should have the quality of 10", () => {
    const agedBrie = new AgedBrie();

    expect(agedBrie.quality).toBe(10);
  });

  test("Aged Brie should have the quality of 12, 9 days before expire date", () => {
    const agedBrie = new AgedBrie();
    const inventory = new Inventory();

    inventory.addItem(agedBrie);

    inventory.currentDate = moment().add(91, "days").format("YYYY-MM-DD");

    inventory.handleItems();

    expect(agedBrie.quality).toBe(12);
  });

  test("Aged Brie should have the quality of 13, 4 days before expire date", () => {
    const agedBrie = new AgedBrie();
    const inventory = new Inventory();

    inventory.addItem(agedBrie);

    inventory.currentDate = moment().add(96, "days").format("YYYY-MM-DD");

    inventory.handleItems();

    expect(agedBrie.quality).toBe(13);
  });

  test("Chocolate should have 58 quality on inicialization", () => {
    const chocolate = new Chocolate();

    expect(chocolate.quality).toBe(58);
  });

  test("Chocolate should have 56 quality 3 days after the initialization", () => {
    const chocolate = new Chocolate();
    const inventory = new Inventory();

    inventory.addItem(chocolate);

    inventory.currentDate = moment().add(3, "days").format("YYYY-MM-DD");

    inventory.handleItems();

    expect(chocolate.quality).toBe(56);
  });

  test("Chocolate should have 56 quality 5 days after the initialization", () => {
    const chocolate = new Chocolate();
    const inventory = new Inventory();

    inventory.addItem(chocolate);

    inventory.currentDate = moment().add(5, "days").format("YYYY-MM-DD");

    inventory.handleItems();

    expect(chocolate.quality).toBe(56);
  });

  test("Chocolate should have 54 quality 6 days after the initialization", () => {
    const chocolate = new Chocolate();
    const inventory = new Inventory();

    inventory.addItem(chocolate);

    inventory.currentDate = moment().add(6, "days").format("YYYY-MM-DD");

    inventory.handleItems();

    expect(chocolate.quality).toBe(54);
  });

  test("if chocolate has 0 quality, it should be automatically removed", () => {
    const chocolate = new Chocolate();
    const inventory = new Inventory();

    chocolate.quality = 0;

    inventory.addItem(chocolate);

    inventory.handleItems();

    expect(inventory.items[0] instanceof Chocolate).toBe(false);
    expect(inventory.items.length).toBe(0);
  });  
  
  test("if chocolate has 1 quality and it's instance should be true", () => {
    const chocolate = new Chocolate();
    const inventory = new Inventory();

    chocolate.quality = 1;

    inventory.addItem(chocolate);

    inventory.handleItems();

    expect(inventory.items[0] instanceof Chocolate).toBe(true);
  });
});
