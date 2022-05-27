import React from "react";
import { Button } from "react-bootstrap";
import Login from "./Login";
import "./login.css";

const Index = () => {
    return (
        <div className="modal-body">
            <div className="col-md-6">
                <div>
                    <h1>ZYMR</h1>
                    <h3>Login</h3>
                <div className="wrap">
                    <Login />
                </div>
                <h6>OR</h6>
                <div>
                   <Button >Sign in with Google</Button>

                </div>
                </div>
                
            </div>
            <div className="col-md-6">
                {/* <!-- Your second column here --> */}
            </div>
        </div>


    );
};
export default Index;