export const addToCart=(product, quantity)=>dispatch=>{

    let cartItem = {
        name: product.name,
        _id: product._id,
        image: product.imagelink,
        quantity: quantity,
        prices : product.prices,
        price: product.price*quantity
    }

    dispatch({type: 'ADD_TO_CART', payload: cartItem})

}