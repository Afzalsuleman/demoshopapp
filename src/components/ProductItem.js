import React, { useState } from 'react';

import ProductDate from './ProductDate';
import Card from './Card';
import './ProductItem.css';

const ProductItem = (props) => {
 // const title=props.title;
   //const [title, setTitle] =  useState(props.title);


  function clickHandler(temp) {
     const data = props?.products.filter((c) => c.title !== temp)
    props.setProducts(data)
    //console.log("button clicked", finalData);
  }
  
  console.log("props.date", props)

  return (
    <Card className='product-item'>
      <ProductDate date={props.date} />
      <div className='product-item__description'>
        <h2>{props.title}</h2>
        <button onClick={() => clickHandler(props.title)}>Add to cart</button>
      </div>
    </Card>
  );
}

export default ProductItem;