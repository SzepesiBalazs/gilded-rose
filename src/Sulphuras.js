import Item from "./Item";

export default class Sulphuras extends Item {
  constructor(quality = 1000, goodForDays = Infinity, rarity = "legendary") {
    super(quality, goodForDays, rarity);
  }
}
