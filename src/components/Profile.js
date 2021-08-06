import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getProfile} from "../actions/profiles";

export const Profile = () => {
    const { profileId } = useParams();
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    const profile = useSelector((state) => state.profiles.profile);
    const [profileToShow, setProfileToShow] = useState(null);
    const [currentProfileId, setCurrentProfileId] = useState(null);

    useEffect(() => {
        if (!profileToShow) {
            dispatch(getProfile(profileId));
            setProfileToShow(profile);
        }
    });

    useEffect(() => {
        if (auth.current_profile) {
            setCurrentProfileId(auth.current_profile.id);
        }
    }, [auth.current_profile]);

    return (
        <>
            {profileToShow
                ? <>
                    <h1>{profileToShow.user}</h1>
                    {(currentProfileId === profileToShow.id) && <h3>Edit profile</h3>}
                  </>
                : <h1>Profile does not exist</h1>
            }
        </>
    )
}