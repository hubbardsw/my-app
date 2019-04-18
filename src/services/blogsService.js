import axios from "axios";
import * as globalHelper from "../services/serviceHelper";

const getRecentBlogs = () => {

    const config = {
        method: "GET",
        url: `http://sabiobootcampapi.azurewebsites.net/api/blogs/feed/1/5`,
        //url:`https://localhost:50001/api/blogs`,
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

        export{
        getRecentBlogs
        }

    