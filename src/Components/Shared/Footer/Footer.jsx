import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer bg-gray-900 text-neutral-content p-10 ">
            <nav>
                <h6 className="footer-title text-white">Services</h6>
                <a className="link link-hover text-white">Branding</a>
                <a className="link link-hover text-white">Design</a>
                <a className="link link-hover text-white">Marketing</a>
                <a className="link link-hover text-white">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title text-white">Company</h6>
                <a className="link link-hover text-white">About us</a>
                <a className="link link-hover text-white"><Link to="/contact">Contact</Link></a>
                <a className="link link-hover text-white">Jobs</a>
                <a className="link link-hover text-white">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title text-white">Legal</h6>
                <a className="link link-hover text-white">Terms of use</a>
                <a className="link link-hover text-white">Privacy policy</a>
                <a className="link link-hover text-white">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;