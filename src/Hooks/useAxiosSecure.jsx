import axios from "axios";
import useAuth from "../Auth/useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
})

const useAxiosSecure = () => {
    const { logoutUser } = useAuth()
    const navigate = useNavigate()
    // interceptor
    axiosSecure.interceptors.request.use(config => {
        return config
    },
        async (error) => {
            if (error.response.status === 401 || error.response.status === 403) {
                await logoutUser()
                navigate('/login')
            }
            return Promise.reject(error)
        }
    )
    // axiosSecure.interceptors.response.use

    return axiosSecure
};

export default useAxiosSecure;