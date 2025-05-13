// components/CategoryCarousel.jsx
import {Smartphone, Watch, Camera, Headphones, Monitor, Gamepad } from "lucide-react";

const categories = [
    { icon: <Smartphone size={32} />, label: "Phones" },
    { icon: <Watch size={32} />, label: "Smart Watches" },
    { icon: <Camera size={32} />, label: "Cameras" },
    { icon: <Headphones size={32} />, label: "Headphones" },
    { icon: <Monitor size={32} />, label: "Computers" },
    { icon: <Gamepad size={32} />, label: "Gaming" },
];

export default function CategoriesCarousel() {
    return (
        <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Browse By Category</h2>
            <div className="flex items-center space-x-4 ">
                <div className="flex gap-4">
                    {categories.map((cat, i) => (
                        <div
                            key={i}
                            className="hover:scale-105 card bg-base-200 shadow-sm items-center justify-center w-52 p-10 cursor-pointer hover:bg-base-300 transition-all rounded-lg"
                        >
                            <div className="text-primary">{cat.icon}</div>
                            <p className="text-sm font-medium mt-2 text-center">{cat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
