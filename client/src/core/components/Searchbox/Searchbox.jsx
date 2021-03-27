import React, {useState, useEffect} from "react";
import "./Searchbox.scss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Searchbox(props) {
    const [code, setCode] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        props.handleSearch(code);
    };

    const handleChange = (e) =>{
        setCode(e.target.value);
    }

    useEffect(()=>{
        if(props.searchboxValue) setCode(props.searchboxValue);
    }, [props.searchboxValue]);

    return (
        <div className="searchbox__container">
            <form className="searchbox__form" onSubmit={onSubmit}>
                <input 
                    className="searchbox__input"
                    placeholder="Nunca dejes de buscar"
                    value={code}
                    onChange={handleChange}
                />
                <button className="searchbox__submit" type="submit">
                    <FontAwesomeIcon icon={faSearch} type="submit"/>
                </button>
            </form>
        </div>
    );
}

export default Searchbox;