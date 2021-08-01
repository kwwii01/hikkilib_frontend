import {Link} from "react-router-dom";
import {useState} from "react";

const Login = () => {
    const [username, setUsername] = useState([]);
    const [password, setPassword] = useState([]);

    const onUsernameChange = (e) => {
        setUsername(e.target.value)
    }
    const onPasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div className="container-fluid">
            <div className="row no-gutter">
                <div className="col-md-6 d-none d-md-flex bg-image"></div>
                <div className="col-md-6 bg-light">
                    <div className="login d-flex align-items-center py-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 col-xl-7 mx-auto">
                                    <h3 className="display-4">Hikkilib</h3>
                                    <p className="text-muted mb-4">Log in to your account!</p>
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-group mb-3">
                                            <input id="inputUsername" type="text" placeholder="Username" required
                                                   autoFocus="" name='username' onChange={onUsernameChange}
                                                   className="form-control rounded-pill border-0 shadow-sm px-4" />
                                        </div>
                                        <div className="form-group mb-3">
                                            <input id="inputPassword" type="password" placeholder="Password"
                                                   required name='password' onChange={onPasswordChange}
                                                   className="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                                        </div>
                                        <button type="submit"
                                                className="btn btn-dark btn-block text-uppercase mb-2 rounded-pill shadow-sm">Sign
                                            in
                                        </button>
                                        <div className="text-center d-flex justify-content-between mt-4">
                                            <p>Doesn't have an account? <Link to="/users/register"
                                                  className="font-italic text-muted">
                                                <u>Register now</u></Link></p></div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login