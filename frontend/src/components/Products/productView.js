//User

import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';

const ProductView = ({ product }) => {
    const [quantity, setquantity] = useState(1)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function addtocart(){
        
    }

    return (
        // <div className="product-details">
        <div style={{ margin: '70px' }} className='shadow-lg p-3 mb-5 bg-white rounded'>
            <div onClick={handleShow}>
                <h4>{product.name}</h4>
                <img src={product.imagelink} className="img-fluid" style={{ height: '200px', width: '200px' }} />
            </div>

            <div className="flex-container">
                <div className='w-100 m-1'>
                    <p>Quantity</p>
                    <select className='form-control' value={quantity} onChange={(e) => { setquantity(e.target.value) }}>
                        {[...Array(10).keys()].map((x, i) => {

                            return <option value={i + 1}>{i + 1}</option>

                        })}
                    </select>
                </div>
            </div>
            {/* <p><strong>Details: </strong>{product.details}</p> */}
            <div className="flex-container">
                <div className='m-1 w-100'>
                    <h5 className='mt-1'>Price: <br />
                        LKR.{product.price * quantity}/-</h5>
                </div>
                <div className='m-1 w-100'>
                    <button className='btn' onClick={addtocart}>ADD TO CART</button>
                </div>
            </div>
            
            <div>
                <Modal show={show}>
                    <Modal.Header>
                        <Modal.Title>{product.name}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <img src={product.imagelink} className='img-fluid' style={{height:'400px'}}/>
                        <p>{product.details}</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <button className="btn" onClick={handleClose}>CLOSE</button>
                    </Modal.Footer>
                </Modal>
            </div>

        </div>
    )
}

export default ProductView