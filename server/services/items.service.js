const axios = require("axios");
const endpoints = require("../config/endpoints");
const Item = require("../models/item");
const ItemInfo = require("../models/itemInfo");

const conditions = {
    NEW: "Nuevo",
    USED: "Usado"
}

const max_items = 4;

const getItems = async(query) => {
    try {
        const response = await axios.get(endpoints.search.baseUrl, { params: { q: query } });
      return response;
    } catch (error) {
      return error;
    }
}

const getItem = async(id) =>{
    try{
        const itemData = await axios.get(`${endpoints.items.baseUrl}/${id}`);
        const itemDescription = await axios.get(`${endpoints.items.baseUrl}/${id}/description`);
        return {
            item: itemData.data,
            description: itemDescription.data
        };
    }catch(error){
        return error;
    }
} 


const adaptSearchResponse = (data, author) =>{
    return {
        author: author,
        categories: data.results.map(x=>{
            return x.category_id
        }),
        items: data.results.slice(0, max_items).map(x=>{
            return new Item(
                x.id,
                x.title,
                x.price,
                x.currency_id,
                x.thumbnail,
                (x.condition === "new") ? conditions.NEW : conditions.USED,
                x.shipping.free_shipping,
                x.address.state_name
            );
        })
    }
}

const adaptItemResponse = (data, author) => {
    try{
        return {
            author: author,
            item: new ItemInfo(
                data.item.id,
                data.item.title,
                data.item.price,
                data.item.currency_id,
                data.item.thumbnail,
                (data.item.condition === "new") ? conditions.NEW : conditions.USED,
                data.item.shipping.free_shipping,
                data.item.seller_address.city.name,
                data.item.sold_quantity,
                data.description.plain_text,
                data.item.category_id
            )
        }
    }catch(e){
        return e;
    }
}

exports.getItem = getItem;
exports.getItems = getItems;
exports.adaptSearchResponse = adaptSearchResponse;
exports.adaptItemResponse = adaptItemResponse;
