//Admin

import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';

const ProductDetails = ({ product }) => {
    const [quantity, setquantity] = useState(1)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        // <div className="product-details">
        <div style={{ margin: '70px' }} className='shadow-lg p-3 mb-5 bg-white rounded'>

            <div onClick={handleShow}>
                <h4>{product.name}</h4>
                <img src={product.imagelink} className="img-fluid" style={{ height: '200px', width: '200px' }} />
            </div>
            {/* <p><strong>Details: </strong>{product.details}</p> */}
            <div className="flex-container">
                <div className='m-1 w-100'>
                    <p><strong>Details: </strong>{product.details}</p>
                    <h5>Price: LKR. {product.price * quantity}/-</h5>
                </div>
            </div>

        </div>
    )
}

export default ProductDetails