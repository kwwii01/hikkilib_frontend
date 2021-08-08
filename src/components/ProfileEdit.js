import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {addErrorMessage} from "../actions/messages";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export const ProfileEdit = () => {
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const history = useHistory();
    const [profileToEdit, setProfileToEdit] = useState(null)

    useEffect(() => {
        if (auth.isAuthenticated === false) {
            dispatch(addErrorMessage("You need to be logged in."));
            history.replace('/users/login');
        } else {
            setProfileToEdit(auth.current_profile);
        }
    }, [auth.current_profile])

    return (
        <>{profileToEdit
            ? <>
                <h1 className='infoCategory'>{profileToEdit.user}'s profile editing</h1>
                <div className="row">
                   <div className="col-md-4">
                        <div className="container">
                            <img src={profileToEdit.picture} alt={profileToEdit.user} width='200' height='200' />
                            <div className="mb-3">
                                <label htmlFor="formPicture" className="form-label">Upload picture</label>
                                <input className="form-control" type="file" id="formPicture" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="container">
                            <p><br/>
                                <span className='h4 mt-5'>Sex:</span>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio"
                                           id="sexChoiceRadio1"/>
                                    <label className="form-check-label fs-5" htmlFor="sexChoiceRadio1">
                                        Male
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio"
                                           id="sexChoiceRadio2"/>
                                    <label className="form-check-label fs-5" htmlFor="sexChoiceRadio2">
                                        Female
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio"
                                           id="sexChoiceRadio3"/>
                                    <label className="form-check-label fs-5" htmlFor="sexChoiceRadio3">
                                        Do not state
                                    </label>
                                </div>
                            </p>
                            <p><br/>
                                <span className='h4 mt-5'>Birth date:</span>
                                <DatePicker />
                            </p>
                            <p><br/>
                                <div className="form-floating">
                                    <textarea className="form-control" placeholder="Tell us something about yourself"
                                              id="bioInput" style={{height : '100px'}}>{profileToEdit.bio}</textarea>
                                    <label htmlFor="bioInput">Bio</label>
                                </div>
                            </p>
                            <button className="btn btn-lg btn-dark">Save changes</button>
                        </div>
                    </div>
                </div>
              </>
            : <h1>Loading...</h1>}
        </>
    )
}