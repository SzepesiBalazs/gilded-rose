import AgedBrie from "../src/AgedBrie";
import Inventory from "../src/Inventory";
import Item from "../src/Item";
import moment from "moment";
import Sulphuras from "../src/Sulphuras";

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
});
