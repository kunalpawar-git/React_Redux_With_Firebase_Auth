import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { logoutAction } from '../Modules/Auth/Actions/logout.action';

const Home = () => {
    const { currentUser } = useSelector(state => state.user);
    const dispatch = useDispatch();
    
    const handleAuth = () => {   
        if (currentUser) {
            dispatch(logoutAction()) 
        }
    }
    return (
        <div>
            <h1>Home</h1>
            <Button onClick={handleAuth}>Logout</Button>
        </div>
    )
}

export default Home;