const Item = require("./item");

class ItemInfo extends Item {
    
    constructor(
        id, 
        title,
        price,
        currency_id,
        picture,
        condition,
        free_shipping,
        city,
        sold_quantity,
        description,
        category_id
    ) {
        super(
            id, 
            title,
            price,
            currency_id,
            picture,
            condition,
            free_shipping,
            city
        );
        this.sold_quantity = sold_quantity;
        this.description = description;
        this.category_id = category_id;
    }
}

module.exports = ItemInfo;