import axios from 'axios'

const axiosClient = axios.create({
    baseURL:'https://api.ezfrontend.com/',
    headers:{
        'Content-Type': 'application/json',
    },
})

//Interceptors
//Add a request interceptor
axiosClient.interceptors.request.use(function(config){
    return config;
}, function(error){
    return Promise.reject(error);
})

//Add a reponse interceptor
axiosClient.interceptors.response.use(function(response){
    return response.data;
}, function(error){
    return Promise.reject(error)
})

export default axiosClient;