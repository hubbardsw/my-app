import axios from "axios";

let logInUser = (payload, onSuccess, onError) => {

    const config = {
        method: "POST",
        url: `http://sabiobootcampapi.azurewebsites.net/api/users/login`,
        data: payload,
        withCredentials: true,
        crossdomain: true,
        headers: {
            "Content-Type": "application/json"
        }
    };

    return axios(config)
        .then(onSuccess)
        .catch(onError);
};


let registerUser = (payload, onSuccess, onError) => {

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
        .then(onSuccess)
        .catch(onError)
};



let currentUser = (onSuccess, onError) => {

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
        .then(onSuccess)
        .catch(onError)
};

let currentUserId = (id, onSuccess, onError) => {
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
        .then(onSuccess)
        .catch(onError)

};

let logoutUser = (onSuccess, onError) => {

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
        .then(onSuccess)
        .catch(onError)
};

let allUsers = (onSuccess, onError) => {

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
        .then(onSuccess)
        .catch(onError)
};

let getPagination = (totalCount,onSuccess, onError) => {

    const config = {
        method: "GET",
        url: `http://sabiobootcampapi.azurewebsites.net/api/people/0/${totalCount}`,
        withCredentials: true,
        crossdomain: true,
        headers: {
            "Content-Type": "application/json"
        }
    };

    return axios(config)
        .then(onSuccess)
        .catch(onError)
};

export {
    logInUser,
    registerUser,
    currentUser,
    currentUserId,
    logoutUser,
    allUsers,
    getPagination
}; // export all your calls here

// if you had three functions to export 
// export { logIn, register, thirdFunction }