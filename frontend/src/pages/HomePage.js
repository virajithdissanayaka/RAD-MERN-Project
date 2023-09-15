import { useEffect, useState } from "react"

import ProductView from "../components/Products/productView"

export default function HomePage() {

    const [products, setProducts] = useState(null)

    useEffect(() => {
        const fetchProducts = async () => {
        const response = await fetch('/api/products')
        const json = await response.json()

        if (response.ok) {
            setProducts(json)
            
        }
        }

        fetchProducts()
    }, [])

    return (
        <div>
            <div className="row">
                    {products && products.map(product => {
                    
                    return <div className="col-md-4">
                        <div>
                            <ProductView product={product} key={product._id} />
                        </div>
                    </div>
            })}
            </div>
        </div>
    )
}