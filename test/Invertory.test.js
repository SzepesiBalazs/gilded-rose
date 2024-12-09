import AgedBrie from "../src/AgedBrie";
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
});
