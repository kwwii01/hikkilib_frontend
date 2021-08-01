import {Link} from "react-router-dom";
import {useState} from "react";

const Register = () => {
    const [username, setUsername] = useState([]);
    const [email, setEmail] = useState([]);
    const [password1, setPassword1] = useState([]);
    const [password2, setPassword2] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const onUsernameChange = (e) => {
        setUsername(e.target.value)
    }
    const onEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const onPassword1Change = (e) => {
        setPassword1(e.target.value)
    }
    const onPassword2Change = (e) => {
        setPassword2(e.target.value)
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
                                    <p className="text-muted mb-4">Create your account!</p>
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-group mb-3">
                                            <input id="inputUsername" type="text" placeholder="Username" required
                                                   autoFocus="" name='username' onChange={onUsernameChange}
                                                   className="form-control rounded-pill border-0 shadow-sm px-4" />
                                        </div>
                                        <div className="form-group mb-3">
                                            <input id="inputEmail" type="text" placeholder="Email address"
                                                   autoFocus="" name='email' onChange={onEmailChange}
                                                   className="form-control rounded-pill border-0 shadow-sm px-4" />
                                        </div>
                                        <div className="form-group mb-3">
                                            <input id="inputPassword1" type="password" placeholder="Password" required
                                                   name='password1' onChange={onPassword1Change}
                                                   className="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                                        </div>
                                        <div className="form-group mb-3">
                                            <input id="inputPassword2" type="password" placeholder="Confirm password"
                                                   required name='password2' onChange={onPassword2Change}
                                                   className="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                                        </div>
                                        <button type="submit"
                                                className="btn btn-dark btn-block text-uppercase mb-2 rounded-pill shadow-sm">Sign
                                            up
                                        </button>
                                        <div className="text-center d-flex justify-content-between mt-4">
                                            <p>Already have an account? <Link to="/users/register"
                                                  className="font-italic text-muted">
                                                <u>Login now</u></Link></p></div>
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

export default Register