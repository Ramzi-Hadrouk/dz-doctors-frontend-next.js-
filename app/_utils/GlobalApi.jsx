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

function bookAppointment  ( data) {
    return axiosClient.post(`/appointments`, data);
        
};


function sendEmail  ( data) {
    return axios.post(`/api/sendEmail`, data);
        
};

function getBookingList ( userEmail) {
    return axiosClient.get(`/appointments?filters[Email][$eq]=${userEmail}&populate=*`);
        
};

 export {getCategories ,getDoctors ,getDoctorsByCategory ,getDoctorsById ,bookAppointment , sendEmail ,getBookingList};
    