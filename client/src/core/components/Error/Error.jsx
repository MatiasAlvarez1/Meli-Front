import React from "react";
import "./Error.scss";
import errorImage from "../../../assets/error.png";
import PropTypes from 'prop-types';

function Error(props) {
    return(
        <div className="error__container">
            <div className="error__container__image">
                <img src={errorImage} alt=""/>
            </div>
            <div className="error__container__message">
                <label className="error__message">{props.message}</label>
            </div>
        </div>
    )
}

Error.propTypes = {
    message: PropTypes.string,
    statusCode: PropTypes.number
}

export default Error;