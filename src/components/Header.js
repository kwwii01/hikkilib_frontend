import {Link} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {logoutUser} from "../actions/auth";
import {useEffect, useState} from "react";

const Header = () => {
    const auth = useSelector((state) => state.auth);

    const dispatch = useDispatch();
    const [username, setUsername] = useState(['']);
    const user = auth.user

    const onLogoutClick = () => {
        dispatch(logoutUser(auth.token));
    };

    useEffect(() => {
        if (user) {
            setUsername(user.username);
        }
    },[user]);

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
                        {auth.isAuthenticated
                        ? <><li className="nav-item"><Link to="#" className="nav-link link-dark px-2">{username}, </Link></li>
                        <li className="nav-item"><button onClick={onLogoutClick}
                                                       className="nav-link link-dark px-2">Logout</button></li>  </>
                        : <><li className="nav-item"><Link to="/users/login" className="nav-link link-dark px-2">Login</Link></li>
                        <li className="nav-item"><Link to="/users/register"
                                                       className="nav-link link-dark px-2">Register</Link></li></>}
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