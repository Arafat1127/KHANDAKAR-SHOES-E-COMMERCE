import React from "react";

const About = () => {
    return (
        <div className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">
                        About KHANDAKAR SHOES
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Welcome to KHANDAKAR SHOES! We are a premium footwear brand located in Bangladesh, offering a wide range of stylish and comfortable shoes for every occasion.
                    </p>
                </div>

                {/* Mission Section */}
                <div className="mt-12">
                    <div className="flex flex-col items-center lg:flex-row lg:justify-between">
                        <div className="lg:w-1/2">
                            <h3 className="text-xl font-semibold text-gray-700">Our Mission</h3>
                            <p className="mt-4 text-base text-gray-600">
                                At KHANDAKAR SHOES, our mission is to provide high-quality footwear that combines durability, comfort, and style. We aim to serve our customers by offering shoes that meet their every need—from daily wear to special events.
                            </p>
                        </div>
                        <div className="lg:w-1/2 mt-8 lg:mt-0">
                            {/* <img
                                src="https://cdn.shopify.com/s/files/1/2287/9679/files/accessories_1_2d07230f-c6d9-40d0-a6d4-65e560acdf93.jpg?v=1729053611"
                                alt="Shoe Collection"
                                className="rounded-lg shadow-lg w-full"
                            /> */}
                        </div>
                    </div>
                </div>

                {/* History Section */}
                <div className="mt-16">
                    <h3 className="text-2xl font-semibold text-gray-700 text-center">
                        Our Story
                    </h3>
                    <p className="mt-4 text-lg text-gray-600 text-center">
                        KHANDAKAR SHOES was founded in Bangladesh with the vision of creating high-quality footwear that reflects both elegance and practicality. Over the years, we've built a reputation for delivering exceptional shoes that exceed customer expectations. Whether you're looking for formal shoes, casual wear, or athletic footwear, we've got you covered.
                    </p>
                </div>

                {/* Our Values */}
                <div className="mt-12">
                    <h3 className="text-2xl font-semibold text-gray-700 text-center">
                        Our Values
                    </h3>
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                        <div className="text-center">
                            <svg
                                className="mx-auto h-12 w-12 text-indigo-600"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                x="0"
                                y="0"
                                width="24"
                                height="24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M12 2a9 9 0 1 0 9 9 9 9 0 0 0-9-9zm1 4h-2v4h2V6zm-1 6a1 1 0 0 0-1 1v4h2v-4a1 1 0 0 0-1-1z"
                                />
                            </svg>
                            <h4 className="text-xl font-semibold text-gray-800 mt-4">Quality</h4>
                            <p className="mt-2 text-gray-600">
                                We believe in providing premium quality shoes that stand the test of time. Each pair is crafted with the finest materials to ensure long-lasting comfort.
                            </p>
                        </div>

                        <div className="text-center">
                            <svg
                                className="mx-auto h-12 w-12 text-indigo-600"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                x="0"
                                y="0"
                                width="24"
                                height="24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                            <h4 className="text-xl font-semibold text-gray-800 mt-4">Innovation</h4>
                            <p className="mt-2 text-gray-600">
                                We're always looking for new ways to improve. Innovation is at the heart of everything we do, from our designs to our materials.
                            </p>
                        </div>

                        <div className="text-center">
                            <svg
                                className="mx-auto h-12 w-12 text-indigo-600"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                x="0"
                                y="0"
                                width="24"
                                height="24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M9 19v-6h6v6m-6-8h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2z"
                                />
                            </svg>
                            <h4 className="text-xl font-semibold text-gray-800 mt-4">Customer Satisfaction</h4>
                            <p className="mt-2 text-gray-600">
                                Our customers are our top priority. We strive to provide an exceptional shopping experience by offering personalized services and support.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Contact Us Section */}
                <div className="mt-16 text-center">
                    <h3 className="text-2xl font-semibold text-gray-700">
                        Get in Touch
                    </h3>
                    <p className="mt-4 text-lg text-gray-600">
                        Have any questions or want to know more? Feel free to contact us. We're here to help you!
                    </p>
                    <button className="mt-6 px-8 py-3 bg-indigo-600 text-white text-lg rounded-full hover:bg-indigo-700 transition duration-300">
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
    );
};

export default About;
