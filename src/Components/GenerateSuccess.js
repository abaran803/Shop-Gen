import React from 'react'
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom'

const GenerateSuccess = () => {
    const location = useLocation();
    const history = useHistory();
    if(!(location.state)) {
        history.replace('/generate');
    }
    return (
        <div>GenerateSuccess</div>
    )
}

export default GenerateSuccess