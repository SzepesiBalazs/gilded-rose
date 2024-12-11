import Item from "./Item";

export default class Sulphuras extends Item {
  constructor(quality = 1000, goodForDays = 105, rarity = "legendary") {
    super(quality, goodForDays, rarity);
  }
}
