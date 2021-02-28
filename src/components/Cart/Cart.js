import React from 'react';

const Cart = (props) => {
    const cart=props.cart;
    console.log(cart);
    // const total=cart.reduce((total,prd)=>total+prd.price,0);
    let total=0;
    for(let i=0;i<cart.length;i++){
        const product=cart[i];
        total=total+product.price;
    }
    let shipping=0;
    
    if(total>200){
        shipping=0;
    }
    else if(total>100){
        shipping=5.99;
    }
    else if(total>0){
        shipping=12.99;
    }
    const tax=Math.round(total/10);
    return (
        <div>
            <h4>Order Summery</h4>
            <p>Items ordered :{cart.length}</p>
            <p><small>Product price:{total}</small></p>
            <p><small>Shipping Cost :{shipping}</small></p>
            <p><small>TAX+VAT:{tax}</small></p>
            <p>total price : {total+shipping+tax}</p>

        </div>
    );
};

export default Cart;