const Price = require("./price");

class Item {
    constructor(
        id, 
        title,
        price,
        currency_id,
        picture,
        condition,
        free_shipping,
        city
    ) {
      this.id = id;
      this.title= title;
      this.price = new Price(currency_id, price);
      this.picture = picture,
      this.condition = condition,
      this.free_shipping = free_shipping,
      this.city = city
    }
}

module.exports = Item;