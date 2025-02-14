import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyC4zUyBDgJ-GT5sswDNKh1n3AwIe6Dm738",
    authDomain: "first-react-ecommerce-project.firebaseapp.com",
    projectId: "first-react-ecommerce-project",
    storageBucket: "first-react-ecommerce-project.firebasestorage.app",
    messagingSenderId: "189133473546",
    appId: "1:189133473546:web:22949014e1d8992b60dcf3"
};

const app = initializeApp(firebaseConfig);

export default app;