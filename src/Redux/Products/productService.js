import axiosInstance from "../Services/axiosServiceHandler";

const allProducts = async() => {
    const response = await axiosInstance.get("/product?pageNumber=1&pageSize=10");
    return response.data.data;
}

const getProductDetails = async(_id) => {
    const response = await axiosInstance.get(`/product/${_id}`);
    return response.data.data;
}


const productAdd = async(productData) => {
    console.log(productData, "Service Create product")
    const response = await axiosInstance.post('/prodct', productData);
    console.log(response);
    return response;
}

const productServices = {
    allProducts,
    getProductDetails,
    productAdd,
}

export default productServices;