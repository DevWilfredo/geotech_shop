import { useCart } from "../../context/CartContext"

const CartItem = ({product}) => {
    const {removeFromCart} = useCart()
    return (
        <>
            <li className="flex py-6">
                <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                        src={product.image}
                        alt={`${product.image}-image`}
                        className="size-full object-contain"
                    />
                </div>
                <div className="ml-4 flex flex-1 flex-col">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3><a href="#">{product.title}</a></h3>
                        <p>${product.price}</p>
                    </div>
                    <div className="flex justify-between text-sm mt-2">
                        <p className="text-gray-500">Qty {product.quantity}</p>
                        <button onClick={() => removeFromCart(product.id)} className="text-indigo-600 hover:text-indigo-500 text-sm cursor-pointer">
                            Remove
                        </button>
                    </div>
                </div>
            </li>
        </>
    )
}

export default CartItem