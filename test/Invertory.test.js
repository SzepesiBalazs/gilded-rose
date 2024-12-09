import AgedBrie from "../src/AgedBrie";
import Item from "../src/Item";

describe("Gilded-rose", () => {
  test("Aged brie is instance of Item", () => {
    const agedBrie = new AgedBrie();

    expect(agedBrie instanceof Item).toBe(true);
  });
});
