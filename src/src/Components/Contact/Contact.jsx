import React, { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement form submission logic here
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Contact Info Section */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-semibold text-gray-800">Contact Us</h2>
                    <p className="mt-4 text-lg text-gray-600">
                        We would love to hear from you! Whether you have a question, comment, or concern, we are here to help.
                    </p>
                </div>

                {/* Contact Form */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="lg:col-span-1 bg-white p-8 shadow-lg rounded-lg">
                        <h3 className="text-2xl font-semibold text-gray-700">Send Us a Message</h3>
                        <form onSubmit={handleSubmit} className="mt-6">
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-gray-700">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 mt-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 mt-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700">Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        className="w-full px-4 py-2 mt-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full mt-4 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Contact Info Section */}
                    <div className="lg:col-span-1 bg-white p-8 shadow-lg rounded-lg">
                        <h3 className="text-2xl font-semibold text-gray-700">Contact Information</h3>
                        <div className="mt-6 space-y-6">
                            <div>
                                <h4 className="text-xl text-gray-800">Store Location</h4>
                                <p className="text-gray-600">
                                    123 Shoe Street, Dhaka, Bangladesh
                                </p>
                            </div>

                            <div>
                                <h4 className="text-xl text-gray-800">Phone</h4>
                                <p className="text-gray-600">+880 123 456 7890</p>
                            </div>

                            <div>
                                <h4 className="text-xl text-gray-800">Email</h4>
                                <p className="text-gray-600">info@khandakarshoes.com</p>
                            </div>

                            <div>
                                <h4 className="text-xl text-gray-800">Business Hours</h4>
                                <p className="text-gray-600">
                                    Mon - Fri: 9:00 AM - 6:00 PM
                                    <br />
                                    Sat - Sun: Closed
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Google Map Section */}
                <div className="mt-16">
                    <h3 className="text-2xl font-semibold text-gray-700 text-center">
                        Find Us On Google Maps
                    </h3>
                    <div className="mt-6">
                        <div className="relative overflow-hidden" style={{ paddingBottom: "56.25%" }}>
                            <iframe
                                title="KHANDAKAR SHOES Location"
                                className="absolute top-0 left-0 w-full h-full"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2585.541016043648!2d88.79257195100496!3d23.586134577368764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fecdaa0135b057%3A0xfd38ea753c569c4e!2z4Kac4Kav4Ka84Kaw4Ka-4Kau4Kaq4KeB4KawIOCmmuCnjOCmp-CngeCmsOCngOCmquCmvuCmoeCmvOCmviDgpojgpqbgppfgpr7gprkg4Kau4Kav4Ka84Kam4Ka-4Kao!5e0!3m2!1sen!2sbd!4v1739551937027!5m2!1sen!2sbd"
                                frameBorder="0"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <p className="mt-4 text-lg text-center text-gray-600">
                            Visit our store or find us on the map above!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
