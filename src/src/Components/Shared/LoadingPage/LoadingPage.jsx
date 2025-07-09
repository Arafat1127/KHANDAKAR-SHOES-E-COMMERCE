import React from 'react';
import { motion } from 'framer-motion';

const LoadingPage = () => {
    return (
        <div className="h-screen w-full bg-gray-900 flex items-center justify-center">
            <motion.div
                className="w-20 h-20 border-4 border-t-transparent border-white rounded-full animate-spin"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            />
            <div className="absolute bottom-10 text-white text-sm animate-pulse">Loading, please wait...</div>
        </div>
    );
};

export default LoadingPage;
