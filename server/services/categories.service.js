const axios = require("axios");
const endpoints = require("../config/endpoints");
const Crumb = require("../models/crumb");

const getCategoryInfo = async(id) => {
    try {
        const response = await axios.get(`${endpoints.categories.baseUrl}/${id}`);
        return response;
    } catch (e) {
        return e;
    }
}

const findCategory = (data) => {
    let findInFilters;
    try{
        data.filters.forEach((x)=>{
            if(x.id === "category"){
                findInFilters = x.values[0].id;
            }
        });

        if(!findInFilters){
            data.available_filters.forEach((x)=>{
                if(x.id === "category"){
                    findInFilters = getMaxResultInCategory(x.values).id;
                }
            });
        }

        return findInFilters;
    }catch(e){
        return e;
    }
}

const getMaxResultInCategory = (categoriesArray) =>{
    var max = Math.max.apply(Math, categoriesArray.map(elem => elem.results));
    return categoriesArray.find((x)=>{
        return x.results === max;
    });
}

exports.getCategoryInfo = getCategoryInfo;
exports.findCategory = findCategory;

