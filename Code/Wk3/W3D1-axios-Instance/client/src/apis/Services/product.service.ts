import http from "../axios"
import Product from "../../Types/types"
// Get Request
const getProducts = ()=>{
    return http.get('/products')
}




// Add New post: The post require a data
const addNewPost =(data:Product)=>{
    return http.post('/products',data)
}



// Delete Post
const deletePost =(id:string)=>{
    return http.delete(`/products/${id}`)
}

// Export the GetProduct: This will export  productService object 
export default {
    getProducts,
    addNewPost,
    deletePost
}