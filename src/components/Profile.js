import {useHistory, useLocation, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getProfile} from "../actions/profiles";

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
    }, [profileId]);

    useEffect(() => {
        if (location.pathname === '/profiles/me') {
            if (auth.current_profile) {
                setProfileToShow(auth.current_profile)
            }
        } else {
            if ((profiles.profile && auth.current_profile) && (profiles.profile.id === auth.current_profile.id)) {
                history.replace('/profiles/me')
            }
            setProfileToShow(profiles.profile);
        }
    }, [profileId, profiles.isLoading, auth.current_profile]);

    return (
        <>
            {profileToShow
                ? <>
                    <h1>{profileToShow.user}</h1>
                    {(profileToShow === auth.current_profile) && <h3>Edit profile</h3>}
                  </>
                : profiles.isLoading && <h1>Loading...</h1>
            }
        </>
    )
}