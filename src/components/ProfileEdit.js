import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {addErrorMessage} from "../actions/messages";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import {updateProfile} from "../actions/profiles";

export const ProfileEdit = () => {
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const history = useHistory();
    const [profileToEdit, setProfileToEdit] = useState(null);
    const [sexChoice, setSexChoice] = useState(null);
    const [profileImage, setProfileImage] = useState(null);
    const [profileBio, setProfileBio] = useState(null);
    const [birthDate, setBirthDate] = useState(null);

    useEffect(() => {
        if (auth.isAuthenticated === false) {
            dispatch(addErrorMessage("You need to be logged in."));
            history.replace('/users/login');
        } else {
            setProfileToEdit(auth.current_profile);
        }
    }, [auth.current_profile])

    const onSaveButtonClick = (e) => {
        e.preventDefault();
        dispatch(updateProfile(profileImage, sexChoice, birthDate, profileBio, auth.token, profileToEdit.id));
        history.replace('/profiles/me');
    }

    return (
        <>{profileToEdit
            ? <>
                <h1 className='infoCategory'>{profileToEdit.user}'s profile editing</h1>
                <form>
                    <div className="row">
                       <div className="col-md-4">
                            <div className="container">
                                <img src={profileToEdit.picture} alt={profileToEdit.user} width='200' height='200' />
                                <div className="mb-3">
                                    <label htmlFor="formPicture" className="form-label">Upload picture</label>
                                    <input className="form-control" type="file" id="formPicture"
                                           onChange={(e) => setProfileImage(e.target.files[0])} />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="container">
                                <p><br/>
                                    <span className='h4 mt-5'>Sex:</span>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio"
                                               id="sexChoiceRadio1" value="m" name="sexRadioOptions"
                                               onChange={(e) => setSexChoice(e.target.value)}/>
                                        <label className="form-check-label fs-5" htmlFor="sexChoiceRadio1">
                                            Male
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio"
                                               id="sexChoiceRadio2" value="f" name="sexRadioOptions"
                                               onChange={(e) => setSexChoice(e.target.value)}/>
                                        <label className="form-check-label fs-5" htmlFor="sexChoiceRadio2">
                                            Female
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio"
                                               id="sexChoiceRadio3" name="sexRadioOptions"
                                               onChange={(e) => setSexChoice(null)}/>
                                        <label className="form-check-label fs-5" htmlFor="sexChoiceRadio3">
                                            Do not state
                                        </label>
                                    </div>
                                </p>
                                <p><br/>
                                    <span className='h4 mt-5'>Birth date:</span>
                                    <DatePicker selected={birthDate} dateFormat='yyyy-MM-dd'
                                                onChange={(date) => setBirthDate(date)} />
                                </p>
                                <p><br/>
                                    <div className="form-floating">
                                        <textarea className="form-control" placeholder="Tell us something about yourself"
                                                  id="bioInput" style={{height : '100px'}} defaultValue={profileToEdit.bio}
                                                  onChange={(e) => setProfileBio(e.target.value)}>
                                            </textarea>
                                        <label htmlFor="bioInput">Bio</label>
                                    </div>
                                </p>
                                <button type="submit" className="btn btn-lg btn-dark" onClick={onSaveButtonClick}>Save changes</button>
                            </div>
                        </div>
                    </div>
                </form>
              </>
            : <h1>Loading...</h1>}
        </>
    )
}