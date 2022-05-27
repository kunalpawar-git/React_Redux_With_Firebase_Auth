import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { logoutAction } from '../Modules/Auth/Actions/logout.action';

const Header = () => {
    const { currentUser } = useSelector(state => state.user);
    const dispatch = useDispatch();
    
    const handleAuth = () => {  
        if (currentUser) {
            dispatch(logoutAction()) 
        }
    }

    return (
        <div className="ui fixed menu">
            <div className="ui container center">
               <h2>Zudio</h2>
               <Button onClick={handleAuth}>Logout</Button>
            </div>

        </div>
    )
}

export default Header;
