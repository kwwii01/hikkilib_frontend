import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../actions/auth";
import { useEffect, useState } from "react";

const Header = () => {
    const auth = useSelector((state) => state.auth);

    const dispatch = useDispatch();
    const history = useHistory();
    const [username, setUsername] = useState(['']);
    const [picture, setPicture] = useState(['']);
    const [searchInputValue, setSearchInputValue] = useState('');
    const user = auth.user;
    const current_profile = auth.current_profile;

    const onLogoutClick = () => {
        dispatch(logoutUser(auth.token));
    };

    const onSearchSubmit = (e) => {
        e.preventDefault()
        if (searchInputValue === '') {
            history.push('/');
        } else {
            history.push(`/animes/search/${searchInputValue}`);
        }
    }

    const onChange = (e) => {
        setSearchInputValue(e.target.value);
    }

    useEffect(() => {
        if (user) {
            setUsername(user.username);
        }
    },[user]);

    useEffect(() => {
        if (current_profile) {
            setPicture(current_profile.picture);
        }
    }, [current_profile]);

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
                        ? <><li className="nav-item"><Link to="/profiles/me" className="nav-link link-dark px-2">{username},
                                <img src={picture} alt="username" width='40' height='40'/>
                        </Link></li>
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
                    <form className="col-12 col-lg-auto mb-3 mb-lg-0" onSubmit={onSearchSubmit}>
                        <input type="search" className="form-control" onChange={onChange}
                               placeholder="Search..." aria-label="Search" />
                    </form>
                </div>
            </header>
        </>
    )
}

export default Header