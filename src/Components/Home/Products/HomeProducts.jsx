import React, { useContext, useEffect, useState } from 'react';
import { CartContextApi } from '../../../context/CartContext';

const HomeProducts = () => {
    const { handleAddToCart } = useContext(CartContextApi);
    const [homeProducts, setHomeProducts] = useState([]);
    useEffect(() => {
        fetch("home2.json")
            .then((res) => res.json())
            .then((data) => setHomeProducts(data))
    }, [])

    return (
        <div className=" mt-[40px] mb-[50px] flex justify-center">
            <div className='grid md:grid-cols-4 gap-3 '>
                {
                    homeProducts.map(homeProduct => (
                        <div className="rounded-md bg-base-100 hover:shadow-2xl group relative h-[470px] w-[370px]">
                            {/* Product Image */}
                            <figure>
                                <div className='w-full relative mx-auto h-auto overflow-hidden rounded-lg '>
                                    <img
                                        className=" h-[260px] cursor-pointer w-full object-contain relative z-0 rounded-lg transition-all duration-300 hover:scale-110"
                                        src={homeProduct.img || notFoundImg}
                                        onError={(e) => {
                                            e.target.onError = null;
                                            e.target.src = notFoundImg;
                                        }}
                                        alt={homeProduct.img ? name : ""}
                                    />
                                </div>
                            </figure>

                            {/* Product Info */}
                            <div className='flex justify-center text-center my-8'>
                                <div className=" w-full max-w-xs overflow-hidden text-ellipsis px-2">
                                    <p>{homeProduct.category}</p>
                                    <p className="py-2 truncate ">{homeProduct.name}</p>
                                    <div className='flex justify-center items-center gap-3'>
                                        <p className='font-semibold text-xl line-through text-[#969696]'> Tk {homeProduct.oldPrice}.00</p>
                                        <p className='font-semibold text-xl text-red-500'> Tk {homeProduct.price}.00</p>
                                    </div>

                                    {/* Button (Hidden by default, shown on hover) */}
                                    <div className="card-actions justify-center ">
                                        <button
                                            onClick={() => handleAddToCart(homeProduct)}
                                            className="btn md:w-[300px]  rounded-md mt-3 text-xl hover:bg-[red] bg-[black] text-white md:opacity-0 md:group-hover:opacity-100 md:transition-opacity  bottom-4 left-1/2 "
                                        >
                                            Shop Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default HomeProducts;