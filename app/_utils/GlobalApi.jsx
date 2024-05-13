import axios from 'axios';
const API_Key = process.env.NEXT_PUBLIC_STRAPI_API_KEY;

const axiosClient = axios.create({
    baseURL: 'http://localhost:1337/api',
    timeout: 1000,
    headers: {
        'Authorization': `Bearer ${API_Key}`
    }
});

function getCategories  () {
    return axiosClient.get('/categories?populate=*');
        
};

function getDoctors  () {
    return axiosClient.get('/doctors?populate=*');
        
};

function getDoctorsByCategory(category){
    return axiosClient.get(`/doctors?filters[category][Name][$eq]=${category}&populate=*`)
} 



function getDoctorsById  ( doctorId) {
    return axiosClient.get(`/doctors/${doctorId}?populate=*`);
        
};
 export {getCategories ,getDoctors ,getDoctorsByCategory ,getDoctorsById};
