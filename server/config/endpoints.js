const endpoints = {
    search:{
        baseUrl: "https://api.mercadolibre.com/sites/MLA/search",
        timeout: 5000
    },
    items:{
        baseUrl:"https://api.mercadolibre.com/items",
        timeout: 5000
    },
    categories:{
        baseUrl:"https://api.mercadolibre.com/categories",
        timeout: 5000
    }
}
module.exports = endpoints;