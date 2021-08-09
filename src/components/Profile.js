import {Link, useHistory, useLocation, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getProfile} from "../actions/profiles";
import {addErrorMessage} from "../actions/messages";

export const Profile = () => {
    const { profileId } = useParams();
    const dispatch = useDispatch();
    const location = useLocation();
    const history = useHistory();
    const auth = useSelector((state) => state.auth);
    const profiles = useSelector((state) => state.profiles);
    const [profileToShow, setProfileToShow] = useState(null);

    useEffect(() => {
        if (location.pathname !== '/profiles/me') dispatch(getProfile(profileId));
        // eslint-disable-next-line
    }, [profileId]);

    useEffect(() => {
        if (location.pathname === '/profiles/me') {
            if (auth.current_profile) {
                setProfileToShow(auth.current_profile)
            } else if (auth.isAuthenticated === false) {
                dispatch(addErrorMessage("You need to be logged in."));
                history.replace('/users/login');
            }
        } else {
            if ((profiles.profile && auth.current_profile) && (profiles.profile.id === auth.current_profile.id)) {
                history.replace('/profiles/me')
            }
            setProfileToShow(profiles.profile);
        }
        // eslint-disable-next-line
    }, [profileId, profiles.isLoading, auth.current_profile]);

    return (
        <>
            {profileToShow
                ? <>
                    <h1 className='infoCategory'>{profileToShow.user}'s profile</h1>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="container">
                                <img src={profileToShow.picture} alt={profileToShow.user} width='200' height='200' />
                            </div>
                            {(profileToShow === auth.current_profile) &&
                            <><Link className='h3 text-dark' to='/profiles/me/edit'>Edit profile</Link><br/></>}
                            <Link className='h3 text-dark' to='#'>View anime list</Link>
                        </div>
                        <div className="col-md-9">
                            <div className="container">
                                <p><br/>
                                    <span className='h4 mt-5'>Sex:</span>
                                    {profileToShow.sex
                                        ? <h3>{profileToShow.sex}</h3>
                                        : <h3>Not stated</h3>}
                                </p>
                                <p><br/>
                                    <span className='h4 mt-5'>Birth date:</span>
                                    {profileToShow.birth_date
                                        ? <h3>{profileToShow.birth_date}</h3>
                                        : <h3>Not stated</h3>}
                                </p>
                                <p><br/>
                                    <span className='h4 mt-5'>Bio:</span>
                                    {profileToShow.bio ? <div className="container border fs-5">{profileToShow.bio}</div>
                                                       : <h3>Not stated</h3>}
                                </p>
                            </div>
                        </div>
                    </div>
                  </>
                : profiles.isLoading && <h1>Loading...</h1>
            }
        </>
    )
}