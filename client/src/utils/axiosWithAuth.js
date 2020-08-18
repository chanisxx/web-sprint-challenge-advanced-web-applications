import axios from 'axios';

export const axiosWithAuth = () => {
    // console.log('localStorage', localStorage)
    const token = localStorage.getItem('token');
    
    return axios.create({
        baseURL: 'http://localhost:5000/api/',
        headers: {
            Authorization: token
        }
    });
};
