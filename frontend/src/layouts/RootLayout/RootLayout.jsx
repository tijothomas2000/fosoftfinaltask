import "./RootLayout.scss";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
    const currentUser = false;
    return (
        <div className="main">
            <Navbar currentUser={currentUser} />
            <Outlet />
            <Footer />
        </div>
    );
}