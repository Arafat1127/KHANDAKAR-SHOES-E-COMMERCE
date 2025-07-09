import React, { useEffect, useState } from 'react';
import Product from './Product';
import LoadingPage from '../../Shared/LoadingPage/LoadingPage';

const Products = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch("allProducts.json")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data)
                setLoading(false);
            })
    }, []);
    if (loading) {
        return <LoadingPage />;
    }
    return (
        <div className='w-5/6'>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  md:gap-3'>
                {
                    products.map(product => (
                        <Product
                            key={product.id}
                            product={product}
                        >
                        </Product>
                    ))
                }
            </div>
        </div>
    );
};

export default Products;