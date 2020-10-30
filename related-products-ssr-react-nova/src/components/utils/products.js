async function getRelatedProducts(id) {
    let product = await getProduct(id);
    let products = await getProducts();
    let relatedProducts = await products.filter(x => {
        let match = 0;
        if (x.id != id) {
            if (product.brand == x.brand) {
                match = match + 1;
            }
            if (product.name == x.name) {
                match = match + 1;
            }

            if (product.color == x.color) {
                match = match + 1;
            }

            if (product.price == x.price) {
                match = match + 1;
            }

            if (match !== 0) {
                return x;
            }
        }
    });
    return await relatedProducts;
}

async function getProduct(id) {
    try {
        let res = await fetch(`http://localhost:3000/products/${id}`);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function getProducts() {
    try {
        let res = await fetch(`http://localhost:3000/products/`)
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

export default getRelatedProducts;