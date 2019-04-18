import axios from "axios";
import * as globalHelper from "./serviceHelper";

const getPagination = (pageNumber,pageSize) => {

    const config = {
        method: "GET",
        //url: `http://sabiobootcampapi.azurewebsites.net/api/people/${pageNumber}/${pageSize}`,
        url: `https://localhost:50001/api/people/${pageNumber}/${pageSize}`,
        withCredentials: true,
        crossdomain: true,
        headers: {
            "Content-Type": "application/json"
        }
    };

    return axios(config)
        .then(globalHelper.onGlobalSuccess)
        .catch(globalHelper.onGlobalError)
};

const getProfileById = id =>{

    const config = {
        method: "GET",
        url: `http://sabiobootcampapi.azurewebsites.net/api/people/${id}`,
        withCredentials: true,
        crossdomain: true,
        headers: {
            "Content-Type": "application/json"
        }
    };

    return axios(config)
        .then(globalHelper.onGlobalSuccess)
        .catch(globalHelper.onGlobalError)
}

const updateProfileById = (id, payload) =>{

    const config = {
        method: "PUT",
        //url: `http://sabiobootcampapi.azurewebsites.net/api/people/${id}`,
        url: `https://localhost:50001/api/people/${id}`,
        data:payload,
        withCredentials: true,
        crossdomain: true,
        headers: {
            "Content-Type": "application/json"
        }
    }; 
 
    return axios(config)
        .then((res)=>{ return {res,payload} })
        .catch(globalHelper.onGlobalError)
 }

 const searchByInput = search =>{

    const config = {
        method: "GET",
        url: `http://sabiobootcampapi.azurewebsites.net/api/people/search/0/6?q=${search}`,
        withCredentials: true,
        crossdomain: true,
        headers: {
            "Content-Type": "application/json"
        }
    };
 
    return axios(config)
        .then(globalHelper.onGlobalSuccess)
        .catch(globalHelper.onGlobalError)
 }
 export {
    getPagination,
    getProfileById,
    updateProfileById,
    searchByInput
}