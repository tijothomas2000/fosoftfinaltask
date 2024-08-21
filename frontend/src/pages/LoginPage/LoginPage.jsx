import { useContext, useState } from "react";
import "./LoginPage.scss";
import { Link, useNavigate } from "react-router-dom";
import apiRequest from "../../apiRequest";
import { AuthContext } from "../../context/AuthContext";

export default function LoginPage() {
    const [loginState, setLoginState] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { updateUser } = useContext(AuthContext);
    async function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const username = formData.get("username");
        const password = formData.get("password");
        const email = formData.get("email");
        if (!loginState) {
            setError("");
            setIsLoading(true);
            try {
                const response = await apiRequest.post("/auth/register", { email, username, password });
                console.log(response.data);
                setLoginState(!loginState);
            } catch (err) {
                console.log(err.response.data.message);
                setError(err.response.data.message);
            }
            setIsLoading(false);
        } else {
            setError("");
            setIsLoading(true);
            try {
                const response = await apiRequest.post("/auth/login", { username, password });
                console.log(response.data);
                updateUser(response.data);
                navigate("/");
            } catch (err) {
                console.log(err.response.data.message);
                setError(err.response.data.message);
            }
            setIsLoading(false);
        }
    }
    return (
        <div className="loginpage">
            <div className="container">
                <div className="loginmaincontent">
                    <div className="welcometitle">
                        <h1 className="welcomefont">Welcome to Gourmet Haven Hotel</h1>
                    </div>
                    <div className="loginform">
                        <form className="login" onSubmit={handleSubmit}>
                            <div className="loginheading">
                                <div className="logintitle">
                                    <h2>Gourmet Heaven Hotel</h2>
                                </div>
                                <div className="logintitle">
                                    {!loginState ? <h2>REGISTER FORM</h2> : <h2>LOGIN FORM</h2>}
                                </div>
                            </div>
                            <div className="mainloginsection">
                                <div className="logincontent">
                                    <h3>Username</h3>
                                    <input name="username" type="text" className="inputfield" minLength={3} maxLength={10} required />
                                </div>
                                {!loginState &&
                                    <div className="logincontent">
                                        <h3>E-Mail ID</h3>
                                        <input name="email" type="email" className="inputfield" required />
                                    </div>
                                }
                                <div className="logincontent">
                                    <h3>Password</h3>
                                    <input name="password" type="password" className="inputfield" minLength={3} maxLength={10} required />
                                    <p>Forgot Password ?</p>
                                </div>
                                <div className="loginbutton">
                                    <button disabled={isLoading} className="loginbtn">{!loginState ? "Register" : !loginState && isLoading ? "Registering" : loginState && isLoading ? "Logging In" : "Login"}</button>
                                </div>
                                {error && <p style={{ color: "red" }}>{error}</p>}
                                <p>{`${loginState ? "Not registered ?" : "Have an account ?"}`}<Link onClick={() => setLoginState(!loginState)}>{`${loginState ? "Register" : "Sign In"}`}</Link> </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
