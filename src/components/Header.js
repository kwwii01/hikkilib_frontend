import {Link} from "react-router-dom";

const Header = () => {
    return (
        <>
            <nav className="py-2 bg-light border-bottom">
                <div className="container d-flex flex-wrap">
                    <ul className="nav me-auto">
                        <li className="nav-item"><Link to="/" className="nav-link link-dark px-2 "
                                                    aria-current="page">Home</Link></li>
                        <li className="nav-item"><a href="https://github.com/kwwiiGod/hikkilib_frontend"
                                                       className="nav-link link-dark px-2">Github</a></li>
                        <li className="nav-item"><Link to="#" className="nav-link link-dark px-2">Contacts</Link></li>
                    </ul>
                    <ul className="nav">
                        <li className="nav-item"><Link to="#" className="nav-link link-dark px-2">Login</Link></li>
                        <li className="nav-item"><Link to="/users/login"
                                                       className="nav-link link-dark px-2">Register</Link></li>
                    </ul>
                </div>
            </nav>
            <header className="py-3 mb-4 border-bottom">
                <div className="container d-flex flex-wrap justify-content-center">
                    <Link to="/"
                       className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">
                        <span className="fs-4">Hikkilib</span>
                    </Link>
                    <form className="col-12 col-lg-auto mb-3 mb-lg-0">
                        <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
                    </form>
                </div>
            </header>
        </>
    )
}

export default Header