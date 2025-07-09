import React, { useContext, useEffect, useState } from 'react';
import { CartContextApi } from '../../../context/CartContext';
import { Toaster } from 'react-hot-toast';
import LoadingPage from '../../Shared/LoadingPage/LoadingPage';
import { motion } from 'framer-motion';

const MenProducts = () => {
    const { handleAddToCart } = useContext(CartContextApi);
    const [menProducts, setMenProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch("menProductsCategory.json")
            .then((res) => res.json())
            .then((data) => {
                setMenProducts(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching men's products:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <LoadingPage />;
    }

    return (
        <div className="mt-[100px] md:mt-[140px] mb-[50px] flex justify-center">
            <Toaster />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {menProducts.map((menProduct, index) => (
                    <motion.div
                        key={menProduct.id}
                        className="rounded-md mx-0 bg-base-100 hover:shadow-2xl group relative md:w-[230px] xl:h-[470px] xl:w-[370px] overflow-hidden"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                        whileHover={{ scale: 1.02 }}
                    >
                        {/* Product Image */}
                        <figure>
                            <div className='w-full relative mx-auto h-auto overflow-hidden rounded-lg'>
                                <motion.img
                                    className="h-[130px] md:h-[260px] cursor-pointer w-full object-contain relative z-0 rounded-lg transition-all duration-300 hover:scale-110"
                                    src={menProduct.img}
                                    onError={(e) => {
                                        e.target.onError = null;
                                        e.target.src = "/not-found.png";
                                    }}
                                    alt={menProduct.name || ""}
                                />
                            </div>
                        </figure>

                        {/* Product Info */}
                        <motion.div
                            className='flex justify-center text-center my-3'
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: 0.3 }}
                        >
                            <div className="max-w-xs overflow-hidden text-ellipsis px-2">
                                <p className="text-sm text-gray-500">{menProduct.category}</p>
                                <p className="py-2 truncate font-semibold">{menProduct.name}</p>
                                <div className='md:flex justify-center items-center xl:gap-3'>
                                    <p className='font-semibold text-xl line-through text-[#969696]'>
                                        Tk {menProduct.oldPrice}.00
                                    </p>
                                    <p className='font-semibold text-xl text-red-500'>
                                        Tk {menProduct.price}.00
                                    </p>
                                </div>

                                {/* Button */}
                                <motion.div
                                    className="card-actions justify-center"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <button
                                        onClick={() => handleAddToCart(menProduct)}
                                        className="btn rounded-sm w-full mt-3 text-[17px] xl:text-xl hover:bg-red-600 bg-black text-white transition-all duration-300"
                                    >
                                        Shop Now
                                    </button>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default MenProducts;
