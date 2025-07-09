import React, { useContext, useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { CartContextApi } from '../../../context/CartContext';
import LoadingPage from '../../Shared/LoadingPage/LoadingPage';
import { motion } from 'framer-motion'; // Import Framer Motion

const ChildrenProducts = () => {
    const { handleAddToCart } = useContext(CartContextApi);
    const [childrenProducts, setChildrenProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("childrenProductsCategory.json")
            .then((res) => res.json())
            .then((data) => {
                setChildrenProducts(data);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <LoadingPage />;
    }

    return (
        <div className="mt-[100px] md:mt-[140px] mb-[50px] flex justify-center">
            <Toaster />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-3">
                {
                    childrenProducts.map((childrenProduct, index) => (
                        <motion.div
                            key={childrenProduct.id}
                            className="rounded-md mx-0 bg-base-100 hover:shadow-2xl group relative md:w-[230px] xl:h-[470px] xl:w-[370px] overflow-hidden"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            {/* Product Image */}
                            <figure>
                                <div className="w-full relative mx-auto h-auto overflow-hidden rounded-lg">
                                    <img
                                        className="h-[130px] md:h-[260px] cursor-pointer w-full object-contain relative z-0 rounded-lg transition-all duration-300 hover:scale-110"
                                        src={childrenProduct.img || notFoundImg}
                                        onError={(e) => {
                                            e.target.onError = null;
                                            e.target.src = notFoundImg;
                                        }}
                                        alt={childrenProduct.img ? childrenProduct.name : ""}
                                    />
                                </div>
                            </figure>

                            {/* Product Info */}
                            <div className="flex justify-center text-center my-3">
                                <div className="max-w-xs overflow-hidden text-ellipsis px-2">
                                    <p>{childrenProduct.category}</p>
                                    <p className="py-2 truncate">{childrenProduct.name}</p>
                                    <div className="md:flex justify-center items-center xl:gap-3">
                                        <p className="font-semibold text-xl line-through text-[#969696]">Tk {childrenProduct.oldPrice}.00</p>
                                        <p className="font-semibold text-xl text-red-500">Tk {childrenProduct.price}.00</p>
                                    </div>

                                    {/* Button */}
                                    <div className="card-actions justify-center">
                                        <button
                                            onClick={() => handleAddToCart(childrenProduct)}
                                            className="btn rounded-sm sm:w-[150px] md:w-[230px] lg:w-[450px] xl:w-[450px] 2xl:w-[450px] mt-3 text-[19px] xl:text-xl hover:bg-[red] bg-[black] text-white xl:opacity-0 xl:group-hover:opacity-100 xl:transition-opacity bottom-4 left-1/2"
                                        >
                                            Shop Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))
                }
            </div>
        </div>
    );
};

export default ChildrenProducts;
