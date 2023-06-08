import axios from "axios";

export const refreshTokens = async (request, res) => {
    console.log("HITY");
    // try {
    //     await axios.post("http://localhost:4000/users/refresh", undefined, {withCredentials: true});
    // } catch (err) {
    //     console.log("hit in refreshtoken func");
    //     console.log(err); 
    // }
    // const response = await axios.post("http://localhost:4000/users/refresh", undefined, {headers: {cookie: req.headers.cookie}});
    const response = await fetch("http://localhost:4000/users/refresh", {
        method: 'POST',
        headers: {'cookie': request.cookies},
    });
    if (!response.ok) {
        console.log("SFGSDFGSD");
        throw err
    } else {
        console.log("YAY");
        const cookies = response.headers['set-cookie'];
        console.log("NOOO1");
        request.headers.cookie = cookies;
        console.log("NOOO2");
        console.log(res);
        res.cookies.set('access', "yippie");
        console.log("NOOO3");
    }
    // const data = await response.json();
    // const cookies = response.headers['set-cookie'];

    // req.headers.cookie = cookies;
    // res.setHeader('set-cookie', cookies);
}

// const handleRequest = async (refresh, res, request) => {
//     try {
//         console.log("HITTT");
//         return await request();
//     } catch (err) {
//         console.log(err);
//         // if(err?.response?.status === 401) {
//         //     await refreshTokens(req, res);
//         //     // console.log("hit");
//         //     return await request();
//         // }
//         // console.log("404 hit");
//         throw err
//     }
// }

// export const fetcherSSR = async (req, res, url) => {
//     try {
//         const request = () => axios.get(url, {headers: {cookie: refresh}});
//         const {data} = await handleRequest(refresh, res, request);
//         return [null, data]
//     } catch (err) {
//         return [err, null]
//     }
// };


// const response = await fetch("http://localhost:4000/users/user", {
//     method: 'GET',
//     headers: {'cookie': request.cookies},
// });


const handleRequest = async (request, res, requestData) => {
    try {
        console.log("HITTT");
        const response = await requestData();
        const data = await response.json();
        console.log("DATA:",data);
        if (!response.ok) {
            await refreshTokens(request, res);
            console.log("hit");
            const newResponse = await requestData();
            const newData = await newResponse.json();
            if (!newResponse.ok) {
                console.log("NOOO");
                throw err
            } else {
                console.log("NEW DATA:",newData);
                return newData
            }
        } else {
            return data
        }
    } catch (err) {
        // if(err?.response?.status === 401) {
        //     await refreshTokens(request, res);
        //     console.log("hit");
        //     return await requestData();
        // }
        console.log("404 hit");
        throw err
    }
}

export const fetcherSSR = async (request, res) => {
    try {
        const requestData = () => fetch("http://localhost:4000/users/user", {
            method: 'GET',
            headers: {'cookie': request.cookies},
        });
        const data = await handleRequest(request, res, requestData);
        return [null, data]
    } catch (err) {
        return [err, null]
    }
};

// const data = await response.json();
//     console.log('HEY RESPONSE:',data);