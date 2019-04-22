import axios from "axios";
import * as globalHelper from "../services/serviceHelper";
import { faFontAwesomeLogoFull, faLevelUpAlt } from "@fortawesome/free-solid-svg-icons";

const logInUser = payload => {

    const config = {
        method: "POST",
       //url: `http://sabiobootcampapi.azurewebsites.net/api/users/login`,
        url:`https://localhost:50001/api/users/login`,
        data: payload,
        withCredentials: true,
        crossdomain: true,
        headers: {
            "Content-Type": "application/json"
        }
    };

    return axios(config)
        .then(globalHelper.onGlobalSuccess)
        .catch(globalHelper.onGlobalError);
};


const registerUser = payload => {

    const config = {
        method: "POST",
        url: `http://sabiobootcampapi.azurewebsites.net/api/users/register`,
        data: payload,
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

const currentUser = () => {

    const config = {
        method: "GET",
        url: `http://sabiobootcampapi.azurewebsites.net/api/tests/auth/current`,
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

const currentUserId = id => {
    const config = {
        method: "GET",
        url: `http://sabiobootcampapi.azurewebsites.net/api/users/${id}`,
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

const logoutUser = () => {

    const config = {
        method: "GET",
        url: `http://sabiobootcampapi.azurewebsites.net/api/users/logout`,
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

const allUsers = () => {

    const config = {
        method: "GET",
        url: `http://sabiobootcampapi.azurewebsites.net/api/people/0/9`,
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

export {
    logInUser,
    registerUser,
    currentUser,
    currentUserId,
    logoutUser,
    allUsers,
   
}; // export all your calls here

// if you had three functions to export 
// export { logIn, register, thirdFunction }
