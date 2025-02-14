import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import loginImage from "../../assets/images/signin-image.webp"
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { signInWithEmailAndPassword, } from 'firebase/auth';
import { AuthContext } from '../../context/UserContext';
import bgSignInImg from '../../assets/carousel/168371-mountain-surface_hub-highland-slope-afterglow-2560x1440.jpg'


const SignIn = () => {
    const { signIn } = useContext(AuthContext)
    const [users, setUsers] = useState({});
    const [error, setError] = useState("")
    // console.log(users);

    const handleSignIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // const confirmPassword = form.confirmPassword.value;
        // const finalPassword = password + confirmPassword;

        SignIn(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);

                // setUsers(user)

            })
            .catch((error) => {
                const errorMessage = error.message
                return setError(errorMessage)

            })

        form.reset();
        setError('');
    }

    return (
        <div className=" bg-custom-image object-contain bg-cover bg-center h-auto" style={{ backgroundImage: `url(${bgSignInImg})` }}>

            <div className='flex justify-center  py-12'>

                <div className='  '>

                    <div style={{ border: '2px solid #ffffff33' }} className=' bg-transparent backdrop-blur-xl text-gray-50 shadow-lg bordered w-auto h-[720px] md:w-[600px] '>
                        <form onSubmit={handleSignIn} className='card-body items-center py-4'>
                            <div>
                                <h1 className='font-bold text-4xl my-7 md:my-10 '>Log In</h1>
                            </div>
                            <div>
                                <button className=" h-12 flex justify-center items-center	cursor-pointer	 rounded font-bold w-[240px]  md:w-[428px] bg-[#b1bcfc]">  <FontAwesomeIcon className='w-9 h-5 ' icon={faGoogle} /> Log In with Google</button>
                            </div>
                            <div className=' mb-2'>
                                {/* <button className=" h-12 flex cursor-pointer	 justify-center items-center rounded font-bold w-[240px]  md:w-[428px]  bg-[#b1bcfc]"> <FontAwesomeIcon className='w-9 h-5' icon={faGithub} /> Log In with Github</button> */}
                                <div className="divider mt-10 font-bold">Or Log In with Email</div>
                            </div>
                            <div className='flex gap-2'>

                            </div>
                            <div className='form-control'>
                                <label className="label">
                                    <span className='label-text font-bold'>Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder='Email'
                                    className='input input-bordered md:w-[428px] font-bold bg-[#f3f5f7]' required />
                            </div>

                            <div className=''>
                                <div className='form-control'>
                                    <label className="label">
                                        <span className='label-text font-bold'>Password</span>
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder='Password'
                                        className='input input-bordered md:w-[428px] font-bold bg-[#f3f5f7]' required />
                                    <p className='text-red-500'>{error}</p>
                                    <label className="label">
                                        <a href="#" className="label-text-alt font-bold link link-hover">Forgot password?</a>
                                    </label>
                                </div>

                            </div>
                            <label className="label">
                                <Link to="/signUp" className="label-text-alt  link link-hover">Don't have an account? <span className='font-bold'>Sign Up</span></Link>
                            </label>
                            <div className="form-control mt-6">
                                <input type='submit' className=" cursor-pointer h-12 rounded font-bold w-[230px] md:w-[428px] bg-[#6466f3]" value="Login" />
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;