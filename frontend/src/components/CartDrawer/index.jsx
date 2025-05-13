import CartItem from "../CartItem";
import { useCart } from "../../context/CartContext";

const CartDrawer = () => {
    const {cartItems, setCartItems, calculateCartSubtotal} = useCart();

    return (
        <div className="drawer drawer-end z-50">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Botón del carrito */}
                <label htmlFor="my-drawer-4" className="btn btn-ghost drawer-button">
                    <div className="indicator">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                        </svg>
                        <span className="badge badge-sm indicator-item badge-secondary">{cartItems.length}</span>
                    </div>
                </label>
            </div>

            {/* Drawer content */}
            <div className="drawer-side">
                {/* Fondo oscuro cuando drawer está abierto */}
                <label htmlFor="my-drawer-4" className="drawer-overlay"></label>

                {/* Contenedor principal del carrito */}
                <div className="w-[90vw] max-w-sm bg-white h-full flex flex-col overflow-y-auto shadow-xl">
                    <div className="px-4 py-6 sm:px-6 border-b flex justify-between items-center">
                        <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">Shopping cart</h2>
                        <label htmlFor="my-drawer-4" className="text-gray-400 hover:text-gray-500 cursor-pointer">
                            <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </label>
                    </div>

                    {/* Productos */}
                    <div className="flex-1 px-4 py-4 sm:px-6">
                        <ul className="-my-6 divide-y divide-gray-200">
                            {/* Producto 1 */}
                            {cartItems.map((item)=>(
                                <CartItem key={item.id} product={item}/>
                            ))}
                        
                        </ul>
                    </div>

                    {/* Totales y checkout */}
                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                            <p>Subtotal</p>
                            <p>${calculateCartSubtotal()}</p>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                        <div className="mt-6">
                            <a href="#" className="btn btn-primary w-full">
                                Checkout
                            </a>
                        </div>
                        <div className="mt-6 text-center text-sm text-gray-500">
                            or <button className="text-indigo-600 hover:text-indigo-500">Continue Shopping →</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartDrawer;
