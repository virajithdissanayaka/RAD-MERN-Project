import React,{ useState } from "react"

const ProductForm = () => {
    const [name,setName] = useState('')
    const [imagelink,setImagelink] = useState('')
    const [price,setPrice] = useState('')
    const [details,setDetails] = useState('')
    const [error,setError] = useState(null)

    //when user click "Add Product" button on form
    const handleSubmit = async (e) => {
        e.preventDefault()
        //avoid refreshing the page

        const product = {name, price, details, imagelink}

        const response = await fetch('/api/products', {
            method: 'POST',
            body: JSON.stringify(product),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok){
            setName('')
            setImagelink('')
            setPrice('')
            setDetails('')
            setError(null)
            console.log('new product added')
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
           <h3>Add a New Product</h3> 

           <label>Product Name:</label>
           <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
           />

           <label>Price:</label>
           <input
                type="text"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
           />

           <label>Image Link:</label>
           <input
                type="text"
                onChange={(e) => setImagelink(e.target.value)}
                value={imagelink}
           />

           <label>Details:</label>
           <input
                type="text"
                onChange={(e) => setDetails(e.target.value)}
                value={details}
           />

           <button>Add Product</button>
           {error && <div className="error">{error}</div>}
        </form>
    )
}

export default ProductForm