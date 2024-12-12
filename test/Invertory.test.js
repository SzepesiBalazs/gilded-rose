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

    inventory.addItem(chocolate)

    inventory.currentDate = moment().add(3, "days").format("YYYY-MM-DD");

    inventory.handleItems()

    expect(chocolate.quality).toBe(56);
  });
});

//add new item chocolate and calculate quality differently
//chocolate decreases in quality by 2 in every 3 days
//test case quality should be 58 on inicialization
//test case 2, quality should be 56 after 3 days passes
//test case 3, quality should be 56 after 5 days passes
//test case 4, quality should be 54 after 6 days passes
