import React from "react";
import "../../App.css"
import {MdClose} from "react-icons/md"

const FormTable = ({handleSubmit,handleOnChange,handleClose,rest}) => {
    return(
        <div className='addContainer'>
              
                  <form onSubmit={handleSubmit}>
                    <div className='close-btn' onClick={handleClose}><MdClose/></div>

                    <label htmlFor='name'>City: </label>
                    <input type="text" id="city" name="city" onChange={handleOnChange} value={rest.city}/>
    
                    <label htmlFor='email'>Address: </label>
                    <input type="text" id="address" name="address" onChange={handleOnChange} value={rest.address}/>
    
                    <label htmlFor='mobile'>Mobile: </label>
                    <input type="mobile" id="mobile" name="mobile" onChange={handleOnChange} value={rest.mobile}/>
    
                    <button className='btn'>Submit</button>
                  </form>
                </div>
    )
}

export default FormTable;