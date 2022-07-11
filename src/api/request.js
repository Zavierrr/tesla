import { axiosInstance } from "./config";

export const getCarParamsRequest =
    () => axiosInstance.get('/design')
