import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
const Header = (props) => {

    const {title, url} = props;

        return (
            <header className="App-header">
            <div className="App-header-logo">
                <a href={props.url}>
                <img src="http://assets.stickpng.com/thumbs/58718a527b7f6103e35c6ce5.png" className="App-logo" alt="logo" />
                </a>
                <h1>{props.title}</h1>
            </div>

            <ul>
                <li><Link to={`/`} className="App-link">Home</Link></li>
                <li><Link to={`/character`} className="App-link">CharacterUI</Link></li>
                <li><Link to={`/about`} className="App-link">Abour</Link></li>
                <li><Link to={`/contact`} className="App-link">Contact</Link></li>
                <li><Link to={`/notes`} className="App-link">Notes</Link></li>
            </ul>

          </header>
        );
    
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
}

export default Header;