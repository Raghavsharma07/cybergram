import './index.css';
import { useRef } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { loginCall } from '../../apicalls';
import { useContext } from 'react';

export const Login = () => {
    const email = useRef();
    const password = useRef();
    const { isFetching, dispatch } = useContext(AuthContext);
    const clickHandler = (e) => {
        e.preventDefault();
        loginCall(
            { email: email.current.value, password: password.current.value },
            dispatch
        );
    };

    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginRight">
                    <h3 className="loginLogo">CYBERGRAM</h3>
                    <form className="loginBox" onSubmit={clickHandler}>
                        <input
                            type="email"
                            placeholder="Email"
                            className="loginInput"
                            ref={email}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="loginInput"
                            minLength="8"
                            ref={password}
                            required
                        />
                        <button className="loginButton" type="submit">
                            {isFetching ? 'PLEASE WAIT ...' : 'LOGIN'}
                        </button>
                        <span className="loginForgot"></span>
                        <button className="loginRegisterButton">
                            CREATE NEW ACCOUNT
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
