import Product from "../models/product.js"
import { isAdmin } from "./userController.js";

export async function createProduct(req, res){
    if(!isAdmin(req)){
        return res.status(403).json({message : "Access denied. Admin only"})
    }

    const product = new Product(req.body)
    try{
        const response = await product.save()
        res.json({
            message : "Product created successfully",
            product : response
        })

    }catch(error){
        console.error("error creating product:", error);
        return res.status(500).json({ message: "Failed to create product"})

    }
}

export async function getProducts(req, res){
    try{
        if(isAdmin(req)){
            const products = await Product.find();
            return res.json(products);
        }else{
            const products = await Product.find({isAvailble: true})
            return res.json(products)
        }
    }catch(error){

    }
    
}

export async function deleteProduct(req, res){
    if(!isAdmin(req)){
        res.status(403).json({
            message: "Access denied. Admin only"
        })
        return
    }
    
    
    try{
        const productId = req.params.productId
        await Product.deleteOne({
            productId : productId
        })
        res.json({ message : "Product deleted successfully"})
    }catch(error){
        console.error("Error delete product", error)
        res.status(500).json({ message: "Failed to delete product"})
        return;
    }
}

export async function updateProduct(req, res){
    if(!isAdmin(req)){
        res.status(403).json({
            message: "Access denied. Admin only"
        })
        return
    }
    const data = req.body
    const productId = req.params.productId
    try{
        await Product.updateOne({
            productId : productId
        }, data)
        res.json({ message : "Product update is successfull"})
    } catch(error){
        console.error("Error updating product:", error)
        res.status(500).json({message: "Failed to update"})
        return
    }
}

export async function getProductInfo(req, res){
    try{
        const productId = req.params.productId
        const product = await Product.findOne({ productId : productId})

        if(product == null){
            res.status(404).json({ message: "Product Not Found"})
            return;
        }

        if(!isAdmin(req)){
            res.status(403).json({
                message : "Access denied. Admin only"
            })
            return
        }

        if(isAdmin(req)){
            res.json(product)
        }else{
            if(product.isAvailble){
                res.json(product)
            }else{
                res.status(404).json({
                    message: "product Not Found"
                })
            }
        }
    }catch(error){
        console.error("Error fetching product ingo:", error)
        res.status(500).json({ message: "Failed to fecth product"})
    }
}