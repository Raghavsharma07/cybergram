import './index.css';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Register = () => {
    const email = useRef();
    const username = useRef();
    const password = useRef();
    const confpassword = useRef();
    const navigate = useNavigate();
    const clickHandle = async (e) => {
        e.preventDefault();
        if (confpassword.current.value !== password.current.value) {
            window.alert("Passwords don't Match ");
        } else {
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
            };
            try {
                await axios.post(
                    'http://localhost:8800/api/auth/register',
                    user
                );
                navigate('/login');
            } catch (err) {
                console.log(err);
                window.alert('USER EXISTS !!');
                navigate('/login');
            }
        }
    };
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginRight">
                    <h3 className="loginLogo">CYBERGRAM</h3>
                    <form onSubmit={clickHandle} className="loginBox">
                        <input
                            type="text"
                            placeholder="Username"
                            className="loginInput"
                            required
                            ref={username}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="loginInput"
                            required
                            ref={email}
                        />
                        <input
                            placeholder="Password"
                            type="password"
                            className="loginInput"
                            minLength="8"
                            required
                            ref={password}
                        />
                        <input
                            placeholder="Confirm Password"
                            className="loginInput"
                            type="password"
                            minLength="8"
                            required
                            ref={confpassword}
                        />

                        <button type="submit" className="loginButton">
                            REGISTER
                        </button>
                        <span className="loginForgot"></span>
                    </form>
                </div>
            </div>
        </div>
    );
};
