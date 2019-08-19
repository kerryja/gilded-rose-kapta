// create item class
// sell_in value: # of days to sell the item
// quality value: how valuable the item is
// at the end of each day, system lowers both values for each item

// once sell_in days is < 0 quality degrades twice as fast
// quality is never negative
// "aged brie" increases in quality the older it gets
// quality can never reach more than 50
// "sulfuras" never has to be sold, nor does it decrease in quality - legendary item, quality stays at 80
// "backstage passes" increase in quality as it's sell_in value decreases quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or
// less but quality drops to 0 after the concert
// conjured items degrade in quality twice as fast as normal items

class Item {
  constructor(name, sell_in, quality) {
    this.name = name;
    this.sell_in = sell_in;
    this.quality =
      name === "sulfuras" ? 80 : Math.max(Math.min(quality, 50), 0);
  }

  updateDays() {
    this.sell_in--;
  }

  updateQuality() {
    let quality = this.quality;
    let name = this.name;
    let sell_in = this.sell_in;
    if (name === "agedBrie") {
      quality++;
    } else if (name === "backstagePass") {
      if (sell_in < 0) {
        quality = 0;
      } else if (sell_in <= 5) {
        quality += 3;
      } else if (sell_in <= 10) {
        quality += 2;
      }
    } else if (name === "conjured") {
      quality -= 2;
    } else {
      if (sell_in < 0) {
        quality -= 2;
      } else {
        quality--;
      }
    }
    this.quality =
      name === "sulfuras" ? 80 : Math.max(Math.min(quality, 50), 0);
    this.sell_in = sell_in;
    this.name = name;
  }
  updateInventory() {
    this.updateDays();
    this.updateQuality();
  }
}

const agedBrie = new Item("agedBrie", 20, 25);
const sulfuras = new Item("sulfuras", 10, 80);
const backstagePass = new Item("backstagePass", 15, 40);
const conjured = new Item("conjured", 10, 50);

// console.log(conjured);
// conjured.updateInventory();
// console.log(conjured);

// console.log(agedBrie);
// agedBrie.updateInventory();
// console.log(agedBrie);

for (let i = 0; i < 20; i++) {
  console.log(backstagePass);
  backstagePass.updateInventory();
  console.log(backstagePass);
}
