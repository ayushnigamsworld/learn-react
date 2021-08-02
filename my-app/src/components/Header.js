import React from  'react';
import PropTypes from 'prop-types';
import Button from "./Button";
import {useState} from "react";

const Header = (props) => {
    const [btnName, setBtnName] = useState('Add');
    const [btnClr, setBtnClr] = useState('red');

    const onClick = (e) => {
      // alert(e);
      props.toggleAddTaskBtn();
      setBtnName(btnName === 'Add' ? 'Close' : 'Add');
      setBtnClr(btnClr === 'red' ? 'black' : 'red');
    };

    return (
        <header className='header'>
            <h1>Task Tracker of {props.title}</h1>
            <Button text={btnName} color={btnClr} onClick={onClick}/>
        </header>
    );
};

Header.defaultProps = {
    title: 'Default User',
    toggleAddTaskBtn: () => {}
};

Header.protoTypes = {
    title: PropTypes.string.isRequired,
    toggleAddTaskBtn: PropTypes.function
};

export default Header;