import axios from "axios";
import getBackendPort from "../config/serverEndpoints";
import {endpoints} from "../config/endpoints";

const axiosInstance = axios.create({
    baseURL: getBackendPort(),
    timeout: endpoints.search.timeout,
    headers: {'X-Custom-Header': 'foobar'}
});

export const searchProduct = async(id) =>{
    const response = await axiosInstance.get(`${endpoints.search.baseUrl}/${id}`);
    if(response.data.statusCode === 500){
        return {
            hasError: {
                statusCode: response.data.statusCode,
                message: response.data.message
            },
            item: null,
            breadcrumb: null
        }
    }else{
        return{
            hasError: null,
            item: response.data.item.item,
            breadcrumb: response.data.breadcrumbData
        }
    }
}

export const searchProducts = async(query) =>{
    const response = await axiosInstance.get(`${endpoints.search.baseUrl}`, { params: { q:query } });
    if(response.data.statusCode === 500){
        return {
            hasError: {
                statusCode: response.data.statusCode,
                message: response.data.message
            },
            search: null,
            breadcrumb: null
        }
    }else{
        return{
            hasError: null,
            search: response.data.search,
            breadcrumb: response.data.breadcrumbData
        }
    }
}