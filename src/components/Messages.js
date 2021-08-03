import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { flushMessages } from "../actions/messages";
import { useAlert } from "react-alert";

const Messages = () => {
    const messages = useSelector((state) => state.messages);
    const dispatch = useDispatch();
    const alert = useAlert();

    useEffect(() => {
        if (!messages.isFlushed) {
            if (messages.success) {
                messages.success.forEach((msg) => {
                    alert.success(msg);
                });
            }
            if (messages.errors) {
                messages.errors.forEach((msg) => {
                    alert.error(msg);
                });
            }
            if (messages.warnings) {
                messages.warnings.forEach((msg) => {
                    alert.info(msg);
                });
            }
            dispatch(flushMessages());
        }
    });

    return (
        <></>
    )
};

export default Messages;