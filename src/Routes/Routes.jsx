import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import About from "../Components/About/About";
import Main from "../Layout/Main";
import SignUp from "../Components/SignUp/SignUp";
import Contact from "../Components/Contact/Contact";
import SignIn from "../Components/SignIn/SignIn";
import Orders from "../Components/Orders/Orders";
import { productsAndCartLoader } from "../loaders/productsAndCartLoader";
import MenProducts from "../Components/Home/Products/MenProducts";
import WomenProducts from "../Components/Home/Products/WomenProducts";
import ChildrenProducts from "../Components/Home/Products/ChildrenProducts";
import Accessories from "../Components/Home/Products/Accessories";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/men-products',
                element: <MenProducts></MenProducts>
            },
            {
                path: '/women-products',
                element: <WomenProducts></WomenProducts>
            },
            {
                path: '/children-products',
                element: <ChildrenProducts></ChildrenProducts>
            },
            {
                path: '/accessories',
                element: <Accessories></Accessories>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: "/logIn",
                element: <SignIn></SignIn>
            },
            {
                path: "/signUp",
                element: <SignUp></SignUp>
            },
            {
                path: "/orders",
                loader: productsAndCartLoader,
                element: <Orders> </Orders>
            },
        ]
    },

]);

export default router;