import React, { useEffect, useState } from 'react';

const ImageSlider = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when the user scrolls down 100px from the top
    const toggleVisibility = () => {
        if (window.pageYOffset > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };


    const images = [
        "https://www.batabd.com/cdn/shop/files/SF-2024-web-banner.jpg?v=1730713645",
        "https://walkarfootwear.com/images/promo/166/Design-05-2000pxx786px.jpg",
        "https://walkarfootwear.com/images/promo/168/Ramadan-Web-Banner-02.jpg",
        "https://www.batabd.com/cdn/shop/files/Valentine-2025-web-banner.jpg?v=1739121947",
        "https://www.batabd.com/cdn/shop/files/BTS-web-banner_e8b0b43f-a37a-4a4a-911a-70c3f17b6fe7.jpg?v=1736229025",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);

        return () => clearInterval(intervalId);
    }, [images.length]);

    return (
        <div className="relative overflow-hidden w-full mt-[37px]">
            <div
                className="flex transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((image, index) => (
                    <div key={index} className="flex-shrink-0 w-full">
                        <img
                            src={image}
                            alt={`carousel-image-${index}`}
                            className="w-full   xl:h-[750px] h-[200px]  md:object-contain cursor-pointer"
                        />
                    </div>
                ))}
            </div>

            {/* Image Indicators */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`w-1.5 h-1.5 lg:w-2.5 lg:h-2.5 outline outline-1 md:outline-2 outline-red-600 rounded-full bg-red-500 ${currentIndex === index ? "p-1" : "bg-opacity-0"
                            } cursor-pointer transition-all`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;

