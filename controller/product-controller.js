import Product from '../model/productSchema.js'

export const getProducts = async (request, response) => {
    try {
        const products = await Product.find({});

        response.status(200).json(products);
    }catch (error) {
        response.status(500).json(error.message)
    }
}

export const getProductById = async (request, response) => {
    try {
        const id = request.params.id;
        const products = await Product.findOne({ 'id': id});
        response.status(200).json(products);
    }catch (error) {
        response.status(500).json(error.message);

    }
}