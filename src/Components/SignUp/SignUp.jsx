import React, { useContext, useState } from 'react';
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, } from "firebase/auth";
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../../context/UserContext';
import bgSignInImg from '../../assets/carousel/168371-mountain-surface_hub-highland-slope-afterglow-2560x1440.jpg'
const SignUp = () => {
    const { createUser, updateUser, googleSignIn, verifyEmail } = useContext(AuthContext)
    const [error, setError] = useState();
    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        if (!/(?=.*?[A-Z])/.test(password)) {
            setError("Atleast one character should be uppercase(A-Z)");
            return;
        }
        if (!/(?=.*?[a-z])/.test(password)) {
            setError("Atleast one character should be lowercase(a-z)");
            return;
        }
        if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
            setError("Atleast one character should be # ? ! @ $ % ^ & * - ");
            return;
        }

        if (password.length < 6) {
            setError("Password should be more than 6 character");
            return;
        }
        setError("");
        createUser(email, password)
            .then((result) => {
                const user = result.user;
                updateUser(name);
                verifyEmail()
                    .then(() => {
                        alert("please check your email and verify your email address");
                    })
                    .catch((error) => {
                        console.log(error);

                    });
                console.log(user);
            })
            .catch((error) => {
                console.log("Error: ", error);

            });
        form.reset();


    };

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                const user = result.user;
                console.log(user);


            })
            .catch((error) => {
                console.log(error);

            });
    }

    return (
        <div className=" bg-custom-image object-contain bg-cover bg-center h-full" style={{ backgroundImage: `url(${bgSignInImg})` }}>
            <div className='flex justify-center py-12'>
                <Toaster />
                <div style={{ border: '2px solid #ffffff33' }} className=' bg-transparent backdrop-blur-xl text-gray-50 shadow-lg bordered w-auto h-auto md:w-[650px] md:h-[870px] '>
                    <div className='  shadow-lg bordered  '>
                        <form onSubmit={handleSignUp} className='card-body items-center py-4'>
                            <div>
                                <h1 className='font-bold text-4xl py-5'>Sign Up</h1>

                            </div>
                            <div>
                                <button onClick={handleGoogleSignIn} className=" h-12 flex justify-center items-center cursor-pointer rounded font-bold w-[240px]  md:w-[428px] bg-[#b1bcfc]">  <FontAwesomeIcon className='w-9 h-5 ' icon={faGoogle} /> Sign Up with Google</button>
                            </div>
                            <div className='mt-4 mb-2'>
                                {/* <button className=" h-12 flex cursor-pointer justify-center items-center rounded font-bold w-[240px]  md:w-[428px] bg-[#b1bcfc]"> <FontAwesomeIcon className='w-9 h-5' icon={faGithub} /> Sign Up with Github</button> */}
                                <div className="divider  font-bold">Or Sign Up with Email</div>
                            </div>

                            <div className=''>
                                <div className='form-control'>
                                    <label className="label">
                                        <span className='label-text font-bold'>First Name</span>
                                    </label>
                                    <input
                                        type="Name"
                                        name="firstName"
                                        placeholder='First Name' className='input input-bordered text-black font-bold md:w-[428px] bg-[#f3f5f7] ' required />
                                </div>
                                <div className='form-control'>
                                    <label className="label">
                                        <span className='label-text font-bold'>Last Name</span>
                                    </label>
                                    <input
                                        type="name"
                                        name="lastName"
                                        placeholder='Last Name' className='input input-bordered text-black font-bold md:w-[428px] bg-[#f3f5f7]' required />
                                </div>
                            </div>
                            <div className='form-control'>
                                <label className="label">
                                    <span className='label-text font-bold'>Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder='Email'
                                    className='input input-bordered text-black md:w-[428px] font-bold bg-[#f3f5f7]' required />
                            </div>

                            <div className=''>
                                <div className='form-control'>
                                    <label className="label">
                                        <span className='label-text font-bold'>Password</span>
                                    </label>
                                    <input
                                        type="password"
                                        name="password" placeholder='Password' className='input text-black input-bordered md:w-[428px] font-bold bg-[#f3f5f7]' required />
                                </div>
                                <div className='form-control'>
                                    <label className="label">
                                        <span className='label-text font-bold'>Confirm Password</span>
                                    </label>
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        placeholder='Confirm Password' className='input text-black input-bordered md:w-[428px] font-bold bg-[#f3f5f7] ' required />
                                    <p className='text-red-500'>{error}</p>
                                </div>
                                <div>
                                    <label className="label">
                                        <a href="#" className="label-text-alt font-bold  link link-hover">   <input className='mt-1' type="checkbox" /> I agree to the  Terms of service </a>
                                    </label>
                                </div>
                            </div>

                            <label className="label">
                                <Link to="/logIn" className="label-text-alt  link link-hover">Already have an account? <span className='font-bold'>Log In</span></Link>
                            </label>
                            <div className="form-control mt-6">
                                <input type='submit' className=" cursor-pointer h-12 rounded font-bold w-[230px] md:w-[428px] bg-[#6466f3]" value="Sign Up" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
