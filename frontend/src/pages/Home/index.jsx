import CategoriesCarousel from "../../components/CategoriesCarousel";
import Hero from "../../components/Hero"
import Layout from "../../components/Layout";
import ProductCard from "../../components/ProductCard";
import { useCart } from "../../context/CartContext";

const Home = () => {
    const {products} = useCart();
    return (
        <Layout>
            <div className=" flex flex-col gap-10 w-full">
                <Hero />
                <CategoriesCarousel />
                <div role="tablist" className="tabs tabs-border">
                    <input type="radio" name="my_tabs_6" className="text-xl font-semibold tab" aria-label="New Arrivals" />
                    <div className="tab-content bg-base-100 p-6 flex flex-wrap justify-center gap-6">

                    </div>

                    <input type="radio" name="my_tabs_6" className="text-xl font-semibold tab" aria-label="Best Sellers" defaultChecked />
                    <div className="tab-content bg-base-100 p-6">
                        <div className="grid grid-cols-3 gap-x-96">
                            {products.map((product) => (
                                <ProductCard product={product} />
                            ))}
                        </div>
                    </div>

                    <input type="radio" name="my_tabs_6" className="text-xl font-semibold tab" aria-label="Featured Products" />
                    <div className="tab-content bg-base-100 p-6">Featured Products</div>
                </div>
            </div>
        </Layout>
    )
}

export default Home;