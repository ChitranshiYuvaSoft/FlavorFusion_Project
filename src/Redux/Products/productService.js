import axiosInstance from "../Services/axiosServiceHandler";

const allProducts = async() => {
    const response = await axiosInstance.get("/product?pageNumber=1&pageSize=10");
    return await response.data.data;
}

const productServices = {
    allProducts,
}

export default productServices;