import axios from "axios";

const axiosPublic = axios.create({
     baseURL:'https://simple-good-food-server-nine.vercel.app'
})

const useAxiosPublic = () => {
     return axiosPublic
};

export default useAxiosPublic;