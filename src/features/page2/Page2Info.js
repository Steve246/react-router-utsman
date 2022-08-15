import React from 'react'
import { useLocation } from 'react-router-dom';

export const Page2Info = () => {
    const {state: {product}} = useLocation();
    return (
        <div>
            ID : {product.id}
            Name : {product.productName}
            Info : {product.productInfo}
        </div>
    )
}
