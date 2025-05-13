import { useParams } from "react-router-dom";
import Layout from "../../components/Layout";
import * as lucideIcons from 'lucide-react';
import { useCart } from "../../context/CartContext";


const ProductDetail = () => {
    const { id } = useParams();
    const { findSingleProduct, addToCart } = useCart();
    const product = findSingleProduct(parseInt(id));
    return (
        <Layout>
            <div className="breadcrumbs text-sm">
                <ul>
                    <li>
                        <a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="h-4 w-4 stroke-current">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                            </svg>
                            Home
                        </a>
                    </li>
                    <li>
                        <a>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="h-4 w-4 stroke-current">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                            </svg>
                            Documents
                        </a>
                    </li>
                    <li>
                        <span className="inline-flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="h-4 w-4 stroke-current">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                            </svg>
                            Add Document
                        </span>
                    </li>
                </ul>
            </div>

            <section className="py-8 antialiased dark:bg-gray-900 md:py-16">
                <div className="mx-auto grid max-w-screen-xl px-4 pb-8 md:grid-cols-12 lg:gap-12 lg:pb-16 xl:gap-5">
                    <div className="md:col-span-5 md:mt-0 md:flex justify-center items-center">
                        <img className="dark:hidden h-96 justify-center items-center" src={product.image} alt="shopping illustration" />
                        <img className="hidden dark:block h-96 justify-center items-center" src={product.image} alt="shopping illustration" />
                    </div>
                    <div className="content-start justify-self-start md:col-span-7 md:text-start">
                        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight dark:text-white md:max-w-2xl md:text-5xl xl:text-6xl">{product.title}</h1>
                        <div className="flex gap-4">
                            <h3 className="mb-4 text-2xl font-bold leading-none tracking-tight dark:text-white md:max-w-2xl md:text-3xl xl:text-3xl">$ {product.price}</h3>
                            <h3 className="mb-4 text-2xl font-bold leading-none tracking-tight dark:text-white text-gray-400 md:max-w-2xl md:text-3xl xl:text-3xl line-through">$ {product.price + 200}</h3>
                        </div>
                        <div className="flex gap-5">
                            <h3>Select Color: </h3>
                            <div class="relative flex flex-col rounded-lg w-96">
                                <div class="group inline-flex flex-wrap justify-start items-center gap-2">
                                    <button class="rounded-full pointer-events-auto border border-slate-300 p-3.5 text-center text-sm transition-all shadow-lg hover:scale-105 hover:shadow-lg bg-black cursor-pointer" type="button" />
                                    <button class="rounded-full pointer-events-auto border border-slate-300 p-3.5 text-center text-sm transition-all shadow-lg hover:scale-105 hover:shadow-lg bg-purple-500 cursor-pointer" type="button" />
                                    <button class="rounded-full pointer-events-auto border border-slate-300 p-3.5 text-center text-sm transition-all shadow-lg hover:scale-105 hover:shadow-lg bg-yellow-600 cursor-pointer" type="button" />
                                    <button class="rounded-full pointer-events-auto border border-slate-300 p-3.5 text-center text-sm transition-all shadow-lg hover:scale-105 hover:shadow-lg bg-red-400 cursor-pointer" type="button" />
                                    <button class="rounded-full pointer-events-auto border border-slate-300 p-3.5 text-center text-sm transition-all shadow-lg hover:scale-105 hover:shadow-lg bg-gray-500 cursor-pointer" type="button" />
                                </div>
                            </div>
                        </div>
                        <div class="flex mt-6 gap-4">
                            {product.options.map((option)=>(
                                <button class="w-full px-4 py-2 border border-gray-300 rounded-md bg-[#f8f8f8] shadow-2xl hover:scale-110 transition-all cursor-pointer">{option}</button>
                            ))}
                        </div>
                        <div class="grid grid-cols-3 gap-4 mt-6">
                            {product.characteristics.map((characteristic, index) => {
                                // Acceder dinámicamente al ícono usando el nombre en characteristic.icon
                                const IconComponent = lucideIcons[characteristic.icon];

                                return (
                                    <div key={index} className="bg-[#f8f8f8] flex gap-3 rounded-2xl p-2 border border-slate-300">
                                        <div className="flex items-center">
                                            {/* Renderiza el ícono si existe */}
                                            {IconComponent && <IconComponent className="w-6 h-6 text-gray-700" />}
                                        </div>
                                        <div>
                                            <p className="text-gray-400">{characteristic.title}</p>
                                            <h2>{characteristic.content}</h2>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="mt-3">
                            <p>{product.description}</p>
                        </div>
                        <div className="flex gap-4 justify-around items-center mt-4">
                            <button className="btn btn-wide p-8">Add to whislist</button>
                            <button onClick={()=>addToCart(product)} className="btn btn-wide bg-black text-white p-8">Add to cart</button>
                        </div>

                        <div class="grid grid-cols-3 gap-4 mt-6">
                            <div className="flex gap-4">
                                <div class="w-14 flex justify-center items-center rounded-md bg-[#f8f8f8] border-gray-300">
                                    <lucideIcons.Truck />
                                </div>
                                <div class="w-64 flex-1">
                                    <p className="text-gray-400">Free Delivery</p>
                                    <h2>1-2 days</h2>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div class="w-14 flex justify-center items-center rounded-md bg-[#f8f8f8] border-gray-300">
                                    <lucideIcons.Store />
                                </div>
                                <div class="w-64 flex-1">
                                    <p className="text-gray-400">In Stock</p>
                                    <h2>Today</h2>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div class="w-14 flex justify-center items-center rounded-md bg-[#f8f8f8] border-gray-300">
                                    <lucideIcons.BadgeCheck />
                                </div>
                                <div class="w-64 flex-1">
                                    <p className="text-gray-400">Guaranteed</p>
                                    <h2>1 year</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </Layout>
    )
}

export default ProductDetail