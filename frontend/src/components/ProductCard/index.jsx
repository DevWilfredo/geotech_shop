import { NavLink } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart()

  return (
    <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-80 h-96 overflow-hidden">
      <div className="relative h-64 overflow-hidden bg-clip-border">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full p-5 object-contain"
        />
      </div>
      <div className="flex flex-col justify-between flex-grow p-4">
        <div>
          <div className="mb-2 flex items-center justify-between">
            <p className="text-slate-800 text-lg font-semibold truncate">{product.title}</p>
            <p className="text-secodary text-lg font-semibold">${product.price}</p>
          </div>
          <p className="text-slate-600 text-sm leading-snug line-clamp-3">
            {product.description}
          </p>
        </div>
        <div className="flex justify-around gap-3 mt-4">
          <button onClick={() => addToCart(product)} className="btn bg-black text-white">Agregar al carrito</button>
          <button className="btn">
            <NavLink to={`/productDetail/${product.id}`}>
              Detalles
            </NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};


export default ProductCard