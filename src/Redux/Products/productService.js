import axiosInstance from "../Interceptors/axiosInterceptors";

const allProducts = async() => {
    const response = await axiosInstance.get("/product?pageNumber=1&pageSize=10");
    console.log(response.data);
    return await response.data;
}

const productServices = {
    allProducts,
}

export default productServices;