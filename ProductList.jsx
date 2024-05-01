import React, {useEffect} from 'react';
import ProductItem from './ProductDetails';
import Filter from './Filter';
import Sort from './Sort';
import Pagination from './Pagination';
import { useDispatch, useSelector} from 'react-redux';
import {fetchProducts} from '../Components/ProductDetails';

const ProductList = () => {
    const dispatch =useDispatch();
    const products = useSelector(state => state.products);
    const filters = useSelector(state => state.filters);

    useEffect(() => {
        dispatch(fetchProducts(filters));
    }, [dispatch,filters]);

    return(
        <div>
        <Filter/>
        <Sort/>
        <div classname="product-grid">
            {products.map(product =>(
            <ProductItem key={product.id} product={product}/>
            ))}
        </div>
        <pagination/>
        </div>
    );
 
};

export default ProductList;
