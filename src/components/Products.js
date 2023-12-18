import React from 'react';

import ProductItem from './ProductItem';
import Card from './Card';

import './Products.css';

const Products = (props) => {
  return (
    <Card className="products">
    {
      props && props?.items?.map((item) => {
        return (
          <ProductItem
        title={item?.title}
        amount={item?.amount}
        date={item?.date}
      />
        )
      })
    }
      
    </Card>
  );
}

export default Products;