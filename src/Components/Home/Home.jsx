import React, { useContext, useEffect, useState } from 'react';
import Products from './Products/Products';
import { Toaster } from 'react-hot-toast';
import ImageSlider from './ImageSlider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import HomeProducts from './Products/HomeProducts';
const Home = () => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
        if (window.pageYOffset > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);

        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);
    return (
        <div>
            <Toaster />
            <div>
                <ImageSlider></ImageSlider>
            </div>
            <div className='flex justify-center my-[10px] md:my-[20px] lg:my-[25px] '>
                <div className='mx-1 xl:w-5/6 '>
                    <img src="https://cdn.shopify.com/s/files/1/2287/9679/files/AR4.jpg?v=1733380242" alt="" className='cursor-pointer h-[75px]' />
                </div>
            </div>
            <div className=" flex justify-center">
                <div className=' xl:w-5/6 gap-3 mx-2  grid grid-cols-2 xl:grid-cols-4 lg:grid-cols-2'>
                    <div className=' relative mx-auto h-auto overflow-hidden cursor-pointer'>
                        <img src="https://www.batabd.com/cdn/shop/files/men_1_9aa725ad-22f1-4b68-b28e-a382799b0e19_1200x_crop_center.jpg?v=1729053445" alt="" className="w-full object-cover relative z-0  transition-all duration-500  hover:scale-110 " />
                    </div>
                    <div className=' relative mx-auto h-auto overflow-hidden cursor-pointer'>
                        <img src="https://www.batabd.com/cdn/shop/files/women_1_8528057d-f632-4127-8c37-11acc43f717d_1200x_crop_center.jpg?v=1729053430" alt="" className="w-full object-cover relative z-0  transition-all duration-500 hover:scale-110" />
                    </div>
                    <div className=' relative mx-auto h-auto overflow-hidden cursor-pointer'>
                        <img src="https://www.batabd.com/cdn/shop/files/kids_1_5c489cfe-ec4b-4ea2-94dc-933f182557ae_1200x_crop_center.jpg?v=1729053506" alt="" className="w-full object-cover relative z-0  transition-all duration-500 hover:scale-110" />
                    </div>
                    <div className=' relative mx-auto h-auto overflow-hidden cursor-pointer'>
                        <img src="https://cdn.shopify.com/s/files/1/2287/9679/files/accessories_1_2d07230f-c6d9-40d0-a6d4-65e560acdf93.jpg?v=1729053611" alt="" className="w-full object-cover relative z-0  transition-all duration-500 hover:scale-110 " />
                    </div>
                </div>
            </div>
            <div className='flex justify-center my-[25px]'>
                <div className='mx-1 xl:w-5/6'>
                    <img src="https://cdn.shopify.com/s/files/1/2287/9679/files/GV-new-3-web-strip-banner.jpg" alt="" className='cursor-pointer w-full h-[75px]' />
                </div>
            </div>
            <div className='flex justify-center items-center mt-[15px] xl:my-[80px] font-bold xl:text-3xl'>
                <h1>CHOOSE YOUR FAVOURITE PRODUCT</h1>
            </div>
            <div className='my-8 xl:my-20 xl:flex xl:justify-center'>
                <Products />
            </div>
            <div className=''>
                <div className='flex  justify-center items-center object-contain overflow-hidden    gap-10'>
                    <div className=' relative  overflow-hidden cursor-pointer'>
                        <img className=' object-contain relative z-0  transition-all duration-500 hover:scale-110' src="https://www.batabd.com/cdn/shop/files/NS-web-square-banner2_800x800_crop_center.jpg?v=1738834638" alt="" />
                    </div>
                    <div className='relative  overflow-hidden cursor-pointer'>
                        <img className=' object-contain relative z-0  transition-all duration-500 hover:scale-110' src="https://www.batabd.com/cdn/shop/files/mens-casual_800x800_crop_center.jpg?v=1727070538" alt="" />
                    </div>
                </div>
            </div>
            <HomeProducts></HomeProducts>
            <div className='flex justify-center items-center my-[80px] font-bold text-3xl'>
                <h1>PICK YOUR FAVOURITES</h1>
            </div>
            <div className="flex justify-center my-[40px]">
                <div className='flex justify-center items-center w-5/6 gap-10'>
                    <div className=" h-[500px] w-[500px] relative  overflow-hidden cursor-pointer">
                        <img className='object-contain relative z-0  transition-all duration-500 hover:scale-110' src="https://www.batabd.com/cdn/shop/files/women_fba2b8ad-586d-4fce-8e62-50d0486dbe44_800x800_crop_center.jpg?v=1727068376" alt="" />
                    </div>
                    <div className=" h-[500px] w-[500px] relative  overflow-hidden cursor-pointer">
                        <img className='object-contain relative z-0  transition-all duration-500 hover:scale-110' src="https://www.batabd.com/cdn/shop/files/mens-formal_800x800_crop_center.jpg?v=1727068128" alt="" />
                    </div>
                    <div className=" h-[500px] w-[500px] relative  overflow-hidden cursor-pointer">
                        <img className='object-contain relative z-0  transition-all duration-500 hover:scale-110' src="https://www.batabd.com/cdn/shop/files/bags_feff123a-1643-4e72-8e3b-762049436368_800x800_crop_center.jpg?v=1727068282" alt="" />
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center my-[80px] font-bold text-3xl'>
                <h1>OUR OTHER EVENTS</h1>
            </div>
            <div className='flex justify-center items-center my-10 gap-20'>
                <div className="h-[250px] w-[250px] relative  overflow-hidden cursor-pointer">
                    <img className='object-contain relative z-0  transition-all duration-500 hover:scale-110' src="https://www.batabd.com/cdn/shop/files/north_640x.jpg?v=1720336875" alt="" />
                </div>
                <div className="h-[250px] w-[250px] relative  overflow-hidden cursor-pointer">
                    <img className='object-contain relative z-0  transition-all duration-500 hover:scale-110' src="https://www.batabd.com/cdn/shop/files/234_fefc05a8-6063-42e9-a013-119ac6f8d7a8_640x.jpg?v=1720936117" alt="" />
                </div>
                <div className="h-[250px] w-[250px] relative  overflow-hidden cursor-pointer">
                    <img className='object-contain relative z-0  transition-all duration-500 hover:scale-110' src="https://www.batabd.com/cdn/shop/files/comp1_640x.jpg?v=1692859629" alt="" />
                </div>
                <div className="h-[250px] w-[250px] relative  overflow-hidden cursor-pointer">
                    <img className='object-contain relative z-0  transition-all duration-500 hover:scale-110' src="https://www.batabd.com/cdn/shop/files/north1_640x.jpg?v=1692859497" alt="" />
                </div>
                <div className="h-[250px] w-[250px] relative  overflow-hidden cursor-pointer">
                    <img className='object-contain relative z-0  transition-all duration-500 hover:scale-110' src="https://www.batabd.com/cdn/shop/files/aishoe_640x.jpg?v=1720338268" alt="" />
                </div>
            </div>
            <div>
                {/* Scroll to top button */}
                {isVisible && (
                    <button
                        onClick={scrollToTop}
                        className="flex justify-center items-center fixed bottom-12 right-12 p-3 h-[55px] object-cover w-[55px] bg-gray-300 font-bold hover:text-white  rounded-full shadow-lg hover:bg-black transition-all"
                    >
                        <FontAwesomeIcon className='w-9 h-5 font-bold' icon={faAngleUp} />
                    </button>
                )}
            </div>
        </div>
    );
};

export default Home;












// import React, { useContext, useEffect, useState } from 'react';
// import Products from './Products/Products';
// import offerImg from "../../assets/images/offer-image.jpg"
// import shoesOfferImg from "../../assets/images/shoes-offer.jpg"
// import bagsOfferImg from "../../assets/images/bags-offer-image.jpg"
// import { Toaster } from 'react-hot-toast';
// import { CartContextApi } from '../../context/CartContext';
// import Carousel from './Carousel';

// const Home = () => {
//     const { handleAddToCart } = useContext(CartContextApi);
//     return (
//         <div>
//             <Toaster />

//             <div className='my-40 flex justify-center w-[1700px]'>
//                 <Products handleAddToCart={handleAddToCart} />
//             </div>
//         </div>
//     );
// };

// export default Home;
