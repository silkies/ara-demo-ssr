import React, { useState, useEffect } from 'react';
import ProductsCarousel from '../carousel/carousel';
import getRelatedProducts from '../utils/products';
import { get } from 'lodash';
import './related-products.css';
import { BrowserRouter } from 'react-router-dom';

class RelatedProducts extends React.Component {
    constructor(props) {
        super(props);
        this.state = { products: [] };
    }

    async componentDidMount() {
        var pathname = window.location.pathname;
        var regexSearch = /[0-9]+/.exec(pathname);
        var selectedId = get(regexSearch, "[0]");
        const relatedProducts = await getRelatedProducts(selectedId);
        this.setState({ products: relatedProducts });
    }
    

    render() {
        if (!this.state.products) {
            return (
                <div> No product
         </div>)
        } else
            return (
                <BrowserRouter>
                    <div className="products_wrap">
                        {this.state.products.length > 0
                            ? <div><div className="label-info">Related Products</div><ProductsCarousel products={this.state.products} /></div>
                            : <div className="label-info">No related products</div>}
                    </div>
                </BrowserRouter>

            );
    }
}
export default RelatedProducts;
/*export default function RelatedProducts(props) {
    const pathname = window.location.pathname;
    const regexSearch = /[0-9]+/.exec(pathname);
    const selectedId = get(regexSearch, "[0]");

    //const [products, setProducts] = useState([]);
    //const [isLoaded, setIsLoaded] = useState(false);

    let products = [];
    const fetchRelatedProducts = async () => {
        const relatedProducts = await getRelatedProducts(selectedId);
        //setProducts(relatedProducts);
        products = relatedProducts;
    }

    fetchRelatedProducts();

    /*useEffect(() => {
        fetchRelatedProducts();
        setIsLoaded(true);
    }, [selectedId])

    if (!isLoaded) {
        return <div>Loading...</div>
    } else if (!products) {
        return (
            <div> No product
     </div>)
    }

    const numberOfCards = () => {
        if (products.length >= 4) {
            return 4;
        } else {
            return products.length;
        }
    }

    console.log(numberOfCards());

    return (
        <StaticRouter>
            <div className="products_wrap">
                {products.length > 0
                    ? <div><div className="label-info">Related Products</div><ProductsCarousel numberOfCards={numberOfCards()} products={products} /></div>
                    : <div className="label-info">No related products</div>}
            </div>
        </StaticRouter>

    );
}*/
