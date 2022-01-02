import './index.css';
export const Register = () => {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginRight">
                    <h3 className="loginLogo">CYBERGRAM</h3>
                    <div className="loginBox">
                        <input placeholder="Email" className="loginInput" />
                        <input
                            placeholder="Password"
                            type="password"
                            className="loginInput"
                        />
                        <input
                            placeholder="Confirm Password"
                            className="loginInput"
                            type="password"
                        />

                        <button className="loginButton">REGISTER</button>
                        <span className="loginForgot"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};
