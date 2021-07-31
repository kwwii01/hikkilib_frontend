import {Link} from "react-router-dom";

const Register = () => {
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
                                    <p className="text-muted mb-4">Create your account!</p>
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-group mb-3">
                                            <input id="inputUsername" type="text" placeholder="Username" required
                                                   autoFocus=""
                                                   className="form-control rounded-pill border-0 shadow-sm px-4" />
                                        </div>
                                        <div className="form-group mb-3">
                                            <input id="inputEmail" type="text" placeholder="Email address"
                                                   autoFocus=""
                                                   className="form-control rounded-pill border-0 shadow-sm px-4" />
                                        </div>
                                        <div className="form-group mb-3">
                                            <input id="inputPassword1" type="password" placeholder="Password" required
                                                   className="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                                        </div>
                                        <div className="form-group mb-3">
                                            <input id="inputPassword2" type="password" placeholder="Confirm password" required
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