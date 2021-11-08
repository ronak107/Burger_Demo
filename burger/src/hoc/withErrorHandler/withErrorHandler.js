import React from "react";

import Modal from "../../components/UI/Modal/Modal";
import Aex from "../Aex/Aex";
const withErrorHandler = (WrappedComponent) => {
    return (props) => {
        return (
            <Aex>
                <Modal show>
                   something didnt work...!! 
                </Modal>
                <wrappedComponent {...props} />
            </Aex>

        )

    }
}
export default withErrorHandler;