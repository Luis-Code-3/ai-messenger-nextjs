import axios from "axios";

export const refreshTokens = async () => {
    // try {
    //     await axios.post("http://localhost:4000/users/refresh", undefined, {withCredentials: true});
    // } catch (err) {
    //     console.log("hit in refreshtoken func");
    //     console.log(err); 
    // }
    await axios.post("http://localhost:4000/users/refresh", undefined, {withCredentials: true});
}

const handleRequest = async (request) => {
    try {
        return await request();
    } catch (err) {
        if(err?.response?.status === 401) {
            await refreshTokens();
            // console.log("hit");
            return await request();
        }
        // console.log("404 hit");
        throw err
    }
}

export const fetcher = async (url) => {
    try {
        const request = () => axios.get(url, {withCredentials: true});
        const {data} = await handleRequest(request);
        return [null, data]
    } catch (err) {
        return [err, null]
    }
};