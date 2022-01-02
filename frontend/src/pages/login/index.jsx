import './index.css';
export const Login = () => {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginRight">
                    <h3 className="loginLogo">CYBERGRAM</h3>
                    <div className="loginBox">
                        <input placeholder="Email" className="loginInput" />
                        <input placeholder="Password" className="loginInput" />
                        <button className="loginButton">LOGIN</button>
                        <span className="loginForgot"></span>
                        <button className="loginRegisterButton">
                            CREATE NEW ACCOUNT
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
