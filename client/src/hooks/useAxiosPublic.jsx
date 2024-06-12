import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://survey-app-ashy.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;